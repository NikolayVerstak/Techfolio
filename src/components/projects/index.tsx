import React from "react";
import { navbarChangeBreakpoint, sectionIds } from "@/utils/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import useScreenSize from "@/hooks/useScreenSize";
import { ProjectsCarousel, ProjectsList } from "./ProjectsList";
import WithIntersectionObserver, {
    WithIntersectionObserverProps,
} from "@/components/shared/WithIntersectionObserver";

const Projects: React.FC<WithIntersectionObserverProps> = ({ sectionClassName, sectionRef }) => {
    const { width: screenWidth } = useScreenSize();
    const isMobileView = screenWidth <= navbarChangeBreakpoint;

    return (
        <article className={sectionClassName} ref={sectionRef} id={sectionIds.projects}>
            <SectionHeader intro="Take a look at my" name="Projects" />
            {isMobileView ? <ProjectsCarousel /> : <ProjectsList />}
        </article>
    );
};

export default WithIntersectionObserver(Projects);
