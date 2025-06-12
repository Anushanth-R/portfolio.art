import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

function Projects() {
    return (
        <section id="projects" className="h-[calc(100dvh-45px)] flex flex-wrap gap-5 items-center justify-center scroll-mt-[45px]">
            <div className="border-2 border-white max-w-[300px] flex flex-col p-4 rounded-2xl shadow-lg hover:shadow-[0_0_15px_var(--primary-color)] transition-shadow duration-300">
                <img src={project1} alt="thumbnail" className="w-full h-[180px] object-cover rounded-xl" />
                <h2 className="text-center p-4">Hotel Revenue Exploratory Data Analysis</h2>
                <button className="block mx-auto px-6 py-2 font-semibold text-black bg-[var(--primary-color)] rounded-xl hover:scale-105 transition-transform duration-200"><a href="http://github.com/Anushanth-R/Hotel-Revenue-Exploratory-Data-Analysis-and-Visualization" target="_blank">Read</a></button>
            </div>

            <div className="border-2 border-white max-w-[300px] p-4 rounded-2xl shadow-lg hover:shadow-[0_0_15px_var(--primary-color)] transition-shadow duration-300">
                <img src={project2} alt="thumbnail" className="w-full h-[180px] object-cover rounded-xl" />
                <h2 className="text-center p-4">IPL 2023 - EDA with SQL and PowerBI</h2>
                <button className="block mx-auto px-6 py-2 font-semibold text-black bg-[var(--primary-color)] rounded-xl hover:scale-105 transition-transform duration-200"><a href="http://github.com/Anushanth-R/IPL-2023-Exploratory-Data-Analysis-Using-SQL-and-Power-BI" target="_blank" >Read</a></button>
            </div>

            <div className="border-2 border-white max-w-[300px] p-4 rounded-2xl shadow-lg hover:shadow-[0_0_15px_var(--primary-color)] transition-shadow duration-300">
                <img src={project3} alt="thumbnail" className="w-full h-[180px] object-cover rounded-xl" />
                <h2 className="text-center p-4">Model Sales Dashboard with PowerBI</h2>
                <button className="block mx-auto px-6 py-2 font-semibold text-black bg-[var(--primary-color)] rounded-xl hover:scale-105 transition-transform duration-200"><a href="http://www.novypro.com/project/sales-dashboard-174" target="_blank">Read</a></button>
            </div>
        </section>
    );
};

export default Projects;