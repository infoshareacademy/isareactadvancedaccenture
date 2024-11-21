import styles from "./SiteHeader.module.css";

export const SiteHeader = () => (
  <header className={styles["site-header"]}>
    <div className={styles.container}>
      <h1 className={styles.logo}>Cahee</h1>
      <nav className={styles.nav}>
        <ul className={styles.nav__menu}>
          <li
            className={`${styles["nav__menu-item"]} ${styles["nav__menu-item-active"]}`}
          >
            <a
              className={(styles["nav__menu-a"], styles["nav__menu--active"])}
              href="#"
            >
              Home
            </a>
          </li>
          <li className={styles["nav__menu-item"]}>
            <a className={styles["nav__menu-a"]} href="#about">
              About
            </a>
          </li>
          <li className={styles["nav__menu-item"]}>
            <a className={styles["nav__menu-a"]} href="#services">
              Services
            </a>
          </li>
          <li className={styles["nav__menu-item"]}>
            <a className={styles["nav__menu-a"]} href="#gallery">
              Gallery
            </a>
          </li>
          <li className={styles["nav__menu-item"]}>
            <a className={styles["nav__menu-a"]} href="#blog">
              Blog
            </a>
          </li>
          <li className={styles["nav__menu-item"]}>
            <a className={styles["nav__menu-a"]} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
