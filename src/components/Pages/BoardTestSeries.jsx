import axios from "axios";
import React, { useEffect, useState } from "react";
import API_CONFIG from "../../Config/apiLink";
import Loader from "../../Layout/Loader";
import PageHeading from "../../Layout/PageHeading";
import Cart from "../Cart";
import Footer from "../Footer";
import NavBar from "../NavBar";

const BoardTestSeries = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [examData, setExamData] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [examSubjects, setExamSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartExams, setCartExams] = useState([]);

  const handleAddTest = (test) => {
    if (window.innerWidth <= 768) {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }

    const isExamAlreadyAdded = cartExams.some((exam) => exam.id === test.id);
    if (isExamAlreadyAdded) {
      console.log("This exam is already in the cart.");
      return;
    }

    setCartExams((prevExams) => [...prevExams, test]);
  };

  const handleDeleteTest = (testId) => {
    if (window.innerWidth <= 768) {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
    setCartExams((prevExams) => prevExams.filter((exam) => exam.id !== testId));
  };

  const handleTabChange = (subject, index) => {
    setActiveTab(index);

    if (subject === 'All') {
      // If "All" is selected, show all exams
      setFilteredExams(examData);
    } else {
      // Filter exams by the selected subject
      const filtered = examData.filter((exam) => exam.subjects === subject);
      setFilteredExams(filtered);
    }
  };

  const getTests = async (token, user) => {
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}/api/exams/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setExamData(response.data.exams);
        setExamSubjects([...new Set(response.data.exams.map((exam) => exam.subjects))]);
        setIsLoading(false);
        setFilteredExams(response.data.exams); // Initially shows all exams
      }
    } catch (error) {
      console.error("Error fetching test data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user"));
    getTests(token, user);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 lg:px-8 py-6 mt-5 mb-5">
        <PageHeading title="Our Latest Test Series" />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container w-full">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 justify-between">
              <div className="flex flex-wrap gap-3 mb-4">
              <button
  onClick={() => handleTabChange('All', -1)}
  className={`py-2 px-4 border border-gray-300 rounded-lg transition-colors duration-200 ease-in-out ${
    activeTab === -1
      ? "bg-green-400 text-gray-800 font-semibold shadow-md"
      : "bg-gray-100 text-gray-600 shadow-sm hover:bg-gray-200"
  }`}
>
  All
</button>
                {examSubjects.map((subject, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabChange(subject, index)}
                    className={`py-2 px-4 border border-gray-300 rounded-lg transition-colors duration-200 ease-in-out ${
                      activeTab === index
                        ? "bg-green-400 text-gray-800 font-semibold shadow-md"
                        : "bg-gray-100 text-gray-600 shadow-sm hover:bg-gray-200"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="md:w-2/3 w-full md:flex-col md:p-5">
                {filteredExams.map((exam) => (
                  <div key={exam.id} className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold mb-2">{exam.chapter_name}</h2>
                      <div className="flex flex-row items-end">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded m-1"
                          onClick={() => handleAddTest(exam)}
                        >
                          Add Test
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded m-1"
                          onClick={() => handleDeleteTest(exam.id)}
                        >
                          Delete Test
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between font-light">
                      <span className="mr-2">Price: ₹{exam.test_price}</span>
                      <span className="mr-2">Subject: {exam.subjects}</span>
                      <span className="mr-2">Test Code: {exam.test_code}</span>
                      <span className="mr-2">{exam.test_series_name}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Cart cartExams={cartExams} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BoardTestSeries;
