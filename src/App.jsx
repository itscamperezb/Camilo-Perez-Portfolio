import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/NabTabs/Projects.jsx";
import Experience from "./Components/NabTabs/Experience.jsx";
import ExperienceIcons from "./Components/ExperienceIcons.jsx";
import ProfileInfo from "./Components/ProfileInfo.jsx";
import NavTabsInfo from "./Components/NabTabs/NavTabsInfo.jsx";

import { Particles } from "@/components/ui/particles";

function App() {
  return (
    <div>
      <div className="relative size-full overflow-auto">
        <Particles className="absolute -z-10 h-full place-self-center" />
        <Header />
        <ProfileInfo />
        <ExperienceIcons />
        <NavTabsInfo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
