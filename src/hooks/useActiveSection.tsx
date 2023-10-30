import { useEffect, useState } from "react";
import { sectionIds } from "@/utils/constants";

const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState(sectionIds.home);

    useEffect(() => {
        const sectionEls = document.querySelectorAll(".portfolio-section");

        const updateActiveSection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const newActiveSection = entry.target.id;
                    if (newActiveSection !== activeSection) {
                        setActiveSection(newActiveSection);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(updateActiveSection, {
            threshold: [0, 1],
            rootMargin: "-30% 0% -70% 0%",
        });

        sectionEls.forEach((section) => observer.observe(section));

        return () => {
            sectionEls.forEach((section) => observer.unobserve(section));
        };
    }, [activeSection]);

    return activeSection;
};

export default useActiveSection;
