import "@/App.css";
import t11 from "@/assets/T11Catalog.png";
import simonDice from "@/assets/Simon_Dice.png";
import Jobify from "@/assets/jobifyApp.png";
import KeeperApp from "@/assets/MyKeeperApp.png";
import TicTacToe from "@/assets/Tic-Tac-Toe.png";
import reactLogo from "@/assets/react.svg";
import js from "@/assets/javascript.svg";
import css from "@/assets/css_old.svg";
import html from "@/assets/html5.svg";
import nextjs from "@/assets/nextjs_icon_dark.svg";
import node from "@/assets/nodejs.svg";
import git from "@/assets/git.svg";
import tailwind from "@/assets/tailwind.svg";

const projects = [
  {
    key: 1,
    id: 1,
    title: "Online Catalog Perfumes T11",
    description: "Online perfume catalog for a barbershop in Barranquilla ",
    tech: ["html", "CSS", "git"],
    techIcons: [html, css, git],
    image: t11,
    github: "https://github.com/usuario/portfolio",
    demo: "https://itscamperezb.github.io/T11PERFUMES/",
  },
  {
    key: 2,
    id: 2,
    title: "SIMON DICE GAME",
    description: "Online version of Simon Says Game",
    tech: ["js", "nodejs", "git"],
    techIcons: [js, node, git],
    image: simonDice,
    github: "https://github.com/usuario/portfolio",
    demo: "https://itscamperezb.github.io/Simon-Dice-Game/",
  },

  {
    key: 3,
    id: 3,
    title: "Jobify App",
    description: "Full stack Mobile App development with Jobify Team",
    tech: ["React", "js", "NextJs", "Css", "Tailwind", "git"],
    techIcons: [reactLogo, js, nextjs, css, tailwind, git],
    image: Jobify,
    github: "https://github.com/usuario/portfolio",
    demo: "https://github.com/jobifyhq/jobify-webapp",
  },
  {
    key: 4,
    id: 4,
    title: "Keeper App",
    description: "A basic keeper App to save information online",
    tech: ["React", "CSS", "Vite", "html", "git"],
    techIcons: [reactLogo, css, git],
    image: KeeperApp,
    github: "https://itscamperezb.github.io/MyKeeperApp/",
    demo: "https://itscamperezb.github.io/MyKeeperApp/",
  },
  {
    key: 5,
    id: 5,
    title: "Tic-Tac-Toe Game",
    description: "A basic Tic-Tac-Toe Game",
    tech: ["React", "Vite", "CSS", "html", "git"],
    techIcons: [reactLogo, css, git],
    image: TicTacToe,
    github: "https://github.com/usuario/portfolio",
    demo: "https://github.com/itscamperezb",
  },
];

function Projectos() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 w-full max-sm:grid-cols-1 max-lg:grid-cols-2">
      {projects.map((project) => (
        <div key={project.key}>
          <a href={project.demo}>
            <div
              className="bg-(--card-color) m-2 p-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer h-full"
              key={project.id}
            >
              <div className="justify-items-center">
                <img
                  className="h-52 object-cover w-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <h1 className="text-lg text-center font-bold m-4 text-white">
                {project.title}
              </h1>
              <div className="flex justify-around">
                <p className="w-[70%] text-white">{project.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {project.techIcons.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      alt={project.tech[index]}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
export default Projectos;
