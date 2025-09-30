import React from 'react'
import Footer from '../Footer'
import Navbar from '../NavBar'

const Service = () => {
  const accessToken = localStorage.getItem("accessToken");

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        </svg>
      ),
      title: "Test Creation & Conduction",
      description: "We offer specialized Rank Booster and Target Board Tests meticulously designed to elevate your academic performance. Our advanced testing system provides real-time feedback and comprehensive analytics.",
      features: [
        "Custom test creation tools",
        "Real-time assessment monitoring",
        "Detailed performance analytics",
        "Multiple question formats",
        "Automated grading system"
      ],
      gradient: "from-blue-500 to-blue-600",
      link: accessToken ? "/test-series" : "/login"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M21,9V7H15L13.5,7.5C13.1,7.4 12.6,7.5 12.1,7.8L10.5,9L16,12L18,10.5V9M1,18V20H3L10,13L8,11M23,19H17V21H23V19Z"/>
        </svg>
      ),
      title: "Find Expert Tutors",
      description: "Our platform provides a seamless experience to discover skilled and dedicated tutors tailored to your requirements. Connect with verified professionals who specialize in your subject areas.",
      features: [
        "Verified tutor profiles",
        "Subject-wise specialization",
        "Flexible scheduling options",
        "Quality rating system",
        "Secure communication platform"
      ],
      gradient: "from-green-500 to-green-600",
      link: accessToken ? "/find-tutor" : "/login"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M13,13H16V16H13V13M13,9H16V12H13V9M8,13H11V16H8V13M8,9H11V12H8V9Z"/>
        </svg>
      ),
      title: "Study Materials & Resources",
      description: "Access a treasure trove of educational resources and study materials curated to facilitate effective learning. From interactive content to comprehensive guides.",
      features: [
        "Curated study materials",
        "Interactive learning content",
        "Subject-wise resource library",
        "Video tutorials",
        "Practice worksheets"
      ],
      gradient: "from-purple-500 to-purple-600",
      link: accessToken ? "/service" : "/login"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16,4C16,2.89 15.11,2 14,2C12.89,2 12,2.89 12,4C12,5.11 12.89,6 14,6C15.11,6 16,5.11 16,4M19,18V20H5V18L7,16V11A5,5 0 0,1 12,6A5,5 0 0,1 17,11V16M12,23A2,2 0 0,1 10,21H14A2,2 0 0,1 12,23Z"/>
        </svg>
      ),
      title: "Student-Tutor Network",
      description: "Our platform connects tutors and mentors with enthusiastic students eager to learn. Build meaningful educational relationships in our supportive community.",
      features: [
        "Community forums",
        "Peer-to-peer learning",
        "Study groups",
        "Mentorship programs",
        "Academic support network"
      ],
      gradient: "from-orange-500 to-red-500",
      link: accessToken ? "/service" : "/login"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#539165] via-green-600 to-blue-600 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-pink-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-green-100">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive educational solutions designed to empower your learning journey
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl">
                <p className="text-lg text-white">
                  From expert tutoring to advanced testing systems, we provide everything you need to achieve academic excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#539165] to-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of educational services designed to support students and tutors alike
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-br ${service.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="text-center">
                    <a
                      href={service.link}
                      className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl`}
                    >
                      <span>{accessToken ? 'Explore Service' : 'Login to Access'}</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose Urja Connect?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#539165] to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                All our tutors are verified professionals with proven track records. We maintain strict quality standards to ensure the best learning experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">24/7 Support</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our dedicated support team is available round the clock to assist you with any queries or technical issues you might encounter.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovative Technology</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We leverage cutting-edge technology to provide seamless learning experiences, from AI-powered matching to advanced assessment tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#539165] to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join our growing community of learners and educators. Start your journey with Urja Connect today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={accessToken ? "/find-tutor" : "/login"}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {accessToken ? 'Find a Tutor' : 'Get Started'}
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

export default Service