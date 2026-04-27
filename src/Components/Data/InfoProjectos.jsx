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
import ViteLogo from "@/assets/vite.svg";
import InvestmentCalculator from "@/assets/InvestmentCalculator.png";
import CountDownGame from "@/assets/CountDownGame.png";
import typeScript from "@/assets/typeScript.svg";
import BuscaPelis from "@/assets/BuscaPelis.png";
import { Button } from "@mui/material";
import ImpostorGame from "@/assets/ImpostorGame.png";
import DailyFlow from "@/assets/DailyFlow.png";
import { sup } from "motion/react-client";
import { supportsBrowserAnimation } from "motion";
import supabase from "@/assets/supabase-logo-icon.svg";
import expo from "@/assets/client.svg";
const projects = [
  {
    key: 1,
    id: 1,
    title: "Impostor Game (Mobile)",
    description:
      "Mobile Game inspired on the viral tiktok game called Impostor, where the player has to find the impostor between all players, this game is in development and is created with React Native and Expo",
    tech: ["html", "CSS", "git", "react", "expo", "Supabase"],
    techIcons: [html, css, git],
    image: ImpostorGame,
    github: "https://github.com/itscamperezb/Impostor-Game2.git",
    demo: "https://expo.dev/preview/update?message=fix%3A+impostor+aleatorio+y+m%C3%BAsica+persistente+entre+partidas&updateRuntimeVersion=1.0.0&createdAt=2026-04-26T22%3A02%3A21.746Z&slug=exp&projectId=c059b960-8aed-4180-b956-8df54fd8a153&group=92b7b8f7-645d-4d18-916d-bb7a49cd86af",
  },
  {
    key: 2,
    id: 2,
    title: "DailyFlow App",
    description:
      "A personal productivity web app that combines visual weekly planning with financial tracking. It allows you to organize your time by category track daily and weekly progress, and analyze your monthly income and expenses.",
    tech: ["html", "CSS", "git", "react", "typeScript", "supabase"],
    techIcons: [html, css, git, reactLogo, typeScript, supabase],
    image: DailyFlow,
    github: "https://github.com/itscamperezb/DailyFlow.git",
    demo: "https://daily-flow-eta-ten.vercel.app/login/",
  },
  {
    key: 3,
    id: 3,
    title: "Online Catalog Perfumes T11",
    description:
      "My first Demo App, and is a Web Catalog for a Local perfume Shoo Located in Barranquilla",
    tech: ["html", "CSS", "git"],
    techIcons: [html, css, git],
    image: t11,
    github: "https://github.com/itscamperezb/T11PERFUMES.git",
    demo: "https://itscamperezb.github.io/T11PERFUMES/",
  },

  {
    key: 4,
    id: 4,
    title: "BuscaPelis",
    description:
      "This is an website where people can find information for more tha 1 million movies and 200.000 TV Series. This website works with TMDB API",
    tech: [
      "React",
      "TypeScript",
      "js",
      "Vite",
      "Css",
      "Tailwind",
      "git",
      "API REST",
    ],
    techIcons: [reactLogo, typeScript, js, ViteLogo, tailwind, git],
    image: BuscaPelis,
    github: "https://github.com/itscamperezb/BuscaPelis",
    demo: "https://itscamperezb.github.io/BuscaPelis/",
  },
  {
    key: 5,
    id: 5,
    title: "SIMON DICE GAME",
    description:
      "Online version of Simon Says Game created to apply the manipulation of arrays, using push methods, validation and conditional Styling",
    tech: ["js", "nodejs", "git"],
    techIcons: [js, node, git],
    image: simonDice,
    github: "https://github.com/itscamperezb/Simon-Dice-Game.git",
    demo: "https://itscamperezb.github.io/Simon-Dice-Game/",
  },

  {
    key: 6,
    id: 6,
    title: "Keeper App",
    description: "A basic keeper App to save information online",
    tech: ["React", "CSS", "Vite", "html", "git"],
    techIcons: [reactLogo, css, git, ViteLogo],
    image: KeeperApp,
    github: "https://github.com/itscamperezb/MyKeeperApp.git",
    demo: "https://itscamperezb.github.io/MyKeeperApp/",
  },
  {
    key: 7,
    id: 7,
    title: "Tic-Tac-Toe Game",
    description:
      "Is a tic-tac-toe demo App created to implement programing logic using objects, arrays and useSate Hooks",
    tech: ["React", "Vite", "CSS", "html", "git"],
    techIcons: [reactLogo, css, git, ViteLogo],
    image: TicTacToe,
    github: "https://github.com/itscamperezb/TIC-TAC-TOE.git",
    demo: "https://itscamperezb.github.io/TIC-TAC-TOE/",
  },
  {
    key: 8,
    id: 8,
    title: "Investment Calculator",
    description:
      "An investment Calculator so the people can calculate how much money can they get for investing with certain interest",
    tech: ["React", "Vite", "CSS", "html", "git"],
    techIcons: [reactLogo, css, git, ViteLogo],
    image: InvestmentCalculator,
    github: "https://github.com/itscamperezb/Invesment-Calculator.git",
    demo: "https://itscamperezb.github.io/Invesment-Calculator/",
  },
  {
    key: 9,
    id: 9,
    title: "CountDown-Game",
    description:
      "This is a CountDown-Game where I implement the use of Hooks like useRef and useState, using programing logic to render and calculate the Score",
    tech: ["React", "Vite", "CSS", "html", "git"],
    techIcons: [reactLogo, css, git, ViteLogo],
    image: CountDownGame,
    github: "https://github.com/itscamperezb/CountdownGame.git",
    demo: "https://itscamperezb.github.io/CountdownGame/",
  },
  {
    key: 10,
    id: 10,
    title: "Jobify App",
    description: "Full stack Mobile App in development with Jobify Team",
    tech: ["React", "js", "NextJs", "Css", "Tailwind", "git"],
    techIcons: [reactLogo, js, nextjs, css, tailwind, git],
    image: Jobify,
    github: "https://github.com/jobifyhq",
    demo: "https://github.com/jobifyhq/jobify-webapp",
  },
];

function Projectos() {
  return (
    <div className=" grid grid-cols-3 gap-4 p-4 w-full max-sm:grid-cols-1 max-lg:grid-cols-2">
      {projects.map((project) => (
        <div key={project.key}>
          <a href={project.demo}>
            <div
              className="grid grid-cols-1 bg-(--card-color) m-2 p-2 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer h-full"
              key={project.id}
            >
              <div className="justify-items-center">
                <img
                  className="h-52 object-cover w-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <h1 className="text-xl text-center font-bold m-4 text-white">
                {project.title}
              </h1>
              <div className="flex justify-around">
                <p className="w-[70%] text-white text-md">
                  {project.description}
                </p>

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
              <div className="m-4 place-content-center">
                <Button variant="contained" href={project.github}>
                  Repository
                </Button>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
export default Projectos;
