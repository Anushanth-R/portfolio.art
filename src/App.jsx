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
      <div className="bg-black min-h-screen">
        {isCorrectWidth ? (
          <>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
          </>
        ) : (
          <p>Hello</p>
        )
        }
      </div>
    );
};

export default App;
