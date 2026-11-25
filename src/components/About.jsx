import powerBi from "../assets/Power-BI.svg";

const iconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skillGroups = [
  {
    title: "Data Analytics",
    skills: [
      { name: "SQL (MySQL)", icon: `${iconBase}/mysql/mysql-original-wordmark.svg` },
      { name: "Power BI", icon: powerBi },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: `${iconBase}/html5/html5-original-wordmark.svg` },
      { name: "CSS", icon: `${iconBase}/css3/css3-original-wordmark.svg` },
      { name: "JavaScript", icon: `${iconBase}/javascript/javascript-original.svg` },
      { name: "React", icon: `${iconBase}/react/react-original-wordmark.svg` },
      { name: "Tailwind CSS", icon: `${iconBase}/tailwindcss/tailwindcss-plain-wordmark.svg` },
    ],
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto flex min-h-[calc(100dvh-45px)] w-full max-w-5xl scroll-mt-[30px] flex-col justify-center gap-8 px-5 py-12 md:gap-10 md:px-8"
    >
      <div>
        <h2 id="about-heading" className="text-2xl font-bold md:text-3xl">
          About <span className="text-[var(--primary-color)]">me</span>
        </h2>
        <p className="mt-3 leading-relaxed md:text-lg text-justify">
          I studied mechanical engineering and now work as a Research Analyst at Mentor Thesis.
          I enjoy digging into data to understand what changed and explore what might explain it. I also build websites to share my work. I'm particularly interested in exploring real-world datasets and presenting insights through visualizations.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-[3fr_2fr]">
        <div className="rounded-xl border border-white/15 bg-[var(--bg2-color)] p-5">
          <h3 className="text-lg font-bold text-[var(--primary-color)]">Experience</h3>
          <p className="mt-3 font-semibold">Research Analyst · Mentor Thesis</p>
          <p className="text-sm text-white/75">2024–Present</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              Analyzed peer review feedback and made technical and editorial revisions,
              consistently meeting tight deadlines and completing quality checks before submission.
            </li>
            <li>
              Coordinated a small team during peak periods, assigning tasks, tracking
              progress, and reviewing deliverables across concurrent projects.
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/15 bg-[var(--bg2-color)] p-5">
          <h3 className="text-lg font-bold text-[var(--primary-color)]">Education</h3>
          <ul className="mt-3 space-y-4">
            <li>
              <p className="font-semibold">Bachelor’s in Mechanical Engineering</p>
              <p className="text-sm text-white/75">Bethlahem Institute, Ulaganvila · 2018–2022</p>
            </li>
            <li>
              <p className="font-semibold">Higher Secondary</p>
              <p className="text-sm text-white/75">Hindu Vidyalaya, Karungal · 2017–2018</p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold">Skills &amp; Technologies</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-[2fr_3fr]">
          {skillGroups.map(({ title, skills }) => (
            <div key={title}>
              <h4 className="font-semibold text-[var(--primary-color)]">{title}</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {skills.map(({ name, icon }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm hover:border-[var(--primary-color)]/60 hover:bg-[var(--primary-color)]/10 motion-safe:transition-colors"
                  >
                    <img src={icon} alt="" className="size-6 rounded bg-white p-0.5" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;