import React from "react";
import { Card } from "react-bootstrap";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectCardProps } from "./ProjectCard";
import ProjectImagesCarousel from "./ProjectImagesCarousel";
import ProjectLinks from "./ProjectLinks";

interface CardSideProps extends ProjectCardProps {
    isFlipped: boolean;
    handleDetailsClick: () => void;
}

const CardFront: React.FC<CardSideProps> = ({
    imagesInterval,
    isFlipped,
    handleDetailsClick,
    ...projectData
}) => {
    const { name, description, images, backgroungImages, technologies, links } = projectData;

    return (
        <Card className="front" style={{ zIndex: `${isFlipped ? 0 : 1}` }}>
            <ProjectImagesCarousel
                name={name}
                images={images}
                bgImages={backgroungImages}
                interval={imagesInterval}
            />
            <Card.Body className="project-info">
                <h3 className="project-title">{name}</h3>
                <p className="project-descr">
                    <span className="descr-text">{description}</span>
                </p>
                <div className="project-tools">
                    {technologies.main.map((tool, index) => (
                        <span key={index}>{tool}</span>
                    ))}
                </div>
            </Card.Body>
            <Card.Body className="project-links">
                <ProjectLinks links={links} />
                <div className="project-full-details" onClick={handleDetailsClick}>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    <span>Details</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardFront;
