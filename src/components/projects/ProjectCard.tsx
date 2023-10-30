import React from "react";
import { ProjectProps } from "./projectsData";
import CardFront from "./ProjectCardFront";
import CardBack from "./ProjectCardBack";
import { CarouselProps } from "react-bootstrap";
import useFlipCard from "@/hooks/useFlipCard";

export interface ProjectCardProps extends ProjectProps {
    imagesInterval?: CarouselProps["interval"];
    isActive?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    imagesInterval = 7000,
    isActive,
    ...projectData
}) => {
    const { isFlipped, rotationDegree, handleDetailsClick } = useFlipCard(isActive);

    const commonProps = {
        ...projectData,
        handleDetailsClick,
        isFlipped,
        imagesInterval,
    };

    return (
        <div className="project-card" style={{ transform: `rotateY(${rotationDegree}deg)` }}>
            <CardFront {...commonProps} />
            <CardBack {...commonProps} />
        </div>
    );
};

export default ProjectCard;
