import React from "react";
import skills from "../../data/skills";
import { getImageUrl } from "../../utils";
import history from "../../data/history";
import styles from "./Experience.module.css";


export const Experience = () => {
    return(
        <section id ="Experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return <div key ={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                                <p>{skill.title}</p>
                                </div>
                        })
                    }
                </div>
                <ul className={styles.history}>
                    {
                        history.map((history, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img src={getImageUrl(history.imageSrc)} alt={`${history.organisation} Logo`} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${history.role}, ${history.organisation}`}</h3>
                                    <p> {`${history.startDate} - ${history.endDate}`}</p>
                                    <ul>{history.experiences.map((experience,id) => {
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                    </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
};

export default Experience;