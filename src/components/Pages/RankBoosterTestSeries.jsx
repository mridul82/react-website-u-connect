import React from 'react'
import { Link } from 'react-router-dom'

const RankBoosterTestSeries = () => {


  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Coming Soon</h1>
      <p className="text-gray-700">Exciting things are in the works!!!</p>
      <button className="bg-green-700 text-white m-5 p-3"><Link to="/">Go to HomePage</Link></button>
    </div>
    
  </div>

  
  )
}

export default RankBoosterTestSeries