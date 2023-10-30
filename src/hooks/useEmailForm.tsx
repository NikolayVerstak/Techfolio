// useEmailForm.ts
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { usePopup } from "@/contexts/PopupContext";

const SERVICE_ID = import.meta.env.VITE_REACT_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_REACT_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_REACT_PUBLIC_KEY;

const useEmailForm = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const { showPopup } = usePopup();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async () => {
        setIsSending(true);

        const nameInput = form.current?.elements.namedItem("user_name") as HTMLInputElement | null;
        const nameValue = nameInput?.value;

        form.current &&
            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(
                    () => {
                        form.current?.reset();
                        showPopup({
                            header: `Dear ${nameValue}`,
                            message: "Your email has been successfully sent!",
                        });
                    },
                    (error) => {
                        console.log(error.text);
                    }
                )
                .finally(() => {
                    setIsSending(false);
                });
    };

    return { form, isSending, sendEmail };
};

export default useEmailForm;
