import { Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import SkillsSlider from './Components/SkillsSlider/SkillsSlider';
// import Services from './Components/Services/Services'
import ProjectDetails from './Components/Projects/ProjectDetails';
function App() {
  return (
    <div className="App">
        <Header />
        
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <AboutUs />
              <SkillsSlider />
              <Projects />
              {/* <Services /> */}
              <Footer />
            </>
          } />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
    </div>
  );
}
export default App;