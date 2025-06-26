import profile from "../assets/profile0.jpg";

function Home() {
  return (
    <section id="home" className="min-h-[calc(100dvh-40px)] px-2 py-4 md:px-3 md:py-6 flex flex-col md:flex-row items-center justify-center gap-[15px] scroll-mt-[40px]">
      <div className="ml-[15px]">
        <img src={profile} alt="its-me" className="w-[55vw] md:w-[35vw] rounded-[50%] border-2 md:border-3 border-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)]"/>
      </div>
      <div className="md:mr-[10px] md:px-[5px] flex flex-col items-center justify-center md:block">
        <h1 className="text-2xl md:text-4xl font-bold py-[2px] md:py-[5px]">
          Hey, I'm{" "}
          <span className="text-[var(--primary-color)] tracking-wider">Anushanth!</span>
        </h1>
        <h3 className="text-base md:text-lg py-[2px] md:py-[5px]">
          Aspiring Developer who enjoys learning by doing.
        </h3>

        <a href="#contact" className="text-base md:text-xl text-[var(--primary-color)] inline-block mt-[10px] py-[6px] md:py-[8px] px-[15px] md:px-[20px] border-2 border-[var(--primary-color)] rounded-2xl transition ease-in-out duration-200 hover:text-black hover:bg-[var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]">
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default Home;
