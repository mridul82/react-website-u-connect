import axios from "axios";
import React, { useEffect, useState } from "react";
import API_CONFIG from "../../Config/apiLink";
import TOKENS from "../../Config/localStorage";
import Loader from "../../Layout/Loader";
import PageHeading from "../../Layout/PageHeading";
import Cart from "../Cart";
import ExamSummary from "../ExamSummary";
import Footer from "../Footer";
import NavBar from "../NavBar";



const BoardTestSeries = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [examData, setExamData] = useState([]);
  const [examName, setExamName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartExams, setcartExams] = useState([]);

  


  const handleAddTest = ({test}) => { 

    if(window.innerWidth <= 768) {

      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });

    }

    // Check if the exam is already in the cartExams array//
  const isExamAlreadyAdded = cartExams.some((exam) => exam.id === test.id);

  // If the exam is already added, return early
  if (isExamAlreadyAdded) {
    console.log('This exam is already added to the cart.');
    return;
  }


     //console.log(test);
     const updateExams = [...cartExams, test];

     setcartExams(updateExams);

     console.log(cartExams);
  }

  //delete test

  const handleDeleteTest = (testId) => {

    
    if(window.innerWidth <= 768) {

      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });

    }
    // Filter out the test with the provided testId
    const updatedExams = cartExams.filter((exam) => exam.id !== testId);
    
    // Update the state with the filtered array
    setcartExams(updatedExams);
  
    console.log("Test with ID", testId, "deleted from the list.");
  };
 

  const handleTabChange = (test) => {

      
    
   // getTests();
   const clickedIndex = examName.findIndex((exam) => exam.test_series_name === test);
   const clickedTest = examData.filter((exam) => exam.test_series_name === test);
    
   // Set the active tab based on the clicked test series index
   setActiveTab(clickedIndex);
   //console.log(clickedIndex);
   setExamData(clickedTest);
   //console.log(clickedTest);
  }


  const getTests = async() => {

    

   //console.log(`${TOKENS.accessToken}`);
    try {
      
      const response = await axios.get(`${API_CONFIG.BASE_URL}/api/exams`, {        
          headers: {
            'Authorization': `Bearer ${TOKENS.accessToken}`,
            'Content-Type': 'application/json', // Assuming you're sending JSON data
          }
      });
      if (response.status === 200) {
        
        setExamData(response.data['exams']);
        setExamName(response.data['tests']);
        
        //console.log(examName);
        setTimeout(() => {
          setIsLoading(false); // Set loading to false after a delay (simulating data loading)
        }, 2000);
        
      }
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getTests();
  },[]);


  useEffect(() => {
    //console.log(cartExams);
  }, [cartExams]);


  return (
    <>
      <NavBar />

      <div className="container mx-auto px-4 lg:px-8 py-6 mt-5 mb-5">
     
        
        <PageHeading title="Our Latest Test Series" />
        <ExamSummary />

        {isLoading ? (
        <Loader />
      ) : (
        <div className=" container w-full">
          {/* Tab buttons */}
          <div className="flex mb-4">
           

          {examName.map((exam, index) => (
            <button key={exam.test_series_name}
            onClick={() => handleTabChange(exam.test_series_name)}
            className={`mr-2 py-2 px-4 border border-gray-300 rounded-tl-lg ${
              activeTab === index
                ? ' bg-green-400 text-gray-800 font-semibold shadow-md'
                : 'bg-gray-100 text-gray-600 shadow-sm'
            }`}
          >
            
            {exam.test_series_name}
          </button>
          ))}
        
        
      </div>  
      <div className="md:flex md:justify-between">
      
      <div className="md:w-2/3 w-full md:flex-col md:p-5" >
{examData.map(exam => (
         

         
         <div key={exam.id}>
           {/* Horizontal cards with content */}
           <div className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg">
             <div className="flex items-center justify-between mb-2">
               <h2 className="text-xl font-semibold mb-2">{exam.chapter_name}</h2>

               {/* Buttons on the extreme right */}
               <div className="flex flex-row items-end">
                
                 <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded m-1" onClick={() => handleAddTest({ test: exam })}>
                 Add Test
                 </button>
                 <button 
  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded m-1"  onClick={() => handleDeleteTest(exam.id)}>  Delete Test </button>
               </div>
             </div>test_series_name
             <div className="flex items-center justify-between font-light">
               <span className="mr-2">Price: ₹{exam.test_price}</span>
               <span className="mr-2">Subject:{exam.subjects}</span>
               <span className="mr-2">Test Code: {exam.test_code}</span>
               <span className="mr-2"> {exam.test_series_name}</span>
             </div>
           </div>

           {/* Add more similar cards for Menu 1 */}
         </div>
      

       ))
        
       
     }
   

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
