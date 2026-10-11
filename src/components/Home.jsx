import profile from "../assets/profile0.jpg";

function Home() {
  return (
    <section id="home" className="min-h-[calc(100dvh-45px)] px-2 py-4 md:px-3 md:py-6 flex flex-col md:flex-row items-center justify-center gap-3.75 scroll-mt-11.25">
      <div className="ml-3.75">
        <img src={profile} alt="its-me" className="w-[55vw] md:w-[35vw] rounded-[50%] border-2 md:border-3 border-(--primary-color) shadow-[0_0_10px_var(--primary-color)]"/>
      </div>
      <div className="md:mr-2.5 md:px-1.25 flex flex-col items-center justify-center md:block">
        <h1 className="text-2xl md:text-3xl font-bold py-0.5 md:py-1.25">
          Hey, I'm{" "}
          <span className="text-(--primary-color) tracking-wider">Anushanth!</span>
        </h1>
        <h3 className="text-base md:text-lg py-0.5 md:py-1.25">
          Aspiring Developer who enjoys learning by doing.
        </h3>

        <a href="#contact" className="text-base md:text-xl text-(--primary-color) inline-block mt-2.5 py-1.5 md:py-2 px-3.75 md:px-5 border-2 border-(--primary-color) rounded-2xl transition ease-in-out duration-200 hover:text-black hover:bg-(--primary-color) hover:shadow-[0_0_10px_var(--primary-color)]">
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default Home;
