import React from 'react'
import Footer from '../Footer'
import Navbar from '../NavBar'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#539165] via-green-600 to-blue-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-pink-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h2 className="text-lg md:text-2xl pt-8 text-green-100 uppercase tracking-wider">Welcome to</h2>
            <h1 className="text-4xl md:text-6xl font-bold py-6 text-white">Urja Connect</h1>
            <p className="text-xl md:text-2xl text-green-100 font-light max-w-3xl mx-auto leading-relaxed">
              Empowering Education, Connecting Minds
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  At Urja Connect, we believe that education knows no boundaries. We are passionate about fostering a learning ecosystem that empowers students,
                  connects them with proficient tutors, and facilitates assessments for academic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#539165] to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a dynamic platform dedicated to revolutionizing the educational experience.
              Whether you're a student seeking academic support or a tutor looking to share your knowledge,
              Urja Connect is your go-to destination for bridging the gap between learning and teaching.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">1000+</h3>
              <p className="text-gray-600">Verified Tutors</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H16c-.8 0-1.53.5-1.83 1.25l-2.92 7.32A2 2 0 0 0 13 18h3v4h4zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9.5l-2.54-7.63A1.5 1.5 0 0 0 5.5 6H3c-.8 0-1.53.5-1.83 1.25L.25 9.5A2 2 0 0 0 2 12h1.5v10H7.5z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5000+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10000+</h3>
              <p className="text-gray-600">Tests Conducted</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v17C3 21.33 3.67 22 4.5 22h15c.83 0 1.5-.67 1.5-1.5v-17C21 2.67 20.33 2 19.5 2zm0 18h-15V7h15v11z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#539165] to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of educational services designed to enhance your learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Conducting Tests */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Conducting Tests</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Our cutting-edge test conduction system provides a seamless experience for evaluating knowledge and skills.
                    Students can take tests in various subjects and levels, tracking their progress and identifying areas for improvement.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Finding Tutors */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M21,9V7H15L13.5,7.5C13.1,7.4 12.6,7.5 12.1,7.8L10.5,9L16,12L18,10.5V9M1,18V20H3L10,13L8,11M23,19H17V21H23V19Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Finding Tutors</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    We connect students with proficient tutors who specialize in a wide array of subjects.
                    Our platform enables students to find the perfect mentor to guide them through their academic journey.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Students */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16,4C16,2.89 15.11,2 14,2C12.89,2 12,2.89 12,4C12,5.11 12.89,6 14,6C15.11,6 16,5.11 16,4M19,18V20H5V18L7,16V11A5,5 0 0,1 12,6A5,5 0 0,1 17,11V16M12,23A2,2 0 0,1 10,21H14A2,2 0 0,1 12,23Z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Connecting Students</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Urja Connect serves as a hub where students can interact, collaborate, and learn from each other.
                    We facilitate connections between learners, fostering a community-driven approach to education.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-gradient-to-br from-[#539165] to-green-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2L13.09,8.26L22,9L17,14L18.18,22L12,19L5.82,22L7,14L2,9L10.91,8.26L12,2Z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize quality education by connecting learners with expert tutors,
                providing comprehensive assessment tools, and creating a supportive community
                where knowledge flows freely and growth is continuous.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the leading global platform that transforms education through
                technology, making personalized learning accessible to everyone, everywhere,
                and empowering individuals to achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-br from-[#539165] to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join thousands of students and tutors who are already part of the Urja Connect community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About