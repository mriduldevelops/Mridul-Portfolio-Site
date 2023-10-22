import Project from "./Project"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <div className="projects" id="projects">
        <h1>PROJECTS</h1>
        <hr />
        <Slider {...settings}>
        <Project/>
        <Project/>
        <Project/>
        </Slider>
    </div>
  )
}
