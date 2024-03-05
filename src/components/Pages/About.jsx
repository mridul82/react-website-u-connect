import React from 'react'
import Footer from '../Footer'
import Navbar from '../NavBar'

const About = () => {
  return (
    <div>
      <Navbar />
     
      <div name="support" className="w-full">
    <div className="w-full h-[750px] bg-[#539165] absolute">
      
    </div>
    <div className="max-w-[1240px] mx-auto text-white relative">
      <div className="px-4 py-5">
        <h2 className="text-lg md:text-3xl pt-8 text-slate-300 uppercase text-center">Welcome to</h2>
        <h3 className="text-2xl md:text-5xl font-bold py-6 text-center">Urja Connect</h3>
        <p className="py-4 text-sm md:text-xl text-slate-300">
          {' '}
          Empowering Education, Connecting Minds
          <br>
          </br>
          At Urja Connect, we believe that education knows no boundaries. We are passionate about fostering a learning ecosystem that empowers students, 
          connects them with proficient tutors, and facilitates assessments for academic growth.
        </p>
        <h2 className="text-lg md:text-3xl pt-8 text-white uppercase text-center">Who We Are</h2>
       
       <p className="py-4 text-sm md:text-xl text-slate-300">
       We are a dynamic platform dedicated to revolutionizing the educational experience. 
       Whether you're a student seeking academic support or a tutor looking to share your knowledge, Urja Connect is your go-to destination.
        Our aim is to bridge the gap between learning and teaching, creating a supportive environment for educational enrichment.
       </p>
       <h2 className="text-lg md:text-3xl pt-8 text-white uppercase text-center">What We Offer</h2>
      </div>

      
    
      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-2 sm:pt-20 text-black mb-10">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8" data-aos="fade-up">
            
            <h3 className="font-bold text-2xl my-6">Conducting Tests: </h3>
            <p className="text-gray-600 text-xl">
            Our cutting-edge test conduction system provides a seamless experience for evaluating knowledge and skills. 
            Students can take tests in various subjects and levels, 
            tracking their progress and identifying areas for improvement.
            </p>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                ContactUs
                
              </p>

            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8" data-aos="fade-up">
            
            <h3 className="font-bold text-2xl my-6">Finding Tutors:</h3>
            <p className="text-gray-600 text-xl">
            We connect students with proficient tutors who specialize in a wide array of subjects. 
            Our platform enables students to find the perfect mentor to guide them through their academic journey.
            </p>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                ContactUs
                
              </p>

            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8" data-aos="fade-up">
            
            <h3 className="font-bold text-2xl my-6">Connecting Students:   </h3>
            <p className="text-gray-600 text-xl">
            Urja Connect serves as a hub where students can interact, collaborate, and learn from each other. 
            We facilitate connections between learners, fostering a community-driven approach to education.
            </p>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                ContactUs
                
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Footer />
    </div>
  )
}

export default About
