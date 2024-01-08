import React from 'react'
import Heading from '../Layout/Heading'
import TestCard from '../Layout/TestCard'

const Test = () => {
  return (
    <div className=" min-h-[50vh] flex flex-col items-center justify-center md:px-3 px-5 mb-4">
      <Heading title1="Latest" title2="Tests" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <TestCard img="icons/icons8-teacher-100.png" title="Target Boards Test Series" link="target-board-test-series" desc="Get board exam ready with Target Boards Test Series! Specially design for Class X and XII exams with precision preparation and expertly crafted practice tests."/>
        <TestCard img="icons/icons8-teacher-100.png" title="Rank Booster Test Series" link="rank-booster-test-series" desc="Accelerate your ranking with our Rank Booster Test! Elevate your performance and excel in exams with targeted practice and strategic preparation."/>
        <TestCard img="icons/icons8-teacher-100.png" title="Rank Booster Test Series" link="rank-booster-test-series" desc="Accelerate your ranking with our Rank Booster Test! Elevate your performance and excel in exams with targeted practice and strategic preparation."/>
        
    </div>
    </div>
  )
}

export default Test