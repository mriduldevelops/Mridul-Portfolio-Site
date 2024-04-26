import Project from "./Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noteKeeper from "../assets/note-keeper.png";
import mcAfee from "../assets/mcAfee.png";
import sankeGame from "../assets/game.png";
import codingShuttle from "../assets/coding-shuttle.png";
import joblele from "../assets/joblele.png";
import urbanTrendz from "../assets/urban-trendz.png";
const projectList = [
  {
    projectName: "JOBLELE",
    img: joblele,
    githubLink: "https://github.com/mriduldevelops/JOBLELE",
    siteLink: "https://mriduldevelops.github.io/JOBLELE/",
    projectInfo: [
      "A job portal site which allows you to post jobs and apply for these available jobs.",
      "Relatime Updates and Customized Job listings",
      "Reactjs, Tailwind CSS, Javascript, Firebase and Firestore",
    ],
  },
  {
    projectName: "UrbanTrendz",
    img: urbanTrendz,
    githubLink: "https://github.com/mriduldevelops/Urban-Trendz",
    siteLink: "https://urban-trendz.vercel.app/",
    projectInfo: [
      "An E-Shop, you can add items to cart and make secure payments",
      "Next.js, Sanity, Stripe, Shadcn, Tailwind CSS",
    ],
  },
  {
    projectName: "NOTE KEEPER",
    img: noteKeeper,
    githubLink: "https://github.com/mriduldevelops/Note-Keeper",
    siteLink: "https://mriduldevelops.github.io/Note-Keeper/",
    projectInfo: [
      "A note creating app which is responsive to mobile and desktop",
      "You can ADD and Delete notes",
      "Reactjs, CSS, Javascript",
    ],
  },
  {
    projectName: "SNAKE GAME",
    img: sankeGame,
    githubLink: "https://github.com/mriduldevelops/Snake-Game",
    siteLink: "https://mriduldevelops.github.io/Snake-Game/",
    projectInfo: [
      "Play the mobile Snake game. The player must keep the snake from colliding with both other obstacles and itself.",
      "HTML, CSS, Javascript",
    ],
  },
  {
    projectName: "McAfee - Clone",
    img: mcAfee,
    githubLink: "https://github.com/mriduldevelops/McAfee-Clone",
    siteLink: "https://mriduldevelops.github.io/McAfee-Clone/",
    projectInfo: [
      "An antivirus product website UI, mobile and desktop friendly",
      "HTML, CSS, Javascript",
    ],
  },
  {
    projectName: "CODING SHUTTLE - Clone",
    img: codingShuttle,
    githubLink: "https://github.com/mriduldevelops/Coding-Shuttle-Clone",
    siteLink: null,
    projectInfo: [
      "An Online Education website which provides Programming Courses.",
      "Reactjs, CSS, Javascript",
    ],
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <hr />
      <Slider {...settings}>
        {projectList.map((project) => {
          return (
            <Project
              projectName={project.projectName}
              img={project.img}
              github={project.githubLink}
              site={project.siteLink}
              desc={project.projectInfo}
            />
          );
        })}
      </Slider>
    </div>
  );
}
