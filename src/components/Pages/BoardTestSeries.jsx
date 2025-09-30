import axios from "axios";
import React, { useEffect, useState } from "react";
import API_CONFIG from "../../Config/apiLink";
import Loader from "../../Layout/Loader";
import PageHeading from "../../Layout/PageHeading";
import Cart from "../Cart";
import Footer from "../Footer";
import NavBar from "../NavBar";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const subjectIcons = {
  English : fa.faUniversity,
  Maths : fa.faCalculator,
  Science : fa.faAtom,
  SSc : fa.faPeopleGroup,
  "Computer Science" : fa.faDesktop,
  IT : fa.faComputer,
  Economics : fa.faDollarSign,
  IP : fa.faDesktop,
  Chemistry : fa.faFlask,
  Physics : fa.faGauge,
  default : fa.faFileLines
};

const subjectStyles = {
  English: "bg-blue-400 hover:bg-blue-500 text-white",
  Maths: "bg-green-400 hover:bg-green-500 text-white",
  Science: "bg-orange-400 hover:bg-orange-500 text-white",
  SSc: "bg-purple-400 hover:bg-purple-500 text-white",
  "Computer Science": "bg-red-400 hover:bg-red-500 text-white",
  IT: "bg-teal-400 hover:bg-teal-500 text-white",
  Economics: "bg-yellow-400 hover:bg-yellow-500 text-white",
  IP: "bg-indigo-400 hover:bg-indigo-500 text-white",
  Chemistry: "bg-pink-400 hover:bg-pink-500 text-white",
  Physics: "bg-gray-400 hover:bg-gray-500 text-white",
  default: "bg-gray-200 hover:bg-gray-300 text-gray-800",
};

const BoardTestSeries = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [examData, setExamData] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [examSubjects, setExamSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartExams, setCartExams] = useState([]);
  //new
  const [selectedExamId, setSelectedExamId] = useState(null);

  

  const handleAddTest = (test) => {
    setSelectedExamId(test.id);
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

    if (testId === selectedExamId) {
      setSelectedExamId(null);
    }
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
        console.log("Exam subjects:", examSubjects);
        console.log("Exam data:", response.data.exams);
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
  <FontAwesomeIcon icon={subjectIcons['default']} className="mr-2" />
  All
</button>
                {examSubjects.map((subject, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabChange(subject, index)}
                    className={`py-2 px-4 border border-gray-300 rounded-lg transition-colors duration-200 ease-in-out ${
                      activeTab === index
                        ? `${subjectStyles[subject]} font-semibold shadow-md`
                        : `${subjectStyles[subject]} shadow-sm`
                    }`}
                  >
                    <FontAwesomeIcon icon={subjectIcons[subject]} className="mr-2" />
                    {subject}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="md:w-2/3 w-full md:flex-col md:p-5">
              {filteredExams.map((exam) => {
                const isBlurred = selectedExamId !== null && selectedExamId !== exam.id;

                return (
                  <div
                    key={exam.id}
                    className={`bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg transition duration-200 ease-in-out ${
                      isBlurred ? 'blur-sm pointer-events-none opacity-60' : ''
                    }`}
                  >
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
                );
              })}


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
