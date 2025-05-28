import { ArrowRight, ArrowDownToLine} from 'lucide-react';

const ActionButtons = () => {
    return (
      <div className="flex items-center justify-center md:justify-start gap-3 mt-6 ">
        <button className="bg-sage-medium cursor-pointer text-cream px-4 py-2 rounded-md text-sm hover:bg-sage-dark flex items-center gap-1 transition-all duration-300 hover:scale-105">
          contact me <ArrowRight size={14} className="text-cream" />
        </button>
        <button className="cursor-pointer border border-sage-medium text-sage-dark px-4 py-2 rounded-md text-sm flex items-center gap-1 transition-all duration-300 hover:scale-105">
          my resume <ArrowDownToLine size={14} className="text-sage-dark" />
        </button>
      </div>
    );
  };

export default ActionButtons;