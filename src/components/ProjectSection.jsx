import "../assets/css/project.css";
import comp1 from "../assets/computerImg/Group 103.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { DarkMode } from "../context/mycontext";
import { useContext } from "react";

const ProjectSection = () => {
  const { toggleDarkMode } = useContext(DarkMode);
  return (
    <section
      className={
        toggleDarkMode
          ? "pt-20 pb-10 xs:pt-10 xs:pb-10 bg-white"
          : "pt-20 pb-10 xs:pt-10 xs:pb-10 bg-lightest-bg text-white"
      }
    >
      <div className="text-center">
        <h2
          className={
            toggleDarkMode
              ? "text-black projects-h2 font-medium"
              : "text-white projects-h2 font-medium"
          }
        >
          Projects
        </h2>
      </div>
      <div className="mt-10 swiper-cont">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={5}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1100: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            720: {
              slidesPerView: 1,
              spaceBetween: 6,
            },
            540: {
              slidesPerView: 1,
              spaceBetween: 4,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center p-6 xs:p-20">
              <div
                className={
                  toggleDarkMode
                    ? "project-2 p-10 second-box-projects bg-baby-blue"
                    : "project-2 p-10 second-box-projects bg-slider-bg"
                }
              >
                <h4 className="font-bold mb-5">PIZZA PROJECT</h4>
                <div>
                  <p className="p-width-custom mb-4 font-light">
                    Bilgisayar başında karnı acıkan yazılımcılara yiyecek
                    getirmek için tasarlanmış bir web sitesi(SPA).
                  </p>
                </div>
                <div className="used-tools flex flex-wrap gap-2 mb-4">
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    react
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    router
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    tailwind
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    axios
                  </p>
                </div>
                <div className="anchor-project flex gap-6 xs:gap-3 mb-16 justify-between">
                  <a
                    href="https://github.com/keremkaramann"
                    className="font-medium"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                  <a href="" className="font-medium" target="_blank">
                    Go to App -&gt;
                  </a>
                </div>
                <div>
                  <img
                    src={comp1}
                    alt="computer-picture"
                    className="computer-picture"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center p-5 xs:p-20">
              <div
                className={
                  toggleDarkMode
                    ? "project-2 p-10 second-box-projects"
                    : "project-2 p-10 second-box-projects bg-slider-bg2"
                }
              >
                <h4 className="font-bold mb-5">PIZZA PROJECT</h4>
                <div>
                  <p className="p-width-custom mb-4 font-light">
                    Bilgisayar başında karnı acıkan yazılımcılara yiyecek
                    getirmek için tasarlanmış bir web sitesi(SPA).
                  </p>
                </div>
                <div className="used-tools flex flex-wrap gap-2 mb-4">
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    react
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    router
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    tailwind
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    axios
                  </p>
                </div>
                <div className="anchor-project flex gap-6 xs:gap-3 mb-16 justify-between">
                  <a href="" className="font-medium" target="_blank">
                    View on GitHub
                  </a>
                  <a href="" className="font-medium" target="_blank">
                    Go to App -&gt;
                  </a>
                </div>
                <div>
                  <img
                    src={comp1}
                    alt="computer-picture"
                    className="computer-picture"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center p-5 xs:p-20">
              <div
                className={
                  toggleDarkMode
                    ? "project-2 p-10 second-box-projects bg-baby-blue"
                    : "project-2 p-10 second-box-projects bg-slider-bg"
                }
              >
                <h4 className="font-bold mb-5">PIZZA PROJECT</h4>
                <div>
                  <p className="p-width-custom mb-4 font-light">
                    Bilgisayar başında karnı acıkan yazılımcılara yiyecek
                    getirmek için tasarlanmış bir web sitesi(SPA).
                  </p>
                </div>
                <div className="used-tools flex flex-wrap gap-2 mb-4">
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    react
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    router
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    tailwind
                  </p>
                  <p
                    className={
                      toggleDarkMode
                        ? "custom-tools bg-white"
                        : "bg-box-darkMode custom-tools"
                    }
                  >
                    axios
                  </p>
                </div>
                <div className="anchor-project flex gap-6 xs:gap-3 mb-16 justify-between">
                  <a href="" className="font-medium" target="_blank">
                    View on GitHub
                  </a>
                  <a href="" className="font-medium" target="_blank">
                    Go to App -&gt;
                  </a>
                </div>
                <div>
                  <img
                    src={comp1}
                    alt="computer-picture"
                    className="computer-picture"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/*  <div className="flex justify-center">
          <div className="project-2 p-10">
            <h4 className="font-bold mb-5">PIZZA PROJECT</h4>
            <div>
              <p className="p-width-custom mb-4 font-light">
                Bilgisayar başında karnı acıkan yazılımcılara yiyecek getirmek
                için tasarlanmış bir web sitesi(SPA).
              </p>
            </div>
            <div className="used-tools flex flex-wrap gap-2 mb-4">
              <p className="custom-tools">react</p>
              <p className="custom-tools">router</p>
              <p className="custom-tools">tailwind</p>
              <p className="custom-tools">axios</p>
            </div>
            <div className="anchor-project flex gap-6 mb-16 justify-between">
              <a href="" className="font-medium">
                View on GitHub
              </a>
              <a href="" className="font-medium">
                Go to App -&gt;
              </a>
            </div>
            <div>
              <img
                src={comp1}
                alt="computer-picture"
                className="computer-picture"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default ProjectSection;
