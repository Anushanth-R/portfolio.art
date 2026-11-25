import profile from "../assets/profile0.jpg";
import resume from "../assets/resume.pdf";

function Home() {
  return (
    <section id="home" className="min-h-[calc(100dvh-45px)] px-2 py-4 md:px-3 md:py-6 flex flex-col md:flex-row items-center justify-center gap-[15px] scroll-mt-[45px]">
      <div className="ml-[15px]">
        <img src={profile} alt="its-me" className="w-[55vw] md:w-[35vw] rounded-[50%] border-2 md:border-3 border-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)]"/>
      </div>
      <div className="md:mr-[10px] md:px-[5px] w-full text-center md:w-auto md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold py-[2px] md:py-[5px]">
          Hey, I'm{" "}
          <span className="text-[var(--primary-color)] tracking-wider">Anushanth!</span>
        </h1>
        <p className="text-base md:text-lg py-[2px] md:py-[5px]">
          I use SQL to explore data and Power BI to show what I find.
        </p>

        <div className="mx-auto mt-5 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--primary-color)] bg-[var(--primary-color)] px-5 py-2.5 text-sm font-bold text-black transition-colors hover:border-sky-300 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] md:text-base"
          >
            View Projects
          </a>
          <a
            href={resume}
            download="Anushanth_Resume.pdf"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--primary-color)] px-5 py-2.5 text-sm font-bold text-[var(--primary-color)] transition-colors hover:bg-[var(--primary-color)]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] md:text-base"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;