import "../App.css";
import reactLogo from "../assets/react.svg";
import js from "../assets/javascript.svg";
import css from "../assets/css_old.svg";
import html from "../assets/html5.svg";
import nextjs from "../assets/nextjs_icon_dark.svg";
import node from "../assets/nodejs.svg";
import git from "../assets/git.svg";
import tailwind from "../assets/tailwind.svg";

const icons = [
  {
    id: 1,
    icon: reactLogo,
  },
  {
    id: 2,
    icon: js,
  },
  {
    id: 3,
    icon: css,
  },
  {
    id: 4,
    icon: html,
  },
  {
    id: 5,
    icon: nextjs,
  },
  {
    id: 6,
    icon: node,
  },
  {
    id: 7,
    icon: git,
  },
  {
    id: 8,
    icon: tailwind,
  },
];
function ExperienceIcons() {
  const hoverBlueShadow =
    "flex place-self-center aspect-square place-content-center h-auto w-4/5 rounded-full hover:shadow-blue-500/100 hover:shadow-lg transition-shadow duration-300";
  return (
    <div className="flex flex-col items-center mb-12 gap-8">
      <h2 className="text-4xl text-white">Experience with</h2>
      <div className="w-full flex justify-center">
        <div className="grid sm:grid-cols-8 size-3/4 p-4 max-sm:grid-cols-4">
          {icons.map((item) => {
            return (
              <div key={item.id} className={hoverBlueShadow}>
                <img
                  src={item.icon}
                  className="h-3/4 w-auto place-self-center"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExperienceIcons;
