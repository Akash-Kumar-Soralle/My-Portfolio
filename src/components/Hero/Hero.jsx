import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akash Soralle</h1>
        <p className={styles.description}>
           I’m a Software Engineer with 4+ years of experience developing cloud-based enterprise solutions at Deloitte, Accenture, and Volvo. 
           I specialize in Java, Python, and React for scalable application design, and excel at building Power BI dashboards that translate complex data into actionable business insights. 
           Passionate about bridging technology and strategy, I create systems that improve efficiency, decision-making, and user experience.
        </p>

        {/* ✅ Button Group Section */}
        <div className={styles.buttonGroup}>
          <a href="#contact" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="/Akash_SoftwareEngineer_Resume.pdf"
            download="Akash_SoftwareEngineer_Resume.pdf"
            className={styles.resumeBtn}
          >
            My Resume
          </a>
        </div>
      </div>

      {/* ✅ Hero Image */}
      <img
        src={getImageUrl("hero/akashphoto.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      {/* ✅ Background Blur Effects */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
