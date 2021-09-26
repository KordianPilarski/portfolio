import styles from "./HeaderDescription.module.css";

const HeaderDescription = () => {
  return (
    <div className={styles["header-description"]}>
      <h1>Junior Frontend Developer</h1>
      <p>
        <span className={styles.specify}>Hello!</span> I'm{" "}
        <span className={styles.specify}>K</span>ordian{" "}
        <span className={styles.specify}>P</span>ilarski.
      </p>
      <p>
        I'm a self-taught Junior Frontend Developer with patience for details.
      </p>
      <p>
        Check <span className={styles.specify}>about</span> and <span className={styles.specify}>projects</span> for more.
      </p>
    </div>
  );
};

export default HeaderDescription;
