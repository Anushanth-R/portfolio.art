import { useState } from 'react';
import power_bi from '../assets/Power-BI.svg'
import resume from '../assets/resume.pdf'

function About() {
    const [activeTab, setActiveTab] = useState("experience");
    
    return(
        <section className="min-h-[calc(100dvh-45px)] px-3 py-3 md:py-6 flex flex-col items-center justify-center scroll-mt-11.25" id="about">
            
            {/* About Info */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl md:text-3xl font-bold">
                    Let me introduce <span className="text-(--primary-color)">myself...</span>
                </h2>
                <p className="text-base md:text-lg text-justify my-1.5 mx-2.5 md:my-2.5 md:mx-7.5">
                    Hey there! I'm Anushanth, someone who enjoys building simple, interactive websites with HTML, CSS, and JavaScript. I like turning ideas into things you can see and click, and sometimes I mix in a bit of data to make it more interesting. When I'm not coding, I'm probably digging into cricket stats or off in my own world of ideas, just seeing where they take me.
                </p>
                <a href={resume} download className="text-black text-sm md:text-base font-bold bg-(--primary-color) py-2.5 px-5 rounded-2xl transition ease-in-out duration-200 hover:bg-sky-500">
                    📄 Download Resume
                </a>
            </div>

            {/* Exp & Edu Tabs */}
            <div className="flex justify-center my-5 md:my-7.5 gap-2.5">
                <button onClick={() => setActiveTab("experience")}
                className={`text-sm md:text-base font-bold text-black py-2.5 px-5 rounded-xl ${activeTab === "experience" ? "bg-(--primary-color)" : "bg-[#ddd]"}`}>🏢 Experience</button>
                <button onClick={() => setActiveTab("education")}
                className={`text-sm md:text-base font-bold text-black py-2.5 px-5 rounded-xl ${activeTab === "education" ? "bg-(--primary-color)" : "bg-[#ddd]"}`}>📚 Education</button>
            </div>

            <div className="tab-contents">
                {activeTab === "experience" &&(
                    <div id="experience" className="active flex flex-col justify-center">
                        <ul className="">
                            <li className="mb-2.5 py-2.5 px-6.25 border-l-3 border-(--primary-color) rounded-lg"><span className="text-(--primary-color) md:text-lg">Research Analyst</span> - Mentor Thesis (2024-Present)</li>
                        </ul>
                    </div>
                    )
                }

                {activeTab === "education" && (
                    <div id="education" className="flex flex-col justify-center">
                        <ul className="">
                            <li className="mb-2.5 py-2.5 px-6.25 border-l-3 border-(--primary-color) rounded-lg"><span className="text-(--primary-color) md:text-lg">Bachelor's in Mechanical</span> - Bethlahem Institute, Ulaganvila (2018-2022)</li>
                            <li className="mb-2.5 py-2.5 px-6.25 border-l-3 border-(--primary-color) rounded-lg"><span className="text-(--primary-color) md:text-lg">Higer Secondary</span> - Hindu Vidyalaya, Karungal (2017-2018)</li>
                        </ul>
                    </div>
                    )
                }
            </div>

            {/* My Skills */}
            <div className="skills">
                <h1 className="text-xl md:text-2xl text-center my-2.5 underline decoration-(--primary-color)">Skills & Technologies</h1>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-8.75">
                    <div className="p-1.75 bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-8.75 md:size-12.5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="html" title="HTML" />
                    </div>
                    <div className="p-1.75 bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-8.75 md:size-12.5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="css" title="CSS" />
                    </div>
                    <div className="p-1.75 bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-8.75 md:size-12.5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="javascript" title="JavaScript" />
                    </div>
                    <div className="p-1.75 bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-8.75 md:size-12.5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="react" title="React" />
                    </div>
                    <div className="p-1.75 bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-8.75 md:size-12.5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" alt="tailwindcss" title="TailwindCSS" />
                    </div>
                    <div className="p-1.75 bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-8.75 md:size-12.5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="mysql" title="MySQL" />
                    </div>
                    <div className="p-1.75 bg-[#ddd] rounded-[15px_5px_15px_5px]">
                        <img className="size-8.75 md:size-12.5" src={power_bi} alt="power-bi" title="Power BI" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;