import React from "react";
import NavLinks from "./NavBarLinks";

const NavBarExtanded: React.FC = () => {
    return (
        <aside className="navigation aside">
            <NavLinks type={"extended"} />
        </aside>
    );
};

export default NavBarExtanded;
