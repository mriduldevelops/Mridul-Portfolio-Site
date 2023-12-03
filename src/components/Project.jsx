import React from "react";
// import codingShuttle from '../assets/coding-shuttle.png'
// import noteKeeper from "../assets/note-Keeper.png";

// const projectList = [
//   {
//     projectName: "NOTE KEEPER",
//     img: noteKeeper,
//     githubLink: "https://github.com/mriduldevelops/Note-Keeper",
//     siteLink: "https://mriduldevelops.github.io/Note-Keeper/",
//     projectInfo: {
//       l1: "A note creating app which is responsive to mobile and desktop",
//       l2: "You can ADD and Delete notes",
//       l3: "ReactJs, CSS, Javascript",
//     },
//   },
//   {
//     projectName: "NOTE KEEPER",
//     img: noteKeeper,
//     githubLink: "https://github.com/mriduldevelops/Note-Keeper",
//     siteLink: "https://mriduldevelops.github.io/Note-Keeper/",
//     projectInfo: {
//       l1: "A note creating app which is responsive to mobile and desktop",
//       l2: "You can ADD and Delete notes",
//       l3: "ReactJs, CSS, Javascript",
//     },
//   },
// ];

export default function Project(props) {
  return (
    <>
    {/* {projectList.map((Project, i)=>{

    })} */}
    <div className="project">
      <div className="left">
        <img src={props.img} alt="" />
      </div>
      <div className="right">
        <h2>{props.projectName}</h2>
        <p>
          <ul>{props.desc.map((item, i)=>{
            return(<li key={i}>{item}</li> )
          })}
          </ul>
        </p>
        <a href={props.github} target="_blank">
          <button>VIEW CODE</button>
        </a>
        {props.site && <a href={props.site} target="_blank">
          <button>VISIT SITE</button>
        </a>}
        
      </div>
    </div>
    </>
  );
}
