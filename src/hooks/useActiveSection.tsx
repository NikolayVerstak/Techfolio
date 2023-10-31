import { useEffect, useState } from "react";
import { sectionIds } from "@/utils/constants";
import useScrollPosition from "./useScrollPosition";

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState(sectionIds.home);
    const isPageEnd = useScrollPosition({
        scrollPosition: document.body.offsetHeight * 0.95 - window.innerHeight,
    }); // whether user has scrolled to the end of the page

    useEffect(() => {
        const sectionEls = document.querySelectorAll(".portfolio-section");

        const updateActiveSection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const newActiveSection = entry.target.id;
                const lastSection = Object.keys(sectionIds)[Object.keys(sectionIds).length - 1];

                if (isPageEnd) {
                    // if it is the end of the page, make the last section active
                    setActiveSection(lastSection);
                } else if (newActiveSection !== activeSection) {
                    // otherwise check if the observation section is already active - if not, make it active
                    setActiveSection(newActiveSection);
                }
            });
        };

        const observer = new IntersectionObserver(updateActiveSection, {
            // perform the updateActiveSection callback when the section has just appeared
            // and when it is fully displayed
            threshold: [0, 1],
            rootMargin: "-30% 0% -70% 0%",
        });

        sectionEls.forEach((section) => observer.observe(section));

        return () => {
            sectionEls.forEach((section) => observer.unobserve(section));
        };
    }, [activeSection, isPageEnd]);

    return activeSection;
};

export default useActiveSection;
