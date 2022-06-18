import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4 className={styles.title}>iCoder</h4>
          <p className={styles.description}>
            A blog for developers to learn new frameworks and technologies.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.internalLinks}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.externalLinks}>
            <ul>
              <li>
                <Link href="/">Instagram</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
              <li>
                <Link href="/">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
