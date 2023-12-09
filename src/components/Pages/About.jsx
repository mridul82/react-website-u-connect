import React from 'react'
import Footer from '../Footer'
import Navbar from '../NavBar'

const About = () => {
  return (
    <div>
      <Navbar />
      <div name="support" className="w-full">
    <div className="w-full h-[700px] bg-gray-900/90 absolute">
      
    </div>
    <div className="max-w-[1240px] mx-auto text-white relative">
      <div className="px-4 py-12">
        <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
        <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
        <p className="py-4 text-3xl text-slate-300">
          {' '}
          Trusted for over 25 years, we are a leader in Managed IT Services.
          Our track record has been built upon being a bit different: from the
          human touch and flexibility in approach, to our agility and
          outstanding quality of service.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8" data-aos="fade-up">
            
            <h3 className="font-bold text-2xl my-6">Sales</h3>
            <p className="text-gray-600 text-xl">
              A sale is a transaction between two or more parties in which
              the buyer receives tangible or intangible goods, services, or
              assets in exchange for money. In some cases, other assets are
              paid to a seller
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
            
            <h3 className="font-bold text-2xl my-6">Techincal Support</h3>
            <p className="text-gray-600 text-xl">
              With the increasing use of technology in modern times, there is
              a growing requirement to provide technical support.
              Many organizations locate their technical
              support departments.
              {' '}
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
            
            <h3 className="font-bold text-2xl my-6">Media Inquiries    </h3>
            <p className="text-gray-600 text-xl">
              Press inquiries also occur when devlopers wish to
              use a new release or feature article sent to them,
              and require further information on a
              company or its products.
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
