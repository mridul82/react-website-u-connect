import React from 'react'

const PageHeading = (props) => {
  return (
    <div className="text-3xl font-bold text-left mt-8 mb-6">
      {/* Change the text within the h1 tag to your desired heading */}
      <h1 className="text-gray-800">{props.title}</h1>
    </div>
  )
}

export default PageHeading