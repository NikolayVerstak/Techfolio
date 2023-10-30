import React, { createContext, useContext } from "react";
import {
    faHouse,
    faUser,
    faCode,
    faGear,
    faPhone,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { sectionIds } from "../utils/constants";
import useActiveSection from "../hooks/useActiveSection";

interface NavLinksContextType {
    activeSection: string;
    navItems: Array<{
        id: string;
        icon: IconDefinition;
        label: string;
    }>;
}

const NavLinksContext = createContext<NavLinksContextType | undefined>(undefined);

export const useNavLinks = () => {
    const context = useContext(NavLinksContext);
    if (!context) {
        throw new Error("useNavLinks must be used within a NavLinksProvider");
    }
    return context;
};

interface NavLinksProviderProps {
    children: React.ReactNode;
}

export const NavLinksProvider: React.FC<NavLinksProviderProps> = ({ children }) => {
    const { home, about, skills, projects, contacts } = sectionIds;
    const activeSection = useActiveSection();
    const navItems = [
        { id: home, icon: faHouse, label: "Home" },
        { id: about, icon: faUser, label: "About" },
        { id: skills, icon: faGear, label: "Skills" },
        { id: projects, icon: faCode, label: "Projects" },
        { id: contacts, icon: faPhone, label: "Contacts" },
    ];

    return (
        <NavLinksContext.Provider value={{ activeSection, navItems }}>
            {children}
        </NavLinksContext.Provider>
    );
};
