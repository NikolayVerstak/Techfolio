import React from "react";
import { Card } from "react-bootstrap";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectProps } from "./projectsData";
import useScreenSize from "@/hooks/useScreenSize";
import { navbarChangeBreakpoint } from "@/utils/constants";

interface CardSideProps extends ProjectProps {
    isFlipped: boolean;
    handleDetailsClick: () => void;
}

const CardBack: React.FC<CardSideProps> = ({ isFlipped, handleDetailsClick, ...projectData }) => {
    const { name, timeline, description, technologies } = projectData;
    const { width: screenWidth } = useScreenSize();

    const handleFlipClick = (deviceType: "mobile device" | "laptop") => {
        const actions = {
            "mobile device": screenWidth <= navbarChangeBreakpoint,
            laptop: screenWidth > navbarChangeBreakpoint,
        };

        if (actions[deviceType]) {
            handleDetailsClick();
        }
    };

    const renderLabel = (label: string, content: React.ReactNode) => (
        <div>
            <p className="project-descr-label">{label}</p>
            {content}
        </div>
    );

    return (
        <Card
            className="back"
            style={{ zIndex: `${isFlipped ? 1 : 0}` }}
            onClick={() => handleFlipClick("mobile device")}>
            <span className="turn-card" onClick={() => handleFlipClick("laptop")}>
                <FontAwesomeIcon icon={faArrowsRotate} />
            </span>
            <Card.Body className="project-info">
                {renderLabel("Name", <p className="project-title">{name}</p>)}
                {renderLabel("Timeline", <p className="project-timeline">{timeline}</p>)}
                {renderLabel("Description", <p className="project-descr">{description}</p>)}
                {renderLabel(
                    "Technologies",
                    <div className="project-tools">
                        {technologies.all.map((tool) => (
                            <span key={tool}>{tool}</span>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default CardBack;
