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
  h1: "Front End Web developer",
  p: "I am responsible for creating and implementing React components, hooks, managing views and information with Next.js, responsive design using tools such as Tailwind/CSS, managing libraries, frameworks, object-oriented programming, and implementing AI tools such as Claude Code. I also have experience using GIT for version control and collaborative work.",
};
function ProfileInfo() {
  return (
    <div id="profileInfo">
      <div className="h-100 w-100 flex justify-center my-8">
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
      <TextAnimate className="w-full text-center text-2xl sm:w-sm md:w-xl">
        {homeInfo.p}
      </TextAnimate>
      <div className="flex max-sm:flex-col max-sm:items-center max-sm:w-full h-30 w-full max-sm:h-auto justify-around gap-7 my-14">
        <a
          href={whatsApp}
          className="max-sm:w-full sm:w-1/3 md:w-1/4 2xl:w-1/6"
        >
          <Button
            className="size-full"
            sx={{
              padding: "0.5rem",
              fontSize: "1.5em",
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
          className="max-sm:w-full sm:w-1/3 md:w-1/4 2xl:w-1/6"
        >
          <Button
            className="size-full"
            sx={{
              fontSize: "1.5em",
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
