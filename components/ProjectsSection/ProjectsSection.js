import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../../services/projectServices";

export default function ProjectsSection() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dotsClass: styles.button__bar,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerDiv}>
        <p className={styles.myClient}>MY CLIENT</p>
        <h1 className={styles.projects}>Projects</h1>
      </div>
      <Slider {...settings}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Slider>
    </div>
  );
}
