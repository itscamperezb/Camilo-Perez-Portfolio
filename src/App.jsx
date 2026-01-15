import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/Projects.jsx";
import Experience from "./Components/Experience.jsx";
import ExperienceIcons from "./Components/ExperienceIcons.jsx";
import ProfileInfo from "./Components/ProfileInfo.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileInfo />
      <ExperienceIcons />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
