import React from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollPosition from "@/hooks/useScrollPosition";

const ScrollToTopButton: React.FC = () => {
    const isScrolled = useScrollPosition({ scrollPosition: 300 });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button className={`scroll-to-top ${isScrolled ? "visible" : ""}`} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default ScrollToTopButton;
