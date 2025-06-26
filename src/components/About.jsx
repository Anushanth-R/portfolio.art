import { useState } from 'react';
import power_bi from '../assets/Power-BI.svg'
import resume from '../assets/resume.pdf'

function About() {
    const [activeTab, setActiveTab] = useState("experience");
    
    return(
        <section className="min-h-[calc(100dvh-40px)] px-3 py-3 md:py-6 flex flex-col items-center justify-center scroll-mt-[40px]" id="about">
            
            {/* About Info */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-3xl font-bold my-[5px]">
                    Let me introduce <span className="text-[var(--primary-color)]">myself...</span>
                </h2>
                <p className="text-base md:text-lg text-justify my-[6px] mx-[10px] md:my-[10px] md:mx-[30px]">
                    Hey there! I'm Anushanth, someone who enjoys building simple, interactive websites with HTML, CSS, and JavaScript. I like turning ideas into things you can see and click, and sometimes I mix in a bit of data to make it more interesting. When I'm not coding, I'm probably digging into cricket stats or off in my own world of ideas, just seeing where they take me.
                </p>
                <a href={resume} download className="text-black text-sm md:text-base font-bold bg-[var(--primary-color)] py-[10px] px-[20px] rounded-2xl transition ease-in-out duration-200 hover:bg-sky-500">
                    📄 Download Resume
                </a>
            </div>

            {/* Exp & Edu Tabs */}
            <div className="flex justify-center my-[20px] md:my-[30px] gap-[10px]">
                <button onClick={() => setActiveTab("experience")}
                className={`text-sm font-bold text-black py-[10px] px-[20px] rounded-xl ${activeTab === "experience" ? "bg-[var(--primary-color)]" : "bg-[#ddd]"}`}>🏢 Experience</button>
                <button onClick={() => setActiveTab("education")}
                className={`text-sm font-bold text-black py-[10px] px-[20px] rounded-xl ${activeTab === "education" ? "bg-[var(--primary-color)]" : "bg-[#ddd]"}`}>📚 Education</button>
            </div>

            <div className="tab-contents">
                {activeTab === "experience" &&(
                    <div id="experience" className="active flex flex-col justify-center">
                        <ul className="">
                            <li className="mb-[10px] py-[10px] px-[25px] border-l-3 border-[var(--primary-color)] rounded-lg"><strong>Research Analyst</strong> - Mentor Thesis (2024-Present)</li>
                        </ul>
                    </div>
                    )
                }

                {activeTab === "education" && (
                    <div id="education" className="flex flex-col justify-center">
                        <ul className="">
                            <li className="mb-[10px] py-[10px] px-[25px] border-l-3 border-[var(--primary-color)] rounded-lg"><strong>Bachelor's in Mechanical</strong> - Bethlahem Institute, Ulaganvila (2018-2022)</li>
                            <li className="mb-[10px] py-[10px] px-[25px] border-l-3 border-[var(--primary-color)] rounded-lg"><strong>Higer Secondary</strong> - Hindu Vidyalaya, Karungal (2017-2018)</li>
                        </ul>
                    </div>
                    )
                }
            </div>

            {/* My Skills */}
            <div className="skills">
                <h1 className="text-xl md:text-2xl text-center my-[10px] underline decoration-[var(--primary-color)]">Skills & Technologies</h1>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-[35px]">
                    <div className="p-[7px] bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-[35px] md:size-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html" title="HTML" />
                    </div>
                    <div className="p-[7px] bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-[35px] md:size-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="css" title="CSS" />
                    </div>
                    <div className="p-[7px] bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-[35px] md:size-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript" title="JavaScript" />
                    </div>
                    <div className="p-[7px] bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-[35px] md:size-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react" title="React" />
                    </div>
                    <div className="p-[7px] bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-[35px] md:size-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" alt="tailwindcss" title="TailwindCSS" />
                    </div>
                    <div className="p-[7px] bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-[35px] md:size-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="mysql" title="MySQL" />
                    </div>
                    <div className="p-[7px] bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-[35px] md:size-[50px]" src={power_bi} alt="power-bi" title="Power BI" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;