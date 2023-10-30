import React, { createContext, useContext, useRef, useState } from "react";

interface CollapseContextType {
    showOffcanvas: boolean;
    isSlideIn: boolean;
    handleOffcanvas: () => void;
    checkboxRef: React.RefObject<HTMLInputElement>;
}

const CollapseContext = createContext<CollapseContextType | undefined>(undefined);

export const useCollapse = () => {
    const context = useContext(CollapseContext);
    if (!context) {
        throw new Error("useCollapse must be used within a CollapseProvider");
    }
    return context;
};

interface CollapseProviderProps {
    children: React.ReactNode;
}

export const CollapseProvider: React.FC<CollapseProviderProps> = ({ children }) => {
    // showOffcanvas indicates whether the mobile nav is open
    const [showOffcanvas, setOffcanvas] = useState(false);
    // isSlideIn indicates when mobile navigation elements are displayed from the edge of the screen to the center
    const [isSlideIn, setIsSlideIn] = useState(false);
    // ref to the humburger button
    const checkboxRef = useRef<HTMLInputElement | null>(null);

    const handleOffcanvas = () => {
        setIsSlideIn((prevState) => !prevState);
        setTimeout(
            () => {
                setOffcanvas((prevState) => !prevState);
            },
            // delay for sliding out nav items if mobile navigation is close
            showOffcanvas ? 200 : 0
        );
    };

    return (
        <CollapseContext.Provider
            value={{
                showOffcanvas,
                isSlideIn,
                handleOffcanvas,
                checkboxRef,
            }}>
            {children}
        </CollapseContext.Provider>
    );
};
