import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/AboutAkash.png.jpg")}
          alt="Me Standing"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I develop modern, user-friendly interfaces with React, JavaScript, and HTML/CSS.Every design choice aims to balance clarity, speed, and accessibility.My goal is to craft frontends that leave a lasting, effortless impression.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I build reliable and scalable back-end systems using Java (Spring Boot) and Python.
My work focuses on designing RESTful APIs, microservices, and data-driven solutions on Azure.
I enjoy turning complex processes into clean, efficient architectures that just work.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Visualization & Analytics</h3>
              <p>
                I design intuitive dashboards and reports using Power BI and Azure Data Factory.
My focus is on transforming raw data through ETL/ELT pipelines into clear, actionable insights.
I love turning complex business data into visuals that tell a meaningful story.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
