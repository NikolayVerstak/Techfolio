import React, { createContext, useContext, useState } from "react";

interface PopupContextType {
    show: boolean;
    popupData: { header: string; message: string } | null;
    showPopup: (data: { header: string; message: string }) => void;
    hidePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error("usePopup must be used within a PopupProvider");
    }
    return context;
};

interface PopupProviderProps {
    children: React.ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
    const [popupData, setPopupData] = useState<{ header: string; message: string } | null>(null);
    const [show, setShow] = useState(false);

    const showPopup = (data: { header: string; message: string }) => {
        setPopupData(data);
        setShow(true);
    };

    const hidePopup = () => {
        setPopupData(null);
        setShow(false);
    };

    return (
        <PopupContext.Provider value={{ show, popupData, showPopup, hidePopup }}>
            {children}
        </PopupContext.Provider>
    );
};
