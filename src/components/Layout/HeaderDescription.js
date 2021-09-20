import Button from "../UI/Button";
import styles from "./HeaderDescription.module.css";

const HeaderDescription = () => {
  return (
    <div className={styles["header-description"]}>
      <h1>Junior Frontend Developer</h1>
      <p>
        <span className={styles.specify}>Hello!</span> I'm <span className={styles.specify}>K</span>ordian <span className={styles.specify}>P</span>ilarski. 
      </p>
      <p><Button>Check out</Button> more about me</p>
    </div>
  );
};

export default HeaderDescription;
