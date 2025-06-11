import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Link, Github } from "lucide-react";
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
      category: "Web Development, Adaptive Testing, Content Balancing, Retrieval Augmented Generation",
      description:
        "A smart review platform designed to assist students through personalized content delivery, which dynamically selects questions based on the student's ability level using 2-parameter logistic model achieving 0.29 Standard Error of Measurement.",
      tech: ["React", "Laravel", "Inertia.js", "FastAPI", "MySQL", "Docker"],
      image:
        "./images/work-topit.jpg",
      githubUrl: "https://github.com/maxeneb/TopIT-Inertia-React",
      otherUrl: "https://drive.google.com/file/d/1ZFeokFV7XNo1v1gxT4N94vyEsyhv8pje/view?usp=sharing"
    },
    {
      id: 2,
      title: "SpeakUp",
      category: "Web Development, Mobile Development, Speech Recognition",
      description:
        "Developed the front-end of the web-app that supports children with speech delays for Hackathon which we won 2nd Runner Up. This is designed to provide a tailored approach to speech therapy through word pronunciation exercises.",
      tech: ["Angular", "Laravel", "MySQL", "Flutter"],
      image:
        "./images/work-speakup.jpg",
      githubUrl: "https://www.behance.net/gallery/196543951/SpeakUp-Web-Mobile-Based-Application",
      otherUrl: "https://www.canva.com/design/DAGCx4Jnx0k/IhwFb7V-sEO-4M7Nc9e2Qg/edit?utm_content=DAGCx4Jnx0k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      id: 3,
      title: "DigiAI",
      category: "Graphics and Visual Computing, Web Development, Web Scraping, Transfer Learning",
      description:
        "Leveraged transfer learning with MobileNetV2 to build an AI artwork classifier model, achieving 91.7% accuracy and integrated it in a full-stack web application. Dataset is scraped from art-focused SubReddits. ",
      tech: ["Django REST", "Angular", "MySQL", "TensorFlow"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/maxeneb/DigiAI-Django",
      otherUrl: "https://github.com/maxeneb/DigiAI-Angular"
    },
    {
      id: 4,
      title: "BizExpense",
      category: "Project Management, Agile, Web Development, Model-View-Controller",
      description:
        "Developed a full-stack expense tracker app as part of the JumpStart program. I was responsible for the Expense Management module, implementing complete CRUD, filter by date-range and categories, and other features to meet the user requirements given.",
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
        "Developed a relational CRUD-based university management system in vanilla PHP to handle student, college, and program records from the database given by the department. Implemented entity relationships and user operations without relying on any frameworks. ",
      tech: ["PHP", "HTML/CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/maxeneb/University-Management-System",
    },
    {
      id: 6,
      title: "NotiFire",
      category: "Human and Computer Interaction, UI/UX Design, Mobile Case Study",
      description:
        "A mobile case study focused on UI/UX design for a fire emergency app, featuring a one-tap alert system to ensure faster firefighter response. I was responsible for layout organization, color harmony, and overall user experience design.",
      tech: ["Figma"],
      image:
        "./images/work-notifire.jpg",
      otherUrl: "https://www.figma.com/proto/AueDAwpFR27yAsp5oNEp7Z/NotiFire?type=design&node-id=118-245&t=igtiD9k1VnhTOb6q-1&scaling=scale-down&page-id=115%253A8&starting-point-node-id=118%253A245",
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

        .slick-slide > div {
          height: 100%;
        }

        .slick-track {
          display: flex;
          align-items: stretch;
        }

        .slick-slide {
          height: auto;
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
          <div key={project.id} className="h-full">
            <div className="flex flex-col md:grid md:grid-cols-2 bg-cream min-h-[400px] md:min-h-[450px] h-full">
              {/* Image Section */}
              <div className="relative h-48 md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-500/60 to-gray-400/10" />

                {/* Slide Number */}
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-30">
                  <span className="text-xl md:text-2xl font-bold text-cream">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Github Link */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 flex gap-2 z-30">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 md:p-2 bg-sage-medium text-cream hover:bg-sage-dark transition duration-200 hover:scale-110 border border-sage-medium rounded-full"
                      title="View Code"
                    >
                      <Github size={16} className="md:w-[18px] md:h-[18px]" />
                    </a>
                  )}
                  {project.otherUrl && (
                    <a
                      href={project.otherUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 md:p-2 bg-sage-medium text-cream hover:bg-sage-dark transition duration-200 hover:scale-110 border border-sage-medium rounded-full"
                      title="More Details"
                    >
                      <Link size={16} className="md:w-[18px] md:h-[18px]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-6 lg:p-10 flex flex-col justify-center relative h-full">
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