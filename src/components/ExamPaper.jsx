import React from 'react';

const ExamPaper = ({pdfUrl}) => {
    
console.log(pdfUrl);
  return (
    <div className="w-full h-screen">
      <iframe
        src={pdfUrl}
        className="w-full h-full md:w-4/5 md:h-4/5 md:mx-auto"
        title="PDF Viewer"
      />
    </div>


  )
}

export default ExamPaper
