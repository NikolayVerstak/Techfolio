import React from "react";
import { Carousel } from "react-bootstrap";
import { projects } from "./projectsData";
import { sectionIds } from "@/utils/constants";
import ProjectCard from "./ProjectCard";
import useProjectIndex from "@/hooks/useProjectIndex";

// for screen width LESS than navbarChangeBreakpoint = 907px, projects are shown as a CAROUSEL
export const ProjectsCarousel: React.FC = () => {
    const { index, handleSelect, getProjectNumber } = useProjectIndex();

    return (
        <Carousel
            className={`projects-carousel ${getProjectNumber(index, projects.length)}`}
            fade={true}
            touch={true}
            interval={null}
            prevLabel={null}
            nextLabel={null}
            activeIndex={index}
            onSelect={handleSelect}>
            {projects.map((projectData, idx) => {
                return (
                    <Carousel.Item key={projectData.name}>
                        <ProjectCard
                            {...projectData}
                            isActive={idx === index}
                            imagesInterval={null}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

// for screen width MORE than navbarChangeBreakpoint = 907px, projects are shown as a LIST
export const ProjectsList: React.FC = () => {
    return (
        <section className="projects-list" id={sectionIds.projects}>
            {projects.map((projectData) => (
                <ProjectCard key={projectData.name} {...projectData} />
            ))}
        </section>
    );
};
