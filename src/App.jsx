import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from "./components/Header"
import Hero from "./components/Hero";
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
