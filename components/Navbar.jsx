import React from "react";
import Link from "next/Link";
import styles from "../styles/Nav.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
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
    </nav>
  );
};

export default Navbar;
