import "../assets/css/lang.css";
import js from "../assets/languageIcons/js-logo 1.png";
import react from "../assets/languageIcons/react.png";
import redux from "../assets/languageIcons/redux.png";
import java from "../assets/languageIcons/java-logo-vert-blk.png";
import vscode from "../assets/languageIcons/vscode.png";
import figma from "../assets/languageIcons/figma-logo 1.png";
import griLogo from "../assets/symbols/Rectangle 22.png";
import eclipse from "../assets/symbols/Ellipse 11.png";
const LanguageSection = () => {
  return (
    <section className="xs:mt-10 xs:mb-16 md:mt-16 md:mb-16 section-container-2">
      <div className="sec2-container">
        <div className="flex justify-between">
          <img src={eclipse} alt="" className="eclipse-gri" />
        </div>
      </div>
      <div className="text-center mb-10">
        <h2 className="md:text-5xl xs:text-4xl">Skills</h2>
      </div>
      <div className="flex xs:gap-3 md:gap-8 justify-center text-center lang-cont xs:flex-wrap xs:p-2">
        <div>
          <img src={js} alt="javascript" className="mb-4" />
          <p className="text-custom-grey-text text-2xl">JAVASCRIPT</p>
        </div>
        <div>
          <img src={react} alt="react" className="mb-4" />
          <p className="text-custom-grey-text text-2xl ">REACT</p>
        </div>
        <div>
          <img src={redux} alt="redux" className="mb-4" />
          <p className="text-custom-grey-text text-2xl">REDUX</p>
        </div>
        <div>
          <img src={java} alt="java" className="mb-4 java-logo" />
          <p className="text-custom-grey-text text-2xl">JAVA</p>
        </div>
        <div>
          <img src={vscode} alt="vscode" className="mb-4" />
          <p className="text-custom-grey-text text-2xl">VS CODE</p>
        </div>
        <div>
          <img src={figma} alt="figma" className="mb-4" />
          <p className="text-custom-grey-text text-2xl">FIGMA</p>
        </div>
      </div>
      <div className="mt-10 xs:w-1/4">
        <img src={griLogo} alt="" />
      </div>
    </section>
  );
};
export default LanguageSection;
