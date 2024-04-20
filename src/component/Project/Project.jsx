import React from 'react';
import projects from '../../data/project.json';
import { ProjectCard } from './ProjectCard';
import styles from './Project.module.css';

export const Project =() => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Project</h2>
            <div className={styles.project}>
                {
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />;
                    })
                }
            </div>
            <div className={styles.textother}>
                <a href="https://github.com/prince3453?tab=repositories">Other Projects</a>
            </div>
        </section>
    );
};

export default Project;