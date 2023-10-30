import React from "react";
import { ProjectProps } from "./projectsData";

interface ProjectLinkItemsProps {
    links: ProjectProps["links"];
}

const ProjectLinks: React.FC<ProjectLinkItemsProps> = ({ links }) => {
    return (
        <>
            {links.map((link, index) => {
                const { label, icon, href } = link;
                const className = `project-${label.toLowerCase()}-link`;

                return (
                    <a key={index} target="_blank" className={className} href={href}>
                        {icon}
                        <span>{label}</span>
                    </a>
                );
            })}
        </>
    );
};

export default ProjectLinks;
