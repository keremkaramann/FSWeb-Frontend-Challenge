import "../assets/css/header.css";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import halfEclipse from "../assets/symbols/Ellipse 10.png";
import sakura from "../assets/symbols/sakura.jpg";
import rectangleRed from "../assets/symbols/Rectangle 18.png";
const Header = () => {
  return (
    <header className="bg-custom-grey pb-16">
      <div className="header-container">
        <div className="eclipse-cont">
          <img src={halfEclipse} alt="halfEclipse" />
        </div>
        <div className="flex justify-end gap-2 items-center mr-2">
          <div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="cs--headerTexts">
            <p className="text-custom-grey-text text-sm border-r-2 border-custom-grey-text pr-2">
              DARK MODE
            </p>
          </div>
          <div className="flex">
            <p className="text-pink-text text-sm cursor-pointer span-cs-headers">
              TÜRKÇE'
            </p>
            <span className="text-custom-grey-text text-sm ">YE GEÇ</span>
          </div>
        </div>
      </div>
      <div className="flex xs:mt-5 sm:mt-10 md:mt-16 xs:mb-4 two-sections justify-around header-container">
        <div className="w-2/4">
          <h3 className="text-3xl mb-3">Hi! 👋</h3>
          <h1 className="md:text-header-xl lg:text-header-xxl cs-header-h1">
            I’m Kerem. I’m a full-stack developer. I can craft solid and
            scalable frontend products. Let’s meet!
          </h1>
          <div className="flex icons-linkedin md:text-4xl gap-3 mt-12">
            <a href="https://www.linkedin.com/in/kerem-karaman-2434731b4/">
              <ImLinkedin2 />
            </a>
            <a href="https://github.com/keremkaramann">
              <AiFillGithub />
            </a>
          </div>
          <div className="mt-3">
            <p>
              Currently <span className="text-[#AF0C48]">Freelancing</span> for{" "}
              <span className="text-[#AF0C48]">UX, UI, &amp; Web Design </span>
              Project . Invite me to join your team -&gt;{" "}
              <a className="text-[#AF0C48]" href="">
                keremkaraman91@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="pink-shadow mt-12">
          <img src={sakura} alt="sakura" />
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src={rectangleRed}
          alt="rectangleRed"
          className="rectangle-red xs:mt-0"
        />
      </div>
    </header>
  );
};
export default Header;
