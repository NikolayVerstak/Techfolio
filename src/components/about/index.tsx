import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { sectionIds } from "@/utils/constants";
import WithIntersectionObserver, {
    WithIntersectionObserverProps,
} from "@/components/shared/WithIntersectionObserver";

const About: React.FC<WithIntersectionObserverProps> = ({ sectionClassName, sectionRef }) => {
    return (
        <article className={sectionClassName} ref={sectionRef} id={sectionIds.about}>
            <SectionHeader intro="Some information" name="About Me" />
            <section className="about-text">
                <p>
                    <span>
                        I'm a self-taught front-end developer with a passion for learning. Through
                        platforms like Udemy, I gained proficiency in crucial technologies such as
                        HTML, CSS, JavaScript, React.js etc. This enabled me to create dynamic web
                        applications, putting theory into practice.
                    </span>
                    <span>
                        To complement my front-end skills, I delved into back-end development,
                        taking on test assignments that involved technologies like Node.js and
                        MongoDB. This allowed me to craft websites that deliver comprehensive user
                        experiences.
                    </span>
                    <span>
                        My background working at an international construction company has been
                        invaluable in honing my skills in teamwork, problem-solving, and time
                        management, while also enhancing my proficiency in English.
                    </span>
                    <span>
                        I'm eager to leverage the expertise I've gained to contribute effectively to
                        collaborative projects and excited about the opportunity to work with fellow
                        professionals towards shared successes.
                    </span>
                </p>
            </section>
        </article>
    );
};

const AboutWithObserver = WithIntersectionObserver(About);

export default AboutWithObserver;
