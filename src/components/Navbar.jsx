import React, { useState } from "react";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/compLogo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.leftSection}>
          <RxHamburgerMenu
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          <img src={logo} alt="logo" className={styles.logoImg} />
        </div>

        <div className={styles.appscrip}>LOGO</div>

        <div className={styles.rightIcons}>
          <CiSearch />
          <CiHeart />
          <IoBagRemoveOutline />
        </div>
      </div>

      <div
        className={`${styles.navbarContainer2} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </div>
    </>
  );
};

export default Navbar;
