import styles from "./Navbar.module.css";
import Hamburger from "../../assets/hamburger";
import XMark from "../../assets/xMark";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };
  const handleHideMibileMenu = () => {
    setShowMobileMenu(false);
  };

  const listStyles = `${styles.list} ${showMobileMenu && styles["show-menu"]} ${
    props.class
  }`;

  return (
    <nav className={styles.navbar}>
      {!showMobileMenu && (
        <Hamburger handleShowMobileMenu={handleShowMobileMenu} />
      )}
      {showMobileMenu && <XMark handleHideMibileMenu={handleHideMibileMenu} />}
      <ul className={listStyles}>
        <li className={styles.item}>
          <Link to="/">home</Link>
          {/* <a href="#">about me</a> */}
        </li>
        <li className={styles.item}>
          <Link to="/about">about me</Link>
          {/* <a href="#">about me</a> */}
        </li>
        <li className={styles.item}>
          <div className={styles.dropdown}>
            <Link to="/projects">projects</Link>
            {/* <a href="#">projects</a> */}
            {/* <ul className={styles["dropdown-menu"]}>
              <li className={styles.item}>
                <a href="#">take a dog for a walk</a>
              </li>
              <li className={styles.item}>
                <a href="#">payment manager</a>
              </li>
              <li className={styles.item}>
                <a href="#">expenses app</a>
              </li>
            </ul> */}
          </div>
        </li>
        <li className={styles.item}>
          <a
            href="https://drive.google.com/file/d/1OJ0dTCEyX_GIcL3gWkvRyshwFNkkj004/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>

        </li>
      </ul>
    </nav>
  );
};

export default Navbar;