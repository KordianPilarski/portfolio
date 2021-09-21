import styles from "./Navbar.module.css";
import Hamburger from "../../assets/hamburger";
import XMark from "../../assets/xMark";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };
  const handleHideMibileMenu = () => {
    setShowMobileMenu(false);
  };

  const listStyles = `${styles.list} ${showMobileMenu && styles["show-menu"]}`
  
  return (
    <nav className={styles.navbar}>
      {!showMobileMenu && <Hamburger handleShowMobileMenu={handleShowMobileMenu}/> }
      {showMobileMenu && <XMark handleHideMibileMenu={handleHideMibileMenu} /> }
      <ul className={listStyles}>
        <li className={styles.item}>
          <a href="#">about me</a>
        </li>
        <li className={styles.item}>
          <div className={styles.dropdown}>
            <a href="#">projects</a>
            <ul className={styles["dropdown-menu"]}>
              <li className={styles.item}>
                <a href="#">take a dog for a walk</a>
              </li>
              <li className={styles.item}>
                <a href="#">payment manager</a>
              </li>
              <li className={styles.item}>
                <a href="#">expenses app</a>
              </li>
            </ul>
          </div>
        </li>
        <li className={styles.item}>
          <a href="#">resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
