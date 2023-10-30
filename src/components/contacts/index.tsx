import React from "react";
import { sectionIds } from "@/utils/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import EmailForm from "./EmailForm";
import ContactLinks from "./ContactLinks";
import WithIntersectionObserver, {
    WithIntersectionObserverProps,
} from "@/components/shared/WithIntersectionObserver";

const Contacts: React.FC<WithIntersectionObserverProps> = ({ sectionClassName, sectionRef }) => {
    return (
        <article className={sectionClassName} ref={sectionRef} id={sectionIds.contacts}>
            <SectionHeader intro="Reach out via the next" name="Contact Info" />
            <section className="contacts-content">
                <EmailForm />
                <ContactLinks />
            </section>
        </article>
    );
};

export default WithIntersectionObserver(Contacts);
