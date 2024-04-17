import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './About.module.css'

export const About =  () => {
    return(
        <section className={styles.container} id ="About">
            <h2 className={styles.title}>About</h2>
         <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me setting withe image of laptop"  />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Data Engineer</h3>
                        <p>Expert in building robust ETL pipelines and managing databases using advanced tools like Snowflake and Azure Data Factory, ensuring data integrity and optimal performance for data-driven decision making.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Data Scientist</h3>
                        <p>Proficient in applying statistical modeling and machine learning algorithms to extract actionable insights from large datasets, enhancing business strategies and operational efficiency.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="ui Icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Software Developer</h3>
                        <p>Experienced in developing responsive, scalable web applications using technologies like Django and ReactJS, focusing on creating intuitive user interfaces and maintaining high software quality through effective backend management.</p>
                    </div>
                </li>
            </ul>
        </div> 
        </section>
    )
};

export default About;

