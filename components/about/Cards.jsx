import React from "react";
import { GraduationCap, Code, Wrench } from 'lucide-react'

const Cards = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6 md:mb-6">
      <div className="bg-cream rounded-xl p-4 md:p-6 border-sage-medium border-2 shadow-sm mb-4 transition-all duration-300 hover:scale-102">
        <div className="flex justify-center md:justify-start mb-4 md:mb-6">
          <GraduationCap size={28} className="text-sage-medium" />
        </div>

        <div className="text-center md:text-left">
          <h3 className="hidden md:inline font-semibold text-sage-dark mb-2 md:mb-3">
            Education
          </h3>
          <p className="text-sage-dark font-medium text-sm">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-sage-dark text-xs italic">(CUM LAUDE 2025)</p>
        </div>
      </div>

      <div className="bg-cream rounded-xl p-4 md:p-6 border-sage-medium border-2 shadow-sm mb-4 transition-all duration-300 hover:scale-102">
        <div className="flex justify-center md:justify-start mb-4 md:mb-6">
          <Code size={28} className="text-sage-medium" />
        </div>

        <div className="text-center md:text-left">
          <h3 className="hidden md:inline font-semibold text-sage-dark mb-2 md:mb-3">
            Languages
          </h3>
          <p className="text-sage-dark text-sm">
            C, C#, PHP, Python, HTML/CSS, R, Java, JavaScript, ...
          </p>
        </div>
      </div>

      <div className="bg-cream rounded-xl p-4 md:p-6 border-sage-medium border-2 shadow-sm mb-4 transition-all duration-300 hover:scale-102">
        <div className="flex justify-center md:justify-start mb-4 md:mb-6">
          <Wrench size={28} className="text-sage-medium" />
        </div>

        <div className="text-center md:text-left">
          <h3 className="hidden md:inline font-semibold text-sage-dark mb-2 md:mb-3">
            Software/Tools
          </h3>
          <p className="text-sage-dark text-sm">
            VS Code, Git, Google Colab, Figma, Jira, Clip Studio Paint, ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
