import React from 'react'
import Heading from '../Layout/Heading'
import ServiceCard from '../Layout/ServiceCard'

const Services = () => {
  return (
    <div className=" min-h-[50vh] flex flex-col items-center justify-center md:px-3 px-5 mb-4">
      <Heading title1="Our" title2="Services" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ServiceCard img="icons/icons8-teacher-100.png" title="Rank Booster Test Creation" desc="we offer specialized Rank Booster Tests meticulously designed to elevate your academic performance." />
        <ServiceCard img="icons/icons8-exam-64.png" title="Find Tutors" desc="Our platform provides a seamless experience to discover skilled and dedicated tutors tailored to your requirements." />
        <ServiceCard img="icons/icons8-social-studies-100.png" title="Study Material" desc="Access a treasure trove of educational resources and study materials curated to facilitate effective learning." />
        <ServiceCard img="icons/icons8-exam-64.png" title="Find Students" desc="Our platform connects tutors and mentors with enthusiastic students eager to learn. " />
      </div>
    </div>
  )
}

export default Services