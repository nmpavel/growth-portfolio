import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getClients } from "../../services/testimonialServices";
import TestimonialCard from "./TestimonialCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        margin: "-180px -20px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        width: "50px",
        border: "1px solid #91765A",
        borderRadius: "0 5px 5px 0",
        background: "#23263D",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        margin: "-180px 0px 0 -20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        width: "50px",
        border: "1px solid #91765A",
        borderRadius: "5px 0px 0px 5px",
        background: "#23263D",
      }}
      onClick={onClick}
    ></div>
  );
}

export default function TestimonialsSection() {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients()
    .then(data => setClients(data));
  }, []);

  return (
    <div className="px-8 py-24 bg-blue-400 lg:px-16 xl:px-48 ">
      <div className="text-white space-y-4 pb-10 ">
        <p className="text-myColor-100 text-xs font-semibold ">TESTIMONIALS</p>
        <h1 className=" text-4xl font-bold ">Happy Clients Says</h1>
      </div>
      <div className="px-4 pt-4">
        <Slider {...settings}>
          {
            clients.map((client)=>{
              return(
                <TestimonialCard key={client.id} client={client} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}
