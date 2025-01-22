import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

export default function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => {
        return (
          // Ajout du `return` ici
          <div className="w-28 h-28" key={tech.name}>
            {" "}
            {/* Correction de la syntaxe key */}
            <BallCanvas icon={tech.icon} />
            <h2>{tech.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
