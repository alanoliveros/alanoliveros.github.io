import "./ContactForm.scss";

const ContactForm = () => {
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScRoPNsheKXzSc4xBBlFciy89kFwHXkOQK8XxKgHjvyXFsHJg/formResponse";

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form action={googleFormURL} method="POST" target="_blank">
                <label>Name*</label>
                <input type="text" name="entry.2005620554" required />

                <label>Email*</label>
                <input type="email" name="entry.1045781291" required />

                <label>Address*</label>
                <input type="text" name="entry.1065046570" required />

                <label>Phone Number*</label>
                <input type="tel" name="entry.1166974658" required />

                <label>Comments</label>
                <textarea name="entry.839337160"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
