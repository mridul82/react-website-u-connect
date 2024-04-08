import React from 'react'
import ExamSummary from '../ExamSummary'
import Footer from '../Footer'
import NavBar from '../NavBar'

const PaidExams = () => {
    
    
  return (
    <>
    <NavBar />
    <div className='flex items-center justify-center'>
       
        <ExamSummary showTimer={true} payment={true} />
       
    
    </div>
  
    <Footer />
    </>
  )
}

export default PaidExams
