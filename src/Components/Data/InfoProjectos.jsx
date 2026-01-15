const projects = [
  {
    id: 1,
    title: "Online Catalog Perfumes T11",
    description: "online perfume catalog for a barbershop in Barranquilla ",
    tech: ["html", "CSS"],
    image: "/project1.png",
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },
  {
    id: 2,
    title: "SIMON DICE GAME",
    description: "online version of Simon Says Game",
    tech: ["js", "nodejs"],
    image: "/project1.png",
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },

  {
    id: 3,
    title: "Jobify App",
    description: "Personal App project",
    tech: ["React", "js", "NextJs", "Css", "Tailwind"],
    image: "/project1.png",
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },
  {
    id: 4,
    title: "Keeper App",
    description: "A basic keeper App to save information online",
    tech: ["React", "CSS", "Vite", "html"],
    image: "/project1.png",
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },
  {
    id: 5,
    title: "To Do List",
    description: "A basic Personal To Do list",
    tech: ["Recat", "Vite", "CSS", "html"],
    image: "/project1.png",
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },
];

function Projectos() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}
export default Projectos;
