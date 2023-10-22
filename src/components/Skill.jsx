
export default function Skill(props) {
  return (
    <div className="skill">
        <div className="left">
            <img src={props.img} alt="" />
        </div>
        <div className="right">
            <h2>{props.text}</h2>
        </div>
    </div>
  )
}
