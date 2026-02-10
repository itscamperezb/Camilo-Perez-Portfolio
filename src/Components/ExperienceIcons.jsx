import "../App.css";
import reactLogo from "../assets/react.svg";
import js from "../assets/javascript.svg";
import css from "../assets/css_old.svg";
import html from "../assets/html5.svg";
import nextjs from "../assets/nextjs_icon_dark.svg";
import node from "../assets/nodejs.svg";
import git from "../assets/git.svg";
import tailwind from "../assets/tailwind.svg";

function ExperienceIcons() {
  const hoverBlueShadow =
    "flex place-content-center items-center h-20 w-20 rounded-full hover:shadow-blue-500/100 hover:shadow-lg transition-shadow duration-300";
  return (
    <div className="flex flex-col items-center mb-12 gap-8">
      <h2 className="text-4xl text-white">Experience with</h2>
      <div className="w-full flex justify-center">
        <div className="justify-items-center grid grid-cols-8 gap-8 w-3/4 p-4 max-sm:grid-cols-4">
          <div className={hoverBlueShadow}>
            <img src={reactLogo} className="h-15 w-auto"></img>
          </div>
          <div className={hoverBlueShadow}>
            <img src={js} className="h-15 w-auto"></img>
          </div>
          <div className={hoverBlueShadow}>
            <img src={nextjs} className=" h-15 w-auto"></img>
          </div>
          <div className={hoverBlueShadow}>
            <img src={node} className="h-15 w-auto"></img>
          </div>
          <div className={hoverBlueShadow}>
            <img src={html} className="h-15 w-auto"></img>
          </div>
          <div className={hoverBlueShadow}>
            <img src={css} className="h-15 w-auto"></img>
          </div>
          <div className={hoverBlueShadow}>
            <img src={git} className="h-15 w-auto max-md:col-span-3"></img>
          </div>
          <div className={hoverBlueShadow}>
            <img src={tailwind} className="h-15 w-auto max-md:col-span-3"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceIcons;
