import aboutImg from "../assets/about-image.avif";
// import aboutImg from '../assets/about-img.avif'
export default function About() {
  return (
    <div className="about" id="about">
      <h1>ABOUT ME</h1>
      <hr />
      <div>
        <div className="left">
          <p>
            "Hi there! I'm Mridul, a budding frontend developer enthusiastic
            about crafting engaging web experiences. My journey in the world of
            coding started with sheer curiosity and a passion for creating
            intuitive web interfaces that people love to interact with.
          </p>
          <br />
          <p>
            Currently delving into React.js and Next.js, I'm eager to harness
            these tools to build responsive, dynamic, and user-centric websites.
            Although I'm at the beginning of my coding journey, I embrace each
            challenge as an opportunity to grow and learn.
          </p>
          <br />

          <p>
            Beyond the screen, my passion lies in sketching and creating
            portraits. This hobby not only allows me to express my creativity
            but also influences my eye for detail and aesthetics in frontend
            development.
          </p>
          <br />

          <p>
            I'm constantly sharpening my skills through online courses,
            tutorials, and hands-on projects. Every challenge is an opportunity
            for growth, and I'm excited about the journey ahead.
          </p>
          <br />

          <p>
            Feel free to explore my evolving portfolio to witness my journey.
            I'm eager to connect with fellow developers, learn from experienced
            minds, and contribute to meaningful projects. Let's learn and grow
            together in this ever-evolving digital landscape!"
          </p>
          <br />
          <a href="#contact">
            <button>CONTACT</button>
          </a>
        </div>
        <div className="right">
          <img src={aboutImg} alt="about-img" />
        </div>
      </div>
    </div>
  );
}
