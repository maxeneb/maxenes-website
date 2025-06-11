import React from "react";
import Slider from "react-slick";
import SimpleSlider from "./Slider";

const WorkPage = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 mt-5">
      <div className="text-center mb-4 md:mb-6 px-4 md:px-0">
        <h2 className="text-xl md:text-2xl font-bold text-sage-dark mb-2">
          Projects
        </h2>
        <p className="text-sage-dark text-sm md:text-base leading-relaxed">
          A showcase of my recent work and creative solutions
        </p>
      </div>
      <div className="w-full px-4 md:px-0">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default WorkPage;