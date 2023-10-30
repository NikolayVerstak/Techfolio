import { usePopup } from "@/contexts/PopupContext";
import React from "react";

import { Toast, ToastContainer } from "react-bootstrap";

const Popup: React.FC = () => {
    const { show, popupData, hidePopup } = usePopup();

    return (
        <ToastContainer position="top-end" className="p-3" style={{ zIndex: 15 }}>
            <Toast onClose={hidePopup} show={show} delay={6000} autohide>
                <Toast.Header>
                    <strong>{popupData?.header}</strong>
                </Toast.Header>
                <Toast.Body>{popupData?.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default Popup;
