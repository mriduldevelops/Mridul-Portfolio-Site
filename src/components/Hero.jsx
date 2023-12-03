export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-text">
        <h1>
          Hello, I'm <span>Mridul</span>
        </h1>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>
      <div className="hero__buttons">
        <a
          href="https://drive.google.com/file/d/1e93qD5oEGBEJDLwnX2_FLUa7ttbt_Fm9/view?usp=drive_link"
          target="_blank"
        >
          <button>RESUME</button>
        </a>
        <a href="#projects">
          <button>PROJECTS</button>
        </a>
      </div>
    </div>
  );
}
