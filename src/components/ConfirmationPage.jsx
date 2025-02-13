import { Link } from "react-router-dom";
// import "./ConfirmationPage.scss";

const ConfirmationPage = () => {
    return (
        <div className="confirmation-container">
            <h2>Thank You! 🎉</h2>
            <p>Your response has been submitted successfully! ✅</p>
            <p>We will get back to you soon.</p>
            <Link to="/" className="back-home">Go Back</Link>
        </div>
    );
};

export default ConfirmationPage;
