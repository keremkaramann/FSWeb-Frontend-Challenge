import { useContext } from "react";
import { DarkMode } from "../context/mycontext";
import "../assets/css/profile.css";
import redCir from "../assets/symbols/Ellipse 12.png";
import Reveal from "./Reveal";
const ProfileSection = () => {
  const { toggleDarkMode, t } = useContext(DarkMode);
  return (
    <section className={toggleDarkMode ? "bg-custom-grey" : "bg-darkest-bg"}>
      <Reveal>
        <div className="flex justify-end redCir">
          <img src={redCir} alt="" className="z-40" />
        </div>
        <div className="text-center">
          <h2
            className={
              toggleDarkMode
                ? "text-black h2-profile mb-8"
                : "text-white h2-profile mb-8"
            }
          >
            {t("profile")}
          </h2>
        </div>
        <div className="flex justify-center gap-10 pb-16 flex-wrap">
          <div
            className={
              toggleDarkMode
                ? "profile-box p-8 leading-10 pr-32 xs:p-6 xs:pr-12 xs:ml-2 bg-white"
                : "profile-box p-8 leading-10 pr-32 xs:p-6 xs:pr-12 xs:ml-2 bg-box-darkMode"
            }
          >
            <h4 className="text-pink-text font-normal mb-5">{t("basic")} </h4>
            <div className="flex justify-between gap-8">
              <div className={toggleDarkMode ? "text-black" : "text-white"}>
                <p className="font-semibold">{t("birth")} </p>
                <p className="font-semibold">{t("residence")} </p>
                <p className="font-semibold">{t("education")} </p>
                <p className="font-semibold">{t("role")} </p>
              </div>
              <div className={toggleDarkMode ? "text-black" : "text-white"}>
                <p className="font-light">31.01.1991</p>
                <p className="font-light">Ankara</p>
                <p className="font-light">Atılım {t("uni")} </p>
                <p className="font-light">Front-End, Back-End</p>
              </div>
            </div>
          </div>
          <div className="p-8 w-2/5 profile2-box-right">
            <div className={toggleDarkMode ? "text-black" : "text-white"}>
              <h4 className="h4-second-box mb-4">{t("about")} </h4>
            </div>
            <div
              className={
                toggleDarkMode
                  ? "text-black leading-7 box-2-p"
                  : "text-white leading-7 box-2-p"
              }
            >
              <p className="mb-8 font-light ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut, odit laborum aliquam voluptatum nisi mollitia.
              </p>
              <p className="font-light ">
                Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
                deserunt quam temporibus cumque magnam!
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
export default ProfileSection;
