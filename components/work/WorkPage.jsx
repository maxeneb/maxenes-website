import React from "react";
import Slider from "react-slick";
import SimpleSlider from "./Slider";

const WorkPage = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-sage-dark mb-2">
          Projects
        </h2>
        <p className="text-sage-dark text-base">A showcase of my recent work and creative solutions</p>
      </div>
      <SimpleSlider />
    </div>
  );
};

export default WorkPage;
