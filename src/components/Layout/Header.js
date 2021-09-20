import styles from "./Header.module.css";
import HeaderDescription from "./HeaderDescription";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
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
        < HeaderDescription />
      </header>
    </>
  );
};

export default Header;
