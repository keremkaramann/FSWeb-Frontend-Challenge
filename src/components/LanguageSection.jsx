import "../assets/css/lang.css";
//lang icons
import js from "../assets/languageIcons/js-logo 1.png";
import react from "../assets/languageIcons/react.png";
import redux from "../assets/languageIcons/redux.png";
import java from "../assets/languageIcons/java-res.png";
import vscode from "../assets/languageIcons/vscode.png";
import figma from "../assets/languageIcons/figma-logo 1.png";
import griLogo from "../assets/symbols/Rectangle 22.png";
import { useContext } from "react";
import { DarkMode } from "../context/mycontext";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const skills = [
  { name: "JAVASCRIPT", icon: js },
  { name: "REACT", icon: react },
  { name: "REDUX", icon: redux },
  { name: "JAVA", icon: java },
  { name: "VS CODE", icon: vscode },
  { name: "FIGMA", icon: figma },
];

const SkillItem = ({ name, icon }) => {
  const { toggleDarkMode } = useContext(DarkMode);
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95, rotate: "5deg" }}
        className="cursor-pointer"
      >
        <img src={icon} alt={name} className="mb-4 rounded-lg" />
        <p
          className={
            toggleDarkMode
              ? "text-custom-grey-text text-2xl font-medium"
              : "text-white text-2xl font-medium"
          }
        >
          {name}
        </p>
      </motion.div>
    </div>
  );
};

const LanguageSection = () => {
  const { toggleDarkMode, t } = useContext(DarkMode);
  return (
    <section>
      <div
        className={
          toggleDarkMode
            ? "section-container-2 bg-white"
            : "section-container-2 bg-lightest-bg"
        }
      >
        <div className="text-center mb-10 xs:pt-10 md:pt-16">
          <h2
            className={
              toggleDarkMode
                ? "md:text-5xl xs:text-4xl font-medium text-black"
                : "md:text-5xl xs:text-4xl font-medium text-white"
            }
          >
            {t("skills")}
          </h2>
        </div>
        <Reveal>
          <div className="xs:w-1/2 xs:mx-auto middleC:mx-0 middleC:w-full flex xs:gap-6 md:gap-8 justify-center text-center lang-cont xs:flex-wrap xs:p-5">
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </Reveal>
        <div className="mt-10 gri-logo xs:pb-16  md:pb-16">
          <img src={griLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
