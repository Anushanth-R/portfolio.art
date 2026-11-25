import hotelCover from "../assets/hotel-revenue-cover.jpg";
import iplCover from "../assets/ipl-2023-cover.jpg";
import salesCover from "../assets/model-sales-cover.jpg";

const projects = [
  {
    id: "hotel-revenue",
    title: "Hotel Revenue Analysis",
    description: "An exploratory analysis of hotel revenue, with visualizations that show how revenue varies.",
    cover: hotelCover,
    href: "https://github.com/Anushanth-R/Hotel-Revenue-Exploratory-Data-Analysis-and-Visualization",
    linkLabel: "View on GitHub",
  },
  {
    id: "ipl-2023",
    title: "IPL 2023 Analysis",
    description: "An exploration of IPL 2023 data using SQL queries and Power BI visualizations.",
    cover: iplCover,
    href: "https://github.com/Anushanth-R/IPL-2023-Exploratory-Data-Analysis-Using-SQL-and-Power-BI",
    linkLabel: "View on GitHub",
  },
  {
    id: "model-sales",
    title: "Model Sales Dashboard",
    description: "A Power BI dashboard for exploring sales of model vehicles.",
    cover: salesCover,
    href: "https://www.novypro.com/project/sales-dashboard-174",
    linkLabel: "View dashboard",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto flex min-h-[calc(100dvh-45px)] w-full max-w-5xl scroll-mt-[30px] flex-col justify-center gap-6 px-5 py-12 md:px-8"
    >
      <h2 id="projects-heading" className="text-2xl font-bold md:text-3xl">
        Projects
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, cover, href, linkLabel }) => (
          <article
            key={id}
            className="flex flex-col overflow-hidden rounded-xl border border-white/15 bg-[var(--bg2-color)] hover:border-[var(--primary-color)]/60 motion-safe:transition-colors"
          >
            <img src={cover} alt="" loading="lazy" className="aspect-[3/2] w-full object-cover" />
            <div className="flex flex-1 flex-col items-start gap-3 p-5">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-white/80">{description}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${linkLabel}: ${title} (opens in a new tab)`}
                className="mt-2 inline-flex min-h-11 items-center rounded-xl border border-[var(--primary-color)] px-4 text-sm font-bold text-[var(--primary-color)] hover:bg-[var(--primary-color)]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] motion-safe:transition-colors"
              >
                {linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;