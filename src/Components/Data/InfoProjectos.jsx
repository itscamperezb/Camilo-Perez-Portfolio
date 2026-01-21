import "@/App.css";
import t11 from "@/assets/T11Catalog.png";
import simonDice from "@/assets/Simon_Dice.png";
import Jobify from "@/assets/jobifyApp.png";
import { Link } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
const projects = [
  {
    id: 1,
    title: "Online Catalog Perfumes T11",
    description: "Online perfume catalog for a barbershop in Barranquilla ",
    tech: ["html", "CSS"],
    image: t11,
    github: "https://github.com/usuario/portfolio",
    demo: "https://itscamperezb.github.io/T11PERFUMES/",
  },
  {
    id: 2,
    title: "SIMON DICE GAME",
    description: "Online version of Simon Says Game",
    tech: ["js", "nodejs"],
    image: simonDice,
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },

  {
    id: 3,
    title: "Jobify App",
    description: "Personal App project",
    tech: ["React", "js", "NextJs", "Css", "Tailwind"],
    image: Jobify,
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },
  {
    id: 4,
    title: "Keeper App",
    description: "A basic keeper App to save information online",
    tech: ["React", "CSS", "Vite", "html"],
    image: "/project1.png",
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },
  {
    id: 5,
    title: "To Do List",
    description: "A basic Personal To Do list",
    tech: ["Recat", "Vite", "CSS", "html"],
    image: "/project1.png",
    github: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.com",
  },
];

function Projectos() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{
            backgroundColor: "#2a2a2a",
            width: "100%",
            borderRadius: "10px",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#333",
              transform: "translateY(-4px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              cursor: "pointer",
            },
          }}
        >
          <CardActionArea className="CardMedia">
            <CardMedia
              component="img"
              alt={project.title}
              height="140"
              image={project.image}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", padding: "10px" }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body4"
              sx={{ textAlign: "center", color: "white", padding: "10px" }}
            >
              {project.description}
            </Typography>
            <CardActions>
              <Button size="small">VISITAR</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
export default Projectos;
