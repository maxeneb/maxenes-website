import { ArrowRight, ArrowDownToLine } from "lucide-react";
import { playClickSoundLow } from "../../utils/playClickSound";

const ActionButtons = () => {
  const handleContactClick = () => {
    playClickSoundLow();
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=maxenenborces@gmail.com&su=Portfolio Contact&body=Hi Max, I would like to get in touch with you.",
      "_blank"
    );
  };

  const handleResumeClick = () => {
    playClickSoundLow();
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-6 ">
      <button
        onClick={handleContactClick}
        className="bg-sage-medium cursor-pointer text-cream px-4 py-2 rounded-md text-sm hover:bg-sage-dark flex items-center gap-1 transition-all duration-300 hover:scale-105"
      >
        contact me <ArrowRight size={14} className="text-cream" />
      </button>

      <a
        href="/maxeneborces-resume.pdf"
        download
        onClick={handleResumeClick}
        className="cursor-pointer border border-sage-medium text-sage-dark px-4 py-2 rounded-md text-sm flex items-center gap-1 transition-all duration-300 hover:scale-105"
      >
        my resume <ArrowDownToLine size={14} className="text-sage-dark" />
      </a>
    </div>
  );
};

export default ActionButtons;
