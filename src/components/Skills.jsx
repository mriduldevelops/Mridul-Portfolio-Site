import Skill from "./Skill";
import html from '../assets/html.svg'
import css from "../assets/css.svg"
import js from "../assets/js.svg"
import react from "../assets/react.svg"
import redux from "../assets/redux.svg"
import sass from "../assets/sass.svg"
import git from "../assets/github.svg"
import mongo from "../assets/mongodb.svg"
import vsc from "../assets/vs-code.svg"
import res from "../assets/res.png"
import next from "../assets/next.svg"
import tailwind from "../assets/tailwind.svg"


export default function Skills() {
  return (
    <div id="skills">
      <h1>SKILLS</h1>
      <hr />
      <div className="skill__container">
        <Skill img={html} text="HTML5"/>
        <Skill img={css} text="CSS3"/>
        <Skill img={js} text="JAVASCRIPT"/>
        <Skill img={react} text="REACT"/>
        <Skill img={next} text="NEXT"/>
        <Skill img={mongo} text="MONGODB"/>
        <Skill img={sass} text="SASS"/>
        <Skill img={vsc} text="VS CODE"/>
        <Skill img={git} text="GIT & GITHUB"/>
        <Skill img={tailwind} text="TAILWIND CSS"/>
        <Skill img={redux} text="REDUX TOOLKIT"/>
        <Skill img={res} text="RESPONSIVE DESIGN"/>
      </div>
    </div>
  )
}
