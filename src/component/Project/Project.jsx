import React from 'react';
import projects from '../../data/project.json';
import { ProjectCard } from './ProjectCard';
import styles from './Project.module.css';

export const Project =() => {
    return (
        <section id='Project' className={styles.container}>
            <h2 className={styles.title}>Project</h2>
            <div className={styles.project}>
                {
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />;
                    })
                }
            </div>
            <div className={styles.textother}>
                <a className={styles.otherlink} href="https://github.com/prince3453?tab=repositories">Other Projects</a>
            </div>
        </section>
    );
};

export default Project;