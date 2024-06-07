import { useState } from "react";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GridGlobe } from "./GridGlobe";
import { IoCopyOutline } from "react-icons/io5";
import Button from "../Button";
import Lottie from "react-lottie";
import animationData from "../../data/confetti.json";
import { Meteors } from "./Meteors";
import BallCanvas from "../Ball";
import { SparklesCore } from "./Sparkles";
import { cn } from "../../utils/cn";
import { skills } from "../../data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "kamalpreetsingh025@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 text-white flex flex-col p-5 lg:p-8"
          )}
        >
          {description && (
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
          )}

          <div
            className={`font-sans text-lg lg:text-3xl max-w-[450px] font-bold z-10`}
          >
            {title}
            {id === 4 && (
              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-x-14 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="absolute inset-x-14 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                  <div className="absolute inset-x-36 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="absolute inset-x-36 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                </div>
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full"
                  particleColor="#818cf8"
                />
              </div>
            )}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex flex-wrap justify-between mt-2">
              {skills.map(({ icon }) => (
                <div key={icon} className="w-1/5">
                  <BallCanvas icon={icon} key={icon} />
                </div>
              ))}
              <Meteors number={10} />
            </div>
          )}

          {id === 6 && (
            <div className="mt-6 md:mt-1 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <Button
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                onClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};