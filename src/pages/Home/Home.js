import styles from "./Home.module.css";
import HeaderDescription from "./HeaderDescription";
import HeaderLogo from "./HeaderLogo";
import Navbar from "../../components/Layout/Navbar";

const Home = (props) => {
  return (
    <>
      <header>
        < Navbar />
        <HeaderLogo />
        <div className={styles["main-image"]}>
          {/* <img
            alt="header no mans sky"
            src={headerImage}
          /> */}
        </div>
        < HeaderDescription />
      </header>
    </>
  );
};

export default Home;
