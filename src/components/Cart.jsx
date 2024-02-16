import React from 'react';

const Cart = ({cartExams}) => {
    return (
        
        <div className="flex justify-between w-full md:w-1/3">
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Cart</h2>
            <ul>
              {cartExams.map((exam, index) => (
                <li key={index}>{exam.chapter_name}</li>
                
              ))}
            </ul>
          </div>
        </div>
      );
}

export default Cart
