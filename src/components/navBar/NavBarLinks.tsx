import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myLogo from "@/assets/my_logo.svg";
import { useCollapse } from "@/contexts/CollapseContext";
import { useNavLinks } from "@/contexts/NavLinksContext";

interface NavLinksProps {
    type: "extended" | "collapsed";
}

const NavBarLinks: React.FC<NavLinksProps> = ({ type }) => {
    const { handleOffcanvas, isSlideIn, checkboxRef } = useCollapse();
    const { activeSection, navItems } = useNavLinks();

    const isCollapsed = type === "collapsed";
    const navSlideClass = isCollapsed ? (isSlideIn ? "slide-in" : "slide-out") : "expanded";
    const scrollDelay = isCollapsed ? 300 : 0;

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // This function handles the closing of the navigation bar on mobile devices
    // and ensures the toggle navigation button (burger icon) is unchecked.
    const collapseNavBar = () => {
        handleOffcanvas();
        if (checkboxRef.current) checkboxRef.current.checked = false;
    };

    // This function is triggered when a navigation item is clicked.
    // It close the navigation bar and only then scrolls smoothly to the corresponding section on the page.
    const handleNavItemClick = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        isCollapsed && collapseNavBar();
        setTimeout(() => {
            scrollToSection(sectionId);
        }, scrollDelay);
    };

    return (
        <>
            <p className="nav-logo">
                <img src={myLogo} alt="own logo" />
            </p>
            <nav className={`nav-items ${navSlideClass}`}>
                {navItems.map((item) => {
                    const { id, icon, label } = item;
                    const isActive = activeSection === id;
                    return (
                        <a
                            className={`nav-item ${isActive ? "active" : ""}`}
                            key={id}
                            href="#"
                            onClick={(event) => handleNavItemClick(id, event)}>
                            <p data-label={label} className="nav-icon">
                                <FontAwesomeIcon icon={icon} />
                                {isCollapsed && <span>{label}</span>}
                            </p>
                        </a>
                    );
                })}
            </nav>
        </>
    );
};

export default NavBarLinks;
