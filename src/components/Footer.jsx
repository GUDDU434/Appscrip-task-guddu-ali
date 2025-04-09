import React from "react";
import styles from "./Footer.module.css";
import currencyLogo from "../assets/Language.png";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import gpay from "../assets/gpay.png";
import mastercard from "../assets/mastercard.png";
import paypal from "../assets/paypal.png";
import dpay from "../assets/dpay.png";
import applepay from "../assets/applepay.png";
import amex from "../assets/amex.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.subscribeContainer}>
          <p>BE THE FIRST TO KNOW</p>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactContainer}>
          <p>CONTACT US</p>
          <p>+44 221 133 5360</p>
          <p>5tH4H@example.com</p>
          <p>CURRENCY</p>
          <div>
            <img src={currencyLogo} alt="" />
          </div>
          <p className={styles.currencyText}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className={styles.footer2}>
        <div>
          <p className={styles.footer2Title}>mettā muse</p>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div>
          <p className={styles.footer2Title}>Quick Links</p>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p className={styles.footer2Title}>Follow Us</p>
          <div className={styles.socialIcons}>
            <div>
              <FaInstagram />
            </div>
            <div>
              <RiLinkedinFill />
            </div>
          </div>
          <p className={styles.footer2Title}>mettā muse Accepts</p>

          <div className={styles.socialLogos}>
            <img src={gpay} alt="G-pay logo" />
            <img src={mastercard} alt="mastercard logo" />
            <img src={paypal} alt="paypal logo" />
            <img src={applepay} alt="applepay logo" />
            <img src={amex} alt="amex logo" />
            <img src={dpay} alt="dpay logo" />
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright © {new Date().getFullYear()} mettamuse. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
