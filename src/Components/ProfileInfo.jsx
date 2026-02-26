import "../App.css";
import Button from "@mui/material/Button";
import fotoProfesional from "@/assets/FOTO PROFESIONAL.jpg";
import CV from "@/assets/Camilo Pérez Barraza CV.pdf";
import { motion } from "motion/react";
import { TypingAnimation } from "@/components/ui/typing-animation";

import { TextAnimate } from "@/components/ui/text-animate";

const whatsApp = "https://wa.me/573005239992";
const transition = {
  duration: 0.6,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const homeInfo = {
  h1: "Front End Web developer with knowledge on Backend",
  p: "I am responsible for creating and implementing React components, hooks, managing views and information with Next.js, responsive design using tools such as Tailwind/CSS, managing libraries, frameworks, object-oriented programming, and implementing AI tools such as Claude Code. I also have experience integrating and consuming APIs, using GIT for version control and collaborative work, and knowledge of",
};
function ProfileInfo() {
  return (
    <div id="profileInfo">
      <div className="max-sm:w-[80%] sm:size-[40%] md:size-[20%] flex mx-auto my-8 aspect-square ">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="h-full rounded-full w-full object-cover"
          src={fotoProfesional}
        ></motion.img>
      </div>

      <TypingAnimation className="text-4xl mb-7 text-center">
        {homeInfo.h1}
      </TypingAnimation>
      <TextAnimate className="w-full text-center text-xl sm:w-sm md:w-xl">
        {homeInfo.p}
      </TextAnimate>
      <div className="flex  max-sm:flex-col max-sm:items-center max-sm:w-full h-30 w-full max-sm:h-auto justify-around gap-7 my-14">
        <a
          href={whatsApp}
          className="flex justify-center items-center max-sm:w-full sm:w-1/3 md:w-1/4 2xl:w-1/6"
        >
          <Button
            className="size-3/4"
            sx={{
              fontSize: "1.2em",
              ":hover": { border: "1px solid #3b82f6" },
            }}
            variant="outlined"
          >
            Get in touch
          </Button>
        </a>
        <a
          href={CV}
          download
          className="flex justify-center items-center max-sm:w-full sm:w-1/3 md:w-1/4 2xl:w-1/6"
        >
          <Button
            className="size-3/4"
            sx={{
              fontSize: "1.2em",
              ":hover": { border: "1px solid #3b82f6" },
            }}
            variant="outlined"
            color="#5badff"
          >
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ProfileInfo;
