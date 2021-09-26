import styles from "./About.module.css";
import Navbar from "../../components/Layout/Navbar";
import javascript from "../../assets/icons-technologies/javascript.svg";
import react from "../../assets/icons-technologies/react.svg";
import bootstrap from "../../assets/icons-technologies/bootstrap.svg";
import sass from "../../assets/icons-technologies/sass.svg";
import figma from "../../assets/icons-technologies/figma.svg";
import cssModules from "../../assets/icons-technologies/css-modules.svg";
import vsCode from "../../assets/icons-technologies/VSCode.svg";
import npm from "../../assets/icons-technologies/npm.svg";
import github from "../../assets/icons-technologies/github.svg";

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <Navbar />
        <div className={styles.wrapper}>
          <div className={styles["about-top"]}>
            <h2 className={styles.header}> About Me</h2>
            <div className={styles.description}>
              <p>
                {" "}
                I'm a Junior Frontend Developer with patience for details. I've
                been interested in Web Development for few years. I've already
                made few websites for friends and a running group from my
                hometown. Since few months I decided to intensify my learning of
                frontend technologies.{" "}
              </p>
              <p>
                I'm self-taught developer. My main source of knowledge are
                documentations, tutorials and courses. I have taken courses
                created by Maximilian Schwarzmüller, Colt Steele, Jonas
                Schmedtmann. I like to watch video tutorials on youtube from
                Kevin Powell, Web Dev Simplified.
              </p>
              <p>
                You can find my projects on Projects section and check them out
                on my{" "}
                <a
                  className={styles["gh-link"]}
                  href="https://github.com/The-Krd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
              <p></p>
            </div>
          </div>
          <div className={styles["about-bottom"]}>
            <h2 className={styles.header}>Technologies Used</h2>
            <img
              className={styles["icon-technology"]}
              src={javascript}
              alt="javascript"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={react}
              alt="react"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={npm}
              alt="npm"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={github}
              alt="github"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={sass}
              alt="sass"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={vsCode}
              alt="vs-code"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={figma}
              alt="figma"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={cssModules}
              alt="css - modules"
            ></img>
            <img
              className={styles["icon-technology"]}
              src={bootstrap}
              alt="bootstrap"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
