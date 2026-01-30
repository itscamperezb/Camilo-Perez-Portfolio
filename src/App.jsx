import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/NabTabs/Projects.jsx";
import Experience from "./Components/NabTabs/Experience.jsx";
import ExperienceIcons from "./Components/ExperienceIcons.jsx";
import ProfileInfo from "./Components/ProfileInfo.jsx";
import NavTabsInfo from "./Components/NabTabs/NabTabsInfo.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <ProfileInfo />
      <ExperienceIcons />
      <NavTabsInfo />
      <Footer />
    </div>
  );
}

export default App;
