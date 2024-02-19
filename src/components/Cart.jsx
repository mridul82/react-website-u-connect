import axios from 'axios';
import React from 'react';
import TOKENS from '../Config/localStorage';

const Cart = ({cartExams}) => {
  const handleConfirmTest = () => {
    const user = TOKENS.user;
    //console.log(user);
    console.log({cartExams, totalPrice, user});
    const postData = {
      cartExams,
      totalPrice,
      user,
    };

    axios.post('/api/add-exam', postData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        // Handle error if needed
      });
  }
  // Calculate total price
  const totalPrice = cartExams.reduce((acc, exam) => acc + Number(exam.test_price), 0);
    return (
       
      <div className=" md:w-1/4 w-full md:flex-col ">
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Cart</h2>
            <table>
              {cartExams.map((exam, index) => (
               
                <tr key={index}>
                  <td >{exam.chapter_name}</td>
                  <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  <td>₹{exam.test_price}</td>
                </tr>
                
                
              ))}
             
              <tr>
               <td></td>
            <td colSpan="3" className="font-semibold">
              Total Price: ₹{totalPrice}
            </td>
          </tr>
             
            </table>
            <button 
  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"  onClick={() => handleConfirmTest({cartExams, totalPrice})}>  Confirm Tests</button>
          </div>
          
        </div>
 
  
      );
}

export default Cart
