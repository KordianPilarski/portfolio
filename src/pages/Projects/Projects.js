import styles from "./Projects.module.css";
import Project from "./Project";
import Navbar from "../../components/Layout/Navbar";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Take a Dog for a walk",
      description: "An React app where you can arrange to walk a dog. I fetched external API by Axios. In app you can filter dogs list by name, description and weight. You can choose date and lenght of the walk and add it to Your Walks cart.",
      usedTechnologies:
        "React, Hooks, Axios, Context API, React-DateTime-Picker, CSS Modules. ",
      live: "https://github.com/The-Krd/Take-A-Dog-For-A-Walk",
    },
    {
      id: 2,
      name: "Take a Dog for a walk",
      description: "An React app where you can arrange to walk a dog",
      usedTechnologies:
        "React, hooks, Context API, React-DateTime-Picker, CSS Modules",
      live: "https://github.com/The-Krd/Take-A-Dog-For-A-Walk",
    },
    {
      id: 3,
      name: "Expenses App",
      description: "Just another expenses app ;) You can add them, filter by year and see them at the bottom.",
      usedTechnologies: "React, Hooks",
      live: "https://the-krd.github.io/ExpensesApp/",
    },
    {
      id: 4,
      name: "soon",
      description: "--",
      usedTechnologies: "--",
      live: "#",
    },
  ];
  return (
    <>
      <section className={styles.projects}>
        <Navbar class={styles["projects-navbar"]}/>
        <div className={styles["projects-wrapper"]}>
          {projects.map((project) => (
            <Project
              key={project.id}
              name={project.name}
              description={project.description}
              usedTechnologies={project.usedTechnologies}
              live={project.live}
            />
          ))}
          {/* <Project /> */}
        </div>
      </section>
    </>
  );
};

export default Projects;
