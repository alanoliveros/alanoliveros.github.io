import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.scss";

const ContactForm = () => {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        isGay: "",
        gender: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            navigate("/confirmation"); // Redirect to confirmation page

            formRef.current.reset();
            setFormData({ name: "", phone: "", isGay: "", gender: "" });
        }, 1000);
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form
                ref={formRef}
                action={googleFormURL}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}>

                <label htmlFor="name">Name*</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>

                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>

                <fieldset>
                    <legend>Are you gay?</legend>
                    <label>
                        <input
                            type="radio"
                            name="isGay"
                            value="Yes"
                            checked={formData.isGay === "Yes"}
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="isGay"
                            value="No"
                            checked={formData.isGay === "No"}
                            onChange={handleChange}
                        />
                        No
                    </label>
                </fieldset>

                {/* Dropdown for "What is your gender?" */}
                <label htmlFor="gender">What is your gender?</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>

                {/* Hidden inputs for Google Form submission */}
                <input type="hidden" name="entry.2005620554" value={formData.name} />
                <input type="hidden" name="entry.1166974658" value={formData.phone} />
                <input type="hidden" name="entry.1292870228" value={formData.isGay} />
                <input type="hidden" name="entry.1182676433" value={formData.gender} />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>

            <iframe name="hidden_iframe" style={{ display: "none" }} title="hidden_iframe"></iframe>
        </div>
    );
};

export default ContactForm;
