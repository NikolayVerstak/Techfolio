import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const linksData = {
    resume: {
        href: import.meta.env.VITE_REACT_MY_CV,
        icon: faDownload,
        className: "resume",
    },
    linkedIn: {
        href: "https://www.linkedin.com/in/nikolay-verstak/",
        icon: faLinkedinIn,
        className: "linkedin",
    },
    gitHub: {
        href: "https://github.com/NikolayVerstak",
        icon: faGithub,
        className: "github",
    },
    email: {
        href: import.meta.env.VITE_REACT_MY_EMAIL,
        icon: faEnvelope,
        className: "email",
    },
    location: {
        href: import.meta.env.VITE_REACT_MY_LOCATION,
        icon: faLocationDot,
        className: "location",
    },
    phone: {
        href: import.meta.env.VITE_REACT_MY_PHONE,
        icon: faPhoneFlip,
        className: "phone",
    },
};

interface LinkData {
    href: string;
    icon: IconDefinition;
    className: string;
}

interface LinkButtonProps {
    linkData: LinkData;
    customText?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ linkData, customText = "" }) => {
    const { href, icon, className } = linkData;
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            <FontAwesomeIcon icon={icon} />
            {customText}
        </a>
    );
};

export default LinkButton;
