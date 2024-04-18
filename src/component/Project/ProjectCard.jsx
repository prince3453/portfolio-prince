import React from "react";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({project : {title, imageSrc, description, skills, demo,source}}) => {
    return (
        <div>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {
                    skills.map((skill,id) => {
                        <li key={id}>{skill}</li>
                    })
                }
            </ul>
            <div>
                <a href={demo}>Github</a>
                <a href={source}>Live</a>
                </div>
        </div>
        );
};

export default ProjectCard;