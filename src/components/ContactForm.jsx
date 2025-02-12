import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    });

    const googleFormURL =
        "https://docs.google.com/forms/d/e/1FAIpQLScRoPNsheKXzSc4xBBlFciy89kFwHXkOQK8XxKgHjvyXFsHJg/formResponse";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const preFilledURL = `${googleFormURL}?entry.2005620554=${encodeURIComponent(
            formData.name
        )}&entry.1166974658=${encodeURIComponent(formData.phone)}`;

        window.open(preFilledURL, "_blank");
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
