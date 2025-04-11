import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import logo from "../assets/compLogo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h1 className={styles.appscrip}>LOGO</h1>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.icons}>
            <CiSearch />
            <CiHeart />
            <IoBagRemoveOutline />
            <CiUser />
            <select name="" id="">
              <option value="English">ENG</option>
              <option value="Hindi">HIN</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.navbarContainer2}>
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
