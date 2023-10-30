import React, { ReactNode } from "react";
import NavBar from "@/components/navBar";
import ScrollToTopButton from "@/components/navBar/ScrollToTopButton";
import Popup from "../shared/Popup";
import { PopupProvider } from "@/contexts/PopupContext";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <PopupProvider>
            <NavBar />
            <main className="content-wrapper">{children}</main>
            <ScrollToTopButton />
            <Popup />
        </PopupProvider>
    );
};

export default Layout;
