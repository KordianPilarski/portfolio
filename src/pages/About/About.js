import styles from "./About.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";

const About = () => {
  return (
    <>
    <section className={styles.about}>
        < Navbar />

      {/* <div>about</div> */}

      <Link to="/">Home</Link>

    </section>
    </>
  );
};

export default About;
