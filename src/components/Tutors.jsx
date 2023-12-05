import React, { useRef } from 'react';
import Slider from "react-slick";





function Tutors() {
    const data = [
        {
          img: "img/tutor1.jpg",
          name: "Serena Mitchell",
          specialties: "MSc Maths",
        },
        {
          img: "img/tutor3.jpg",
          name: "Julian Bennett",
          specialties: "MA English BEd",
        },
        {
          img: "img/tutor4.jpg",
          name: "Camila Rodriguez",
          specialties: "MA SSc",
        },
        {
          img: "img/tutor2.jpg",
          name: "Victor Nguyen",
          specialties: "MSc Physics",
        },
        {
          img: "img/tutor6.jpg",
          name: "Ethan Carter",
          specialties: "Msc Biology",
        },
        {
          img: "img/tutor5.jpg",
          name: "Olivia Martinez",
          specialties: "MCA",
        },
      ];

      const slider = useRef(null);

  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
  };

  return (
    
    <div className=''>
 <Slider   {...settings} className=''>
          {data.map((e, index) => (
            <div className="p-5 m-5 shadow-md gap-10 bg-white h-75"
             
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  
                />
              </div>

              <div >
                <h1>{e.name}</h1>
                <h3 >{e.specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
    </div>
   
       
     
  )
}

// export default Tutors