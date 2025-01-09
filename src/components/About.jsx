import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = () => {
  return <Tilt className="xs:w-[250px] w-full"> 
    <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink gradient p-[1px] rounded-lg shadow-lg"

    >
    <div></div>

    </motion.div>
  </Tilt>;
  <im</im>
};

export default function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>À Propos de moi</p>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        QSQLKSGMQSDGBqsklgvbmlkdjvbSDQGQSHGOZIHGQSqmigmzeobgqmsidobg
        bMQGmsbIABGmsdbgmOIEBGLsdbgnLIbsdg JS G
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}
