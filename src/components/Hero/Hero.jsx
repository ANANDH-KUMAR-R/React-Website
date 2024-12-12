import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anandh </h1>
        <p className={styles.description}>
          I'm a motivated full-stack developer with skills in React, Node.js, Express, and MongoDB
          , eager to apply my knowledge and grow in the field. Reach out if you'd like to know more!
        </p>
        <a href="mailto:anandh20201@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/img.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
