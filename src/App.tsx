import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Partners from './components/sections/Partners';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/pages/Services';
//Section Services
import ServicesSec from './components/sections/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Experience />
              <Projects />
              <ServicesSec/>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;