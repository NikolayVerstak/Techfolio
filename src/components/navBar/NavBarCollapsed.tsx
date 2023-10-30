import React from "react";
import NavBarLinks from "./NavBarLinks";
import { Offcanvas } from "react-bootstrap";
import { useCollapse } from "@/contexts/CollapseContext";
import useScrollPosition from "@/hooks/useScrollPosition";
import useScreenSize from "@/hooks/useScreenSize";

export const NavBarCollpsed: React.FC = () => {
    const { showOffcanvas, handleOffcanvas, checkboxRef } = useCollapse();
    const { height: screenHeight } = useScreenSize();
    const isScrolled = useScrollPosition({ scrollPosition: screenHeight / 3 });

    return (
        <nav className="navigation collapsed">
            {/* the hamburger icon to open the navigation bar */}
            <label className={`offcanvas-button ${isScrolled ? "scrolled" : ""}`}>
                <input type="checkbox" ref={checkboxRef} onClick={handleOffcanvas} />
                <div className="checkmark">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </label>

            <Offcanvas
                show={showOffcanvas}
                placement="top"
                backdrop={false}
                style={{ minHeight: `calc(${screenHeight}px + 0.25rem)` }}>
                <NavBarLinks type={"collapsed"} />
            </Offcanvas>
        </nav>
    );
};
