import profile from "../assets/profile0.jpg";

function Home() {
  return (
    <section id="home" className="h-[calc(100dvh-35px)] px-3 py-6 flex items-center justify-center gap-[15px] scroll-mt-[40px]">
      <div className="ml-[15px]">
        <img src={profile} alt="its-me" className="w-[35vw] rounded-[50%] border-3 border-[var(--primary-color)] shadow-[0_0_10px_var(--primary-color)]"/>
      </div>
      <div className="mr-[10px] px-[5px]">
        <h1 className="text-4xl font-bold py-[5px]">
          Hey, I'm{" "}
          <span className="text-[var(--primary-color)] tracking-wider">Anushanth!</span>
        </h1>
        <h3 className="text-lg py-[5px]">
          Aspiring Developer who enjoys learning by doing.
        </h3>

        <a href="#contact" className="text-xl text-[var(--primary-color)] inline-block mt-[10px] py-[8px] px-[20px] border-2 border-[var(--primary-color)] rounded-2xl transition ease-in-out duration-200 hover:text-black hover:bg-[var(--primary-color)] hover:shadow-[0_0_10px_var(--primary-color)]">
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default Home;
