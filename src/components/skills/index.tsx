import React from "react";
import { skillIcons } from "./SkillsIcons";
import SectionHeader from "@/components/shared/SectionHeader";
import { sectionIds } from "@/utils/constants";
import WithIntersectionObserver, {
    WithIntersectionObserverProps,
} from "@/components/shared/WithIntersectionObserver";

const Skills: React.FC<WithIntersectionObserverProps> = ({ sectionClassName, sectionRef }) => {
    return (
        <article className={sectionClassName} ref={sectionRef} id={sectionIds.skills}>
            <SectionHeader intro="Check out my" name="Tech Skills" />
            <section className="skills-list">
                {Object.entries(skillIcons).map(([name, icon]) => (
                    <div key={name} className="skill">
                        {icon}
                        <span>{name}</span>
                    </div>
                ))}
            </section>
        </article>
    );
};

export default WithIntersectionObserver(Skills);
