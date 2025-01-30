import './App.css'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Title from './components/Title'
import About from './components/About'
import Projects from './components/Projects'
import { Element } from 'react-scroll';

function App() {

  return (
    <>
      <Title />
      <NavBar />
      <Element name="home-section">
        <Slider/>
      </Element>
      <Element name="about-section">
        <About/>
      </Element>
      <Element name="projects-section">
        <Projects/>
      </Element>
    </>
  )
}

export default App;
