import styles from "./Header.module.css";
import HeaderDescription from "./HeaderDescription";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        < Navbar />
        <HeaderLogo/>
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

export default Header;
