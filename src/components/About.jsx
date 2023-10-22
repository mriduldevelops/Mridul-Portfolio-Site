import aboutImg from '../assets/about-image.avif'
// import aboutImg from '../assets/about-img.avif'
export default function About() {
  return (
    <div className="about" id="about">
        <h1>ABOUT ME</h1>
        <hr />
        <div>
          <div className="left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat praesentium, amet natus facere sunt debitis sapiente vitae totam unde quasi culpa autem officiis porro corporis? Esse aliquam cumque delectus illum architecto maxime eius nisi reprehenderit officiis doloribus soluta asperiores, repellendus quia possimus exercitationem quasi? Neque dolore veritatis placeat eos voluptate facere repellendus sit. Repudiandae, distinctio voluptatibus sapiente maiores a earum. Suscipit sed aut illo neque aperiam cum, magnam repellendus dignissimos consequatur quisquam. Voluptate ullam fugit doloremque similique illo excepturi cumque ab dolore ipsum est ad, perspiciatis molestiae repellat magni doloribus at distinctio voluptatem amet illum veritatis reprehenderit explicabo facere.</p>
          <a href="#contact">
          <button>CONTACT</button>
          </a>
          </div>
          <div className="right">
            <img src={aboutImg} alt="about-img"/>
          </div>
        </div>
    </div>
  )
}
