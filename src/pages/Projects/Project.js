import styles from "./Project.module.css";
import Button from "../../components/UI/Button";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <div className={styles.wrapper}>

      <h2 className={styles.name}>{props.name}</h2>
      <div className={styles["project-about"]}>
        <div>
          <h4 className={styles["secondary-heading"]}>About</h4>
          <p>{props.description}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles["used-technologies"]}>
            <h4 className={styles["secondary-heading"]}>Used technologies</h4>
            <p>{props.usedTechnologies}</p>
          </div>
          <Button class={styles["project-button"]} href={props.live}>
            <span>live version</span>{" "}
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Project;
