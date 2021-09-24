import styles from "./Project.module.css";
import Button from "../../components/UI/Button";
import arrow from "../../assets/fast-forward.svg";

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
          <div>
            <h4 className={styles["secondary-heading"]}>Used technologies</h4>
            <p>{props.usedTechnologies}</p>
          </div>
          <Button class={styles["project-button"]} href={props.live}>
            <span>live version</span>{" "}
            <img className={styles.svg} src={arrow} alt="arrow" />
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Project;
