import {
  VerticakTimLine,
  VerticakTimLineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experiences }) => (
  <VerticakTimLineElement
    style={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #2322631" }}
    date={experiences.date}
    iconStyle={{ background: experiences.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experiences.icon}
          alt={experiences.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold"> {experiences.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experiences.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-2">
      {experiences.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticakTimLineElement>
);
function Experience() {
  return (
    <>
      (
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Expériences</p>
        <p className={styles.sectionHeadText}>Mes compétences et expériences</p>
      </motion.div>
      <div class="mt-20 flex flex-col">
        <VerticakTimLine>
          {experiences.map((experiences, index) => (
            <ExperienceCard key={index} experiences={experiences} />
          ))}

          {/* Add more experiences here */}

          {/* Example: */}
        </VerticakTimLine>
      </div>
      )
    </>
  );
}

export default SectionWrapper(Experience, "work");
