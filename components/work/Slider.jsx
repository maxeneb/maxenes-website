import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import { playClickSoundLow } from '../../utils/playClickSound';

const ProjectSlider = () => {
  function NextArrow({ onClick }) {
    return (
      <button
        onClick={() => {
            onClick(),
            playClickSoundLow()}
          }
        className="cursor-pointer absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 md:p-2 bg-sage-dark/20 text-sage-dark hover:bg-sage-medium hover:text-cream border border-sage-medium rounded-full backdrop-blur-sm transition duration-200 hover:scale-110"
      >
        <ChevronRight size={16} className="md:w-5 md:h-5" />
      </button>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={() => {
            onClick(),
            playClickSoundLow()}
          }
        className="cursor-pointer absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-1.5 md:p-2 bg-sage-dark/20 text-sage-light hover:bg-sage-medium hover:text-cream border border-sage-medium rounded-full backdrop-blur-sm transition duration-200 hover:scale-110"
      >
        <ChevronLeft size={16} className="md:w-5 md:h-5" />
      </button>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "custom-dots",
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          fade: false,
          cssEase: "ease-in-out"
        }
      }
    ]
  };

  const projects = [
    {
      id: 1,
      title: "TopIT",
      category: "Web Development, Adaptive Testing, Retrieval Augmented Generation, Difficulty Estimation",
      description:
        "A smart review platform designed to assist students through personalized content delivery, which dynamically selects questions based on the student's ability level.",
      tech: ["React", "Laravel", "Inertia.js", "FastAPI", "MySQL"],
      image:
        "./images/work-topit.jpg",
      githubUrl: "https://github.com/maxeneb/TopIT-Inertia-React",
    },
    {
      id: 2,
      title: "SpeakUp",
      category: "Hackathon (won 2nd Runner Up), Web and Mobile Development",
      description:
        "Designed to support children with speech delay by offering a personalized approach to speech therapy, guiding children through exercises that help them pronounce specific words correctly.",
      tech: ["Angular", "Laravel", "MySQL", "Flutter"],
      image:
        "./images/work-speakup.jpg",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "DigiAI",
      category: "Graphics and Visual Computing, Web Development, Web Scraping, Transfer Learning",
      description:
        "This personal project addresses the need for assessing and certifying AI-generated artworks, which face issues concerning authenticity and authorship achieving 92% accuracy.",
      tech: ["Django REST", "Angular", "MySQL", "TensorFlow"],
      image:
        "./images/work-digiai.jpg",
      githubUrl: "https://github.com/maxeneb/DigiAI-Django",
    },
    {
      id: 4,
      title: "BizExpense",
      category: "Web Development, MVC",
      description:
        "An expense tracker app developed during JumpStart program. Users can CRUD expenses and categorize them, view data from dashboard, do report analysis, and configure profile.",
      tech: ["C#", "ASP.Net", "HTML/CSS", "JavaScript"],
      image:
        "./images/work-bizexpense.jpg",
      githubUrl: "https://github.com/maxeneb/BizExpense",
    },
    {
      id: 5,
      title: "University Management System",
      category: "Web Development",
      description:
        "This is a project from our class wherein we're provided a database offered by the university. Our task is to create a system that uses CRUD to students, colleges, and programs with these entities related to one another.",
      tech: ["PHP", "HTML/CSS", "JavaScript"],
      image:
        "./images/work-univ.jpg",
      githubUrl: "https://github.com/maxeneb/University-Management-System",
    },
    {
      id: 6,
      title: "NotiFire",
      category: "Human and Computer Interaction, UI/UX Design, Mobile Case Study",
      description:
        "A fire emergency app that addresses designed to provide a reliable and immediate alert system with just a single tap, ensuring quicker response times from firefighters.",
      tech: ["Figma"],
      image:
        "./images/work-notifire.jpg",
      githubUrl: "https://www.figma.com/proto/AueDAwpFR27yAsp5oNEp7Z/NotiFire?type=design&node-id=118-245&t=igtiD9k1VnhTOb6q-1&scaling=scale-down&page-id=115%253A8&starting-point-node-id=118%253A245",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-2 md:px-4">
      <style jsx global>{`
        .slick-list {
          border-radius: 0.5rem;
          overflow: hidden;
          border: 2px solid var(--sage-medium);
        }
        
        @media (min-width: 768px) {
          .slick-list {
            border-radius: 1rem;
          }
        }

        .custom-dots {
          display: flex !important;
          justify-content: center !important;
          gap: 0.5rem !important;
          margin-top: 0.75rem !important;
        }
        
        @media (min-width: 768px) {
          .custom-dots {
            gap: 0.75rem !important;
            margin-top: 1rem !important;
          }
        }

        .custom-dots li button {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cream);
          opacity: 0.6;
          border: none;
          transition: all 0.3s ease;
          font-size: 0;
        }
        
        @media (min-width: 768px) {
          .custom-dots li button {
            width: 10px;
            height: 10px;
          }
        }

        .custom-dots li.slick-active button {
          background: var(--sage-dark);
          opacity: 1;
          transform: scale(1.3);
        }

        .custom-dots li button:before {
          content: "" !important;
          display: none !important;
        }
      `}</style>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={project.id}>
            <div className="flex flex-col md:grid md:grid-cols-2 bg-cream min-h-[400px] md:min-h-[450px]">
              {/* Image Section */}
              <div className="relative h-48 md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/60 to-sage-light/10" />

                {/* Slide Number */}
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-30">
                  <span className="text-xl md:text-2xl font-bold text-cream">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Github Link - moved to image section for mobile */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 flex gap-2 z-30">
                  <a
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 md:p-2 bg-sage-medium text-cream hover:bg-sage-dark transition duration-200 hover:scale-110 border border-sage-medium rounded-full"
                    title="View Code"
                  >
                    <Github size={16} className="md:w-[18px] md:h-[18px]" />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-6 lg:p-10 flex flex-col justify-center relative">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center md:text-start text-sage-dark mb-10 md:mb-3">
                  {project.title}
                </h3>
                <p className="text-sage-dark text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sage-medium text-xs md:text-sm mb-4 md:mb-6">
                  {project.category}
                </p>

                <div>
                  <h4 className="text-xs md:text-sm font-semibold text-sage-dark mb-2 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 md:px-3 bg-sage-light/30 text-sage-dark rounded-full text-xs md:text-sm font-medium border border-sage-medium/30 transition duration-300 hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;