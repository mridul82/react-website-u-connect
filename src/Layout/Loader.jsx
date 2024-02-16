import React from 'react'

const Loader = () => {
  return (
    <div className=" w-3/4 shadow-xl">
     <div className=" w-full border border-gray-200 p-4 col-span-3">
        <div className="animate-pulse space-y-8">
            <div className="flex space-x-4">
            <div className="bg-gray-200 h-24 w-24 rounded-full"></div>
                <div className="space-y-2 flex-1 pt-4">
                 <div className="h-6 bg-gray-200 w-1/2"></div>
                 <div className="h-6 bg-gray-200 w-1/3"></div>
                </div>
            </div>
            <div className="flex-1 space-y-2">
                <div className="h-6 bg-gray-200 full"></div>
                <div className="h-6 bg-gray-200 w-3/3"></div>
            </div>
        </div>
    </div>
    
  <div className=" w-full border border-gray-200 p-4 col-span-3">
        <div className="animate-pulse space-y-8">
            <div className="flex space-x-4">
            <div className="bg-gray-200 h-24 w-24 rounded-full"></div>
                <div className="space-y-2 flex-1 pt-4">
                 <div className="h-6 bg-gray-200 w-1/2"></div>
                 <div className="h-6 bg-gray-200 w-1/3"></div>
                </div>
            </div>
            <div className="flex-1 space-y-2">
                <div className="h-6 bg-gray-200 full"></div>
                <div className="h-6 bg-gray-200 w-3/3"></div>
            </div>
        </div>
    </div>


    </div>
    


    
  )
}

export default Loader