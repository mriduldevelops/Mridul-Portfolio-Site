import profile from '../assets/profile.jfif';
export default function Header() {

  return (
    <div>
        <nav>
            <div className="name">
                <img src={profile} alt="profile" className='profile'/>
                <span>MRIDUL</span>
            </div> 
            <div className="menu">
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div> 
        </nav>
    </div>
  )
}
