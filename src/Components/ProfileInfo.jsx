import "../App.css";
import Button from "@mui/material/Button";
import fotoProfesional from "@/assets/FOTO PROFESIONAL.jpg";
import CV from "@/assets/Camilo Pérez Barraza CV.pdf";
import { motion } from "motion/react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Globe } from "@/components/ui/globe";
import { TextAnimate } from "@/components/ui/text-animate";
import { RetroGrid } from "@/components/ui/retro-grid";

const whatsApp = "https://wa.me/573005239992";
const transition = {
  duration: 0.6,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

const homeInfo = {
  h1: "Front End Web developer",
  p: "Front End Web Developer focused on building modern, responsive, and high-quality web applications. Passionate about continuous learning, clean code, and creating real digital solutions.",
};
function ProfileInfo() {
  return (
    <div id="profileInfo">
      <motion.img
        iinitial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="photo"
        src={fotoProfesional}
      ></motion.img>

      <TypingAnimation className="text-3xl mb-7 text-center">
        {homeInfo.h1}
      </TypingAnimation>
      <TextAnimate className="w-full text-center sm:w-sm">
        {homeInfo.p}
      </TextAnimate>
      <div className="flex max-sm:flex-col">
        <a href={whatsApp}>
          <Button
            className="btn-getintouch"
            sx={{ margin: "40px", ":hover": { border: "1px solid #3b82f6" } }}
            variant="outlined"
          >
            Get in touch
          </Button>
        </a>
        <a href={CV} download>
          <Button
            className="btn-download"
            sx={{ margin: "40px" }}
            variant="outlined"
            color="#5badff"
          >
            Download CV
          </Button>
        </a>
      </div>
      <RetroGrid />
    </div>
  );
}

export default ProfileInfo;
