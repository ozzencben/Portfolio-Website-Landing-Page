import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import "./MainPageStyles.css";

gsap.registerPlugin(ScrollTrigger);

const MainPage = forwardRef((props, ref) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectSectionRef = useRef(null);
  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  const [selectListStyle, setSelectListStyle] = useState(false);
  const [selectGridStyle, setSelectGridStyle] = useState(true);

  const handleSelectList = () => {
    setSelectListStyle(true);
    setSelectGridStyle(false);
  };

  const handleSelectGrid = () => {
    setSelectListStyle(false);
    setSelectGridStyle(true);
  };

  const projects = {
    project1: { imgSrc: "/images/project1.png", bgColor: "#00C5C5" },
    project2: { imgSrc: "/images/project2.png", bgColor: "#FF812D" },
    project3: { imgSrc: "/images/project3.png", bgColor: "#F5C939" },
    project4: { imgSrc: "/images/project4.png", bgColor: "#CA9DFE" },
    project5: { imgSrc: "/images/project5.png", bgColor: "#7AE66A" },
    project6: { imgSrc: "/images/project6.png", bgColor: "#F897B4" },
  };

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );

    projectRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  // 🔹 Ref üzerinden dışarı scroll fonksiyonu açıyoruz
  useImperativeHandle(ref, () => ({
    scrollToSection: (section) => {
      const sectionRefs = {
        home: homeRef,
        about: aboutRef,
        projects: projectSectionRef,
        contact: contactRef,
      };
      sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <div className="mainPage-container" ref={homeRef}>
      <div className="author-name">
        <h3>ozzencben</h3>
        <p>X</p>
        <p>Frontend Developer</p>
        <MdAirlineSeatLegroomExtra
          color="#270f03"
          size={30}
          className="author-icon"
        />
      </div>

      <div className="mainpage-big-title">
        <div className="text-box">
          <h1>Professional web design to make your portfolio shine.</h1>
          <p>
            Your projects deserve to be seen. I craft modern, intuitive websites
            that highlight your portfolio.
          </p>
        </div>
        <button className="btn">
          <span>Contact Me</span>
          <div className="container">
            {/* GitHub */}
            <svg
              height="30"
              width="30"
              viewBox="0 0 16 16"
              className="icon"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33C3.73 14.91 3.42 13.78 3.42 13.78c-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.5-1.06-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.564 9.564 0 018 3.28c.85.004 1.71.115 2.51.338 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.28.24.53.72.53 1.45v2.15c0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>

            {/* LinkedIn */}
            <svg
              height="30"
              width="30"
              viewBox="0 0 448 512"
              className="icon"
              fill="currentColor"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-342a53.9 53.9 0 11.03-107.8 53.9 53.9 0 01-.03 107.8zM447.9 448h-92.68V302.4c0-34.7-12.44-58.3-43.53-58.3-23.74 0-37.89 16-44.11 31.5-2.28 5.6-2.84 13.3-2.84 21v151.4h-92.68s1.23-246.1 0-271.5h92.68v38.5c-.19.3-.45.6-.64.9h.64v-.9c12.33-19 34.38-46 83.56-46 60.98 0 106.88 39.8 106.88 125.4V448z" />
            </svg>

            {/* Upwork */}
            <svg
              height="30"
              width="30"
              viewBox="0 0 512 512"
              className="icon"
              fill="currentColor"
            >
              <path d="M472.2 32H39.8C17.9 32 0 49.9 0 71.8v368.4C0 462.1 17.9 480 39.8 480h432.4c21.9 0 39.8-17.9 39.8-39.8V71.8c0-21.9-17.9-39.8-39.8-39.8zm-272 144c0-39.8 32.2-72 72-72s72 32.2 72 72-32.2 72-72 72-72-32.2-72-72zm-64 224c-35.3 0-64-28.7-64-64s28.7-64 64-64h192c35.3 0 64 28.7 64 64s-28.7 64-64 64H136z" />
            </svg>
          </div>
        </button>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="about-container">
        <img src="/images/avatar.png" alt="avatar-img" className="avatar-img" />
        <p>We show your profile picture to your visitors</p>
        <h2>We will do something about you and your work</h2>
        <p>
          “I’m a frontend developer focused on creating modern and user-friendly
          web interfaces. In my portfolio, you’ll find projects where I combine
          creative ideas with functional and aesthetic designs. In this section,
          you’ll get to know more about who I am, the technologies I work with,
          and the projects I’ve developed so far.”
        </p>
      </div>

      {/* Project Section */}
      <div ref={projectSectionRef} className="project-container">
        <div className="project-paragraph">
          <h2>We exhibit your projects</h2>
        </div>

        <div className="card-styles-container">
          <div
            onClick={handleSelectList}
            className={`span-item ${selectListStyle ? "active" : ""}`}
          >
            <span>List</span>
          </div>
          <div
            onClick={handleSelectGrid}
            className={`span-item ${selectGridStyle ? "active" : ""}`}
          >
            <span>Grid</span>
          </div>
        </div>

        <div
          className={
            selectGridStyle
              ? "project-container-grid"
              : "project-container-list"
          }
        >
          {Object.entries(projects).map(([key, { imgSrc, bgColor }], index) => (
            <div
              className="project-card-item"
              key={key}
              ref={(el) => (projectRefs.current[index] = el)}
              style={{ backgroundColor: bgColor }}
            >
              <img src={imgSrc} alt={key} className="project-img" />
              <div className="project-title">
                <div>
                  <span>example</span>
                </div>
                <div className="project-name">
                  <div>
                    <span>project</span>
                  </div>
                  <div className="project-number">
                    <span>{key.replace("project", "")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="contact-container">
        <h2>We enable your visitors to contact you</h2>
        <p>
          “We share their social media accounts to show what kind of person they
          are and what their future projects will be.”
        </p>
        <div className="contact-icons">
          <FaGithub className="icon" />
          <FaXTwitter className="icon" />
          <FaUpwork className="icon" />
          <FaLinkedinIn className="icon" />
          <FaInstagram className="icon" />
        </div>
        <p>yourmail@example.com</p>
      </div>
    </div>
  );
});

export default MainPage;
