import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import SkillsSlider from './Components/SkillsSlider/SkillsSlider';

function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <AboutUs />
        <SkillsSlider />
        <Projects />
        <Footer />
    </div>
  );
}
export default App;