import React from 'react'

const TeacherCard = (props) => {
  return (
    // <div className=" flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
    //   <div className=" w-3/5">
    //     <img src={props.img} alt="img" className="rounded-full" />
    //   </div>
    //   <div>
    //     <h3 className="font-semibold text-lg text-center my-5">
    //       {props.title}
    //     </h3>
    //     <p className="text-lightText text-center md:text-start">
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit this is the
    //       web
    //     </p>
    //   </div>
    // </div>

    <div className=" w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img
        className=" h-64 md:h-96 lg:h-40 w-full rounded-lg"
        src={props.img}
        alt="img"
      />
      <h2 className=" text-lg text-center font-semibold">{props.title}</h2>
      <p className=" text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        repellendus suscipit. Rerum consequatur magni expedita.
      </p>
    </div>
  )
}

export default TeacherCard