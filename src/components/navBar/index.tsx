import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import NavBarExtanded from "./NavBarExtended";
import { NavBarCollpsed } from "./NavBarCollapsed";
import { navbarChangeBreakpoint } from "@/utils/constants";
import { CollapseProvider } from "@/contexts/CollapseContext";
import { NavLinksProvider } from "@/contexts/NavLinksContext";

const NavBar: React.FC = () => {
    const { width: screenWidth } = useScreenSize();
    const isMobileView = screenWidth <= navbarChangeBreakpoint;

    return (
        <NavLinksProvider>
            <CollapseProvider>
                {isMobileView ? <NavBarCollpsed /> : <NavBarExtanded />}
            </CollapseProvider>
        </NavLinksProvider>
    );
};

export default NavBar;
