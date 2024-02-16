import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const LandingModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

     // Open the modal immediately when the component mounts
     useEffect(() => {
        // Open the modal after 1 second
        const timer = setTimeout(() => {
          setModalIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer); // Clear the timer on component unmount

    }, []);

  const customStyles = {
    content: {
      maxWidth: '70%',
      maxHeight: '80vh', // Adjust the maximum height as needed
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column', // Arrange children in a column
      alignItems: 'center', // Center items horizontally
      background: '#eab676', // Use a vibrant color (e.g., vibrant blue)
    border: '1px solid #2c3e50', // Adjust border color if needed
    borderRadius: '8px',
    padding: '20px',
    opacity: modalIsOpen ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
     
    },
  };

      
  return (
    <div>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(false)}
      contentLabel="Rank Booster Test Modal"
      style={customStyles}
    >
      <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded" onClick={() => closeModal(false)}>X</button>
      <header>
        <h1 className="text-4xl font-bold mb-4 text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">🚀 Welcome to Our Target Board Test 🚀</h1>
      </header>
  
      <main className="flex flex-col md:flex-row">
        <img src="img/Leonardo_Diffusion_XL_Create_an_engaging_illustration_of_a_gro_0.jpg" height={100} width={500} alt="Rank Booster Test Image" className="max-w-full h-auto mb-4 md:mb-0 md:w-1/2" />
        <div className="ml-4 md:w-1/2">
          <h4 className="text-4xl font-bold mb-4 text-purple-700">🚀 Elevate Your Knowledge with our Target Board Test Series (Science Phase I) Starting 5 Feb 2024🚀</h4>
          <p className="text-lg text-blue-900 mb-4">Don't miss the chance to boost your rank! Limited seats available. Secure your spot now!</p>
          <Link to="https://bit.ly/TargetBoardsScP1" target="_blank" className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-md text-lg hover:opacity-80 transition-opacity duration-300">Join Now</Link>
          <p className="mt-6 text-red-600 font-bold text-lg">Hurry, limited seats available!</p>
          <p className="text-gray-600 text-lg">For more information, contact us at <a href="mailto:urja.connect@fintutor.tech" className="text-blue-600">urja.connect@fintutor.tech</a></p>
        </div>
      </main>
    </Modal>
  </div>
  )
}

export default LandingModal