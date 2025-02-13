import { useRef, useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState("");

    const googleFormURL =
        "https://docs.google.com/forms/d/e/1FAIpQLScRoPNsheKXzSc4xBBlFciy89kFwHXkOQK8XxKgHjvyXFsHJg/formResponse";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (formRef.current) {
            formRef.current.submit();
        }

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionMessage("Your response has been submitted successfully! ✅");

            window.alert("Thank you for reaching out! We will get back to you soon.");

            formRef.current.reset();
            setFormData({ name: "", phone: "" });
        }, 1000);
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form ref={formRef} action={googleFormURL} method="POST" target="hidden_iframe" onSubmit={handleSubmit}>
                {/* User Input Fields */}
                <label htmlFor="name">Name*</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone Number*</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                {/* Hidden Inputs for Google Forms */}
                <input type="hidden" name="entry.2005620554" value={formData.name} />
                <input type="hidden" name="entry.1166974658" value={formData.phone} />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>

            {submissionMessage && <p className="success-message">{submissionMessage}</p>}

            {/* Hidden iframe to prevent redirect */}
            <iframe name="hidden_iframe" style={{ display: "none" }} title="hidden_iframe"></iframe>
        </div>
    );
};

export default ContactForm;
