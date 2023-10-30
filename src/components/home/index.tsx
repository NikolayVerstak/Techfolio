import React from "react";
import avatar from "@/assets/avatar.png";
import { sectionIds } from "@/utils/constants";
import LinkButton, { linksData } from "@/components/shared/InfoLinks";
import WithIntersectionObserver, {
    WithIntersectionObserverProps,
} from "@/components/shared/WithIntersectionObserver";

const Home: React.FC<WithIntersectionObserverProps> = ({ sectionClassName, sectionRef }) => {
    const content = {
        greeting: "Hi there! My name's",
        fullName: "Nikolay Verstak",
        shortDescription: (
            <>
                I'm a dedicated <span className="home-profession">Front-End Developer</span> with
                unwavering motivation, channeling this drive into crafting captivating interactive
                web applications.
            </>
        ),
    };

    return (
        <article className={sectionClassName} ref={sectionRef} id={sectionIds.home}>
            <section className="home-avatar-container">
                <span className="home-avatar-circle">
                    <img className="home-avatar" src={avatar} alt="avatar" />
                </span>
            </section>
            <section className="home-info-container">
                <div className="info-text">
                    <p className="home-greeting">{content.greeting}</p>
                    <h1 className="home-name">{content.fullName}</h1>
                    <p className="home-short-description">{content.shortDescription}</p>
                </div>
                <div className="links-info">
                    <LinkButton linkData={linksData.resume} customText="Resume" />
                    <LinkButton linkData={linksData.linkedIn} />
                    <LinkButton linkData={linksData.gitHub} />
                    <LinkButton linkData={linksData.email} />
                </div>
            </section>
        </article>
    );
};

export default WithIntersectionObserver(Home);
