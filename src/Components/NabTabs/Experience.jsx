import "@/App.css";
import LeanSolutions from "@/assets/LeanSolutions.png";
import JobifyLogo from "@/assets/jobifyLogo.png";
import CostaBitesLogo from "@/assets/LogotipoCostaBites.png";
import UpWork from "@/assets/Upwork-icon.svg";
import T11Logo from "@/assets/T11Logo.png";
import SolvoLogo from "@/assets/SolvoLogo.jpg";
const experience = [
  {
    id: 1,
    name: "Lean Solutions",
    role: "Logistic Cordinator",
    description: "Experience in Lean Methodologies and Solutions",
    years: "2 years",
    logo: LeanSolutions,
  },
  {
    id: 2,
    name: "Jobify",
    role: "Freelance Front End Web Developer",
    description: "Front end web developer for a new local StarUp",
    years: "4 months",
    logo: JobifyLogo,
  },
  {
    id: 3,
    name: "Freelance",
    role: "Virtual Assistant",
    description: "Brand Development",
    years: "1 year",
    logo: UpWork,
  },
  {
    id: 4,
    name: "T11 Perfumes",
    role: "Web Developer",
    description: "Web development for a local restaurant",
    years: "1 year",
    logo: T11Logo,
  },
  {
    id: 5,
    name: "Solvo Global",
    role: "Bilingual Customer Service Agent",
    description: "Customer Service agent at Real State busines",
    years: "2 year",
    logo: SolvoLogo,
  },
];

function Experience() {
  return (
    <div id="experience" className="experience-card ">
      <h1 className="text-4xl font-bold text-center mb-8">Experience</h1>

      {experience.map((exp) => (
        <div className="flex items-center justify-around mb-6" key={exp.id}>
          <div className=" flex justify-around items-center gap-8 mb-4 w-2/5">
            <img
              src={exp.logo}
              alt={exp.name}
              className="w-20 h-20 object-contain mb-2"
            />
            <h2 className="text-2xl font-bold max-sm:hidden ">{exp.name}</h2>
          </div>
          <ul className="w-2/5">
            <li className="text-blue-500">{exp.role}</li>
            <li>{exp.description}</li>
            <li>{exp.years}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
