import React, { FormEvent } from "react";

import useEmailForm from "@/hooks/useEmailForm";

const EmailForm: React.FC = () => {
    const { form, isSending, sendEmail } = useEmailForm();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendEmail();
    };

    const renderInput = (label: string, content: React.ReactNode) => (
        <div className={`form-${label.toLowerCase()}`}>
            <label>{label}</label>
            {content}
        </div>
    );

    return (
        <form ref={form} onSubmit={handleSubmit} className="contacts-form">
            {renderInput(
                "Name",
                <input type="text" name="user_name" placeholder="Full Name" required />
            )}
            {renderInput(
                "Email",
                <input type="email" name="user_email" placeholder="example@gmail.com" required />
            )}
            {renderInput(
                "Message",
                <textarea
                    name="message"
                    defaultValue="Hello Nikolay,"
                    placeholder="Type your message here..."
                    required
                />
            )}
            <button type="submit" disabled={isSending}>
                {isSending ? (
                    <>
                        Sending...
                        <span
                            className="spinner-border spinner-border-sm ml-1"
                            role="status"
                            aria-hidden="true"></span>
                    </>
                ) : (
                    <>
                        Send
                        <img
                            src="https://img.icons8.com/fluency-systems-filled/20/FFFFFF/sent.png"
                            alt="sent"
                        />
                    </>
                )}
            </button>
        </form>
    );
};

export default EmailForm;
