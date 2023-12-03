import React from "react";

export default function Project(props) {
  return (
    <div className="project">
      <div className="left">
        <img src={props.img} alt="" />
      </div>
      <div className="right">
        <h2>{props.projectName}</h2>
        <p>
          <ul>
            {props.desc.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </p>
        <a href={props.github} target="_blank">
          <button>VIEW CODE</button>
        </a>
        {props.site && (
          <a href={props.site} target="_blank">
            <button>VISIT SITE</button>
          </a>
        )}
      </div>
    </div>
  );
}
