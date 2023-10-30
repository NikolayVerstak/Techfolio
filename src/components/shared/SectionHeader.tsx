import React from "react";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
    intro: string;
    name: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ intro, name }) => {
    const { ref, inView } = useInView();

    return (
        <header ref={ref} className={`section-header ${inView ? "visible" : ""}`}>
            <p>{intro}</p>
            <h1>{name}</h1>
        </header>
    );
};

export default SectionHeader;
