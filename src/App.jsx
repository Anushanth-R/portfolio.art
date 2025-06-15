import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App() {
    const reqWidth = 960;

    const [isCorrectWidth, setIsCorrectWidth] = useState(true);

    const checkWidth = () => {
      const width = window.innerWidth;
      setIsCorrectWidth(width >= reqWidth);
    };

    useEffect(() => {
      checkWidth();
      window.addEventListener('resize', checkWidth);
      return () => window.removeEventListener('resize', checkWidth);
    }, []);

    return (
      <div className="min-h-screen bg-black">
        {isCorrectWidth ? (
          <>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
          </>
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-center text-red-500">Not yet responsive for smaller screens. <br /> Please use desktop version in mobile.</p>
          </div>
        )
        }
      </div>
    );
};

export default App;
