import React from 'react'
import Heading from '../Layout/Heading'
import ServiceCard from '../Layout/ServiceCard'

const Services = () => {
  return (
    <div className=" min-h-[50vh] flex flex-col items-center justify-center md:px-3 px-5 mb-4">
      <Heading title1="Our" title2="Services" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ServiceCard img="icons/icons8-teacher-100.png" title="Find Tutor" />
        <ServiceCard img="icons/icons8-exam-64.png" title="Mock Test" />
        <ServiceCard img="icons/icons8-social-studies-100.png" title="Study Material" />
        <ServiceCard img="icons/icons8-exam-64.png" title="Mock Test" />
      </div>
    </div>
  )
}

export default Services