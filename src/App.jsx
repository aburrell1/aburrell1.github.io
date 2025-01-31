import './App.css'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Title from './components/Title'
import About from './components/About'
import styled from 'styled-components'
import Projects from './components/Projects'
import { Element } from 'react-scroll';
import ContactSection from './components/ContactSection'

const StickyNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`

function App() {

  return (
    <>
      <Title />
      <StickyNavbar>
        
        <NavBar />
      </StickyNavbar>
      <Element name="home-section">
        <Slider/>
      </Element>
      <Element name="about-section">
        <About/>
      </Element>
      <Element name="projects-section">
        <Projects/>
      </Element>
      <Element name="contacts-section">
        <ContactSection/>
      </Element>
    </>
  )
}

export default App;
