import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  const educationList = [
    {
      imageSrc: "education/uhaven.png", // place inside public/education/
      degree: "M.S. in Business Analytics",
      institution: "University of New Haven, CT",
      gpa: "GPA: 3.83 / 4.00",
      duration: "Aug 2023 – May 2025",
    },
    {
      imageSrc: "education/btech.png",
      degree: "B.Tech in Electrical & Electronics Engineering",
      institution: "India",
      gpa: "GPA: 8.07 / 10",
      duration: "July 2018 – July 2022",
    },
  ];

  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>

      <div className={styles.content}>
        <ul className={styles.educationList}>
          {educationList.map((edu, id) => (
            <li key={id} className={styles.educationItem}>
              <div className={styles.educationImageContainer}>
                <img
                  src={getImageUrl(edu.imageSrc)}
                  alt={`${edu.institution} logo`}
                />
              </div>

              <div className={styles.educationDetails}>
                <h3>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.gpa}>{edu.gpa}</p>
                <p className={styles.duration}>{edu.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
