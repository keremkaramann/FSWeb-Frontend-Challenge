import { useContext } from "react";
import "../assets/css/footer.css";
import { DarkMode } from "../context/mycontext";
const Footer = () => {
  const { toggleDarkMode } = useContext(DarkMode);
  return (
    <footer
      className={
        toggleDarkMode
          ? "flex justify-center"
          : "flex justify-center bg-lightest-bg"
      }
    >
      <div className="mt-60 xs:mt-20 flex gap-10 mb-20 flex-wrap xs:justify-center">
        <div>
          <h3
            className={
              toggleDarkMode
                ? "text-black footer-h3 font-medium text-right"
                : "text-white footer-h3 font-medium text-right"
            }
          >
            Let’s work together on <br /> your next product.
          </h3>
        </div>
        <div className="flex flex-col">
          <a
            href="https://github.com/keremkaramann"
            className={
              toggleDarkMode
                ? "font-medium text-[#1769FF]"
                : "font-medium text-[#82BBFF]"
            }
          >
            Github
          </a>
          <a
            href="#"
            className={
              toggleDarkMode
                ? "font-medium text-[#0A0A14]"
                : "font-medium text-[#fff]"
            }
          >
            Personal Blog
          </a>
          <a
            href="https://www.linkedin.com/in/kerem-karaman-2434731b4/"
            className={
              toggleDarkMode
                ? "font-medium text-[#0077B5]"
                : "font-medium text-[#419CCB]"
            }
          >
            Linkedin
          </a>
          <a
            href="mailto:keremkaraman91@gmail.com"
            className={
              toggleDarkMode
                ? "font-medium text-[#AF0C48]"
                : "font-medium text-[#EA2678]"
            }
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
