import React from 'react';
import projects from '../../data/project.json';
import { ProjectCard } from './ProjectCard';

export const Project =() => {
    return (
        <section>
            <h2>Project</h2>
            <div>
                {
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />;
                    })
                }
            </div>
        </section>
    );
};

export default Project;