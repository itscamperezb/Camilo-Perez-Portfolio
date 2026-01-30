import React, { useStae } from "react";
import "../App.css";
import Button from "@mui/material/Button";

function ProfileInfo() {
  return (
    <div id="profileInfo">
      <img className="photo" src="../src/assets/FOTO PROFESIONAL.jpg"></img>
      <h1>Le meto al codigo de puro Hobbie</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis reiciendis, saepe obcaecati voluptate ad consectetur dolores
        nulla, cumque voluptatem atque sapiente tempora accusantium beatae
        temporibus ratione aliquam earum deserunt.
      </p>
      <div className="botones">
        <Button>Get in touch</Button>
        <Button variant="contai ned" color="#5badff">
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default ProfileInfo;
