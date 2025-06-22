import { useState } from "react";

function Navbar() {
  const [rotateHam, setRotateHam] = useState(false);

  const hamClicked = () => setRotateHam((ham) => !ham);

  return (
    <header id="navbar" className="bg-[var(--bg2-color)] flex justify-between items-center w-full h-[40px] p-[20px] border-b border-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)] sticky top-0">
      <h1 className="text-xl font-bold tracking-widest text-transparent bg-[url('./assets/text_background.jpg')] bg-contain bg-clip-text transition-all duration-200 ease-[ease] hover:scale-[1.01] hover:text-glow">
        <a href="#">
          Anushanth <span>R</span>
        </a>
      </h1>

      {/* Nav Links */}
      <nav>
        <ul id="nav-links" className="hidden md:flex gap-7 text-base lg:text-lg text-[var(--primary-color)] font-medium">
          <li className="m-[2px] flex items-center justify-center">
            <a href="#home" className="px-[15px] py-[1px] rounded-[10px] transition-all duration-300 hover:rounded-[5px_12px] hover:shadow-[0_0_10px_var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black">
              Home
            </a>
          </li>
          <li className="m-[2px] flex items-center justify-center">
            <a href="#about" className="px-[15px] py-[1px] rounded-[10px] transition-all duration-300 hover:rounded-[5px_12px] hover:shadow-[0_0_10px_var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black">
              About
            </a>
          </li>
          <li className="m-[2px] flex items-center justify-center">
            <a href="#projects" className="px-[15px] py-[1px] rounded-[10px] transition-all duration-300 hover:rounded-[5px_12px] hover:shadow-[0_0_10px_var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black">
              Portfolio
            </a>
          </li>
          <li className="m-[2px] flex items-center justify-center">
            <a href="#contact" className="px-[15px] py-[1px] rounded-[10px] transition-all duration-300 hover:rounded-[5px_12px] hover:shadow-[0_0_10px_var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger SS */}
      <div id="hamburger" onClick={hamClicked} className={`md:hidden text-[1.4rem] cursor-pointer text-[var(--secondary-color)] transition-all duration-300 ${rotateHam && "rotate-90 text-shadow-[0_0_10px_var(--primary-color)]"}`}>
        &#9776;
      </div>
    </header>
  );
}

export default Navbar;
