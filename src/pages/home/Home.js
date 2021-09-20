import headerImage from "../../assets/Slice 2.jpg";
import styles from "./Home.module.css";
import HeaderLogo from "../../components/Layout/HeaderLogo";

const Home = () => {
  return (
    <>
      <header>
        <div className="logo"><HeaderLogo/></div>
        <div className={styles["main-image"]}>
          {/* <img
            alt="header no mans sky"
            src={headerImage}
          /> */}
        </div>
      </header>
    </>
  );
};

export default Home;
