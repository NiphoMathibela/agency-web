import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/pages/Services';
//Section Services
import ServicesSec from './components/sections/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import './styles/animations.css';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;