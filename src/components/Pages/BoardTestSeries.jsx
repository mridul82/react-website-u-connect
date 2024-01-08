import React, { useState } from "react";
import PageHeading from "../../Layout/PageHeading";
import Footer from "../Footer";
import NavBar from "../NavBar";

const BoardTestSeries = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 lg:px-8 py-6 mt-5 mb-5">
        <PageHeading title="Board Test Series" />
        <div className="container mx-auto">
          {/* Tab buttons */}
          <div className="flex mb-4">
        <button
          onClick={() => handleTabChange(1)}
          className={`mr-2 py-2 px-4 border border-gray-300 rounded-tl-lg ${
            activeTab === 1
              ? 'bg-gray-200 text-gray-800 font-semibold shadow-md'
              : 'bg-gray-100 text-gray-600 shadow-sm'
          }`}
        >
          Menu 1
        </button>
        <button
          onClick={() => handleTabChange(2)}
          className={`py-2 px-4 border border-gray-300 rounded-tr-lg ${
            activeTab === 2
              ? 'bg-gray-200 text-gray-800 font-semibold shadow-md'
              : 'bg-gray-100 text-gray-600 shadow-sm'
          }`}
        >
          Menu 2
        </button>
      </div>

          {/* Tab content */}
          <div className="flex justify-between w-3/4">
            <div className=" w-full">
              {/* Horizontal cards with content */}
              <div className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold mb-2">Title 1</h2>

                  {/* Buttons on the extreme right */}
                  <div className="flex flex-col items-end">
                    <button className="mb-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                      Button 1
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                      Button 2
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Icon 1</span>
                  <span className="mr-2">Icon 2</span>
                  <span>Icon 3</span>
                </div>
              </div>

              {/* Add more similar cards for Menu 1 */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BoardTestSeries;
