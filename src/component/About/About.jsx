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
                        <h3>Data engineer</h3>
                        <p>Etl pipeline experience building in the business solutions</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Data Scientist</h3>
                        <p>Etl pipeline experience building in the business solutions</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="ui Icon" />
                    <div className={styles.aboutItemtext}>
                        <h3>Python Developer</h3>
                        <p>Develope the scalable and maintainable softwares</p>
                    </div>
                </li>
            </ul>
        </div> 
        </section>
    )
};

export default About;

