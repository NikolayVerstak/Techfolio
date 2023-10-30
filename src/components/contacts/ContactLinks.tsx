import React from "react";
import LinkButton, { linksData } from "@/components/shared/InfoLinks";

const ContactLinks: React.FC = () => {
    return (
        <div className="contacts-links">
            <LinkButton linkData={linksData.email} customText="verstak.n.a@gmail.com" />
            <LinkButton linkData={linksData.location} customText="Yuzhny, Ukraine" />
            <div className="contacts-links-buttons">
                <LinkButton linkData={linksData.linkedIn} />
                <LinkButton linkData={linksData.gitHub} />
                <LinkButton linkData={linksData.phone} />
            </div>
        </div>
    );
};

export default ContactLinks;
