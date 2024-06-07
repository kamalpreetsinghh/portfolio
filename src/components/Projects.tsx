import { projects } from "../data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="py-8 md:py-16" id="projects">
      <h1 className="heading pb-6 md:pb-2">
        A small selection of <br className="md:hidden" />
        <span className="text-purple-600 dark:text-purple">
          recent projects
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-16">
        {projects.map(({ id, title, des, img, iconLists, link, url }) => (
          <div
            className="sm:h-[41rem] h-[32rem] sm:w-[570px] w-[80vw]"
            key={id}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <PinContainer title={link} className="">
                <div
                  className="relative flex items-center justify-center sm:w-[570px] w-[80vw] 
                overflow-hidden sm:h-[40vh] h-[30vh] mb-10"
                >
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>

                <p className="pt-2 lg:text-lg lg:font-normal font-light text-sm line-clamp-2 text-gray-600 dark:text-gray-400">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-violet-500/[0.2] dark:border-white/[.2] rounded-full bg-violet-200 dark:bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-600 dark:text-purple">
                      Check Website
                    </p>
                    <div className="text-purple-600 dark:text-purple">
                      <FaLocationArrow className="ms-3" />
                    </div>
                  </div>
                </div>
              </PinContainer>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
