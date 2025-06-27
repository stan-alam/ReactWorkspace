import { useState } from 'react';

function SubmitButton() {
    const [isSubmitted, setIsSubmited] = useState(false);

    function handleSubmit() {
        setIsSubmitted(true);
    };

    return (
        <button onClick={handleSubmit}>
            {isSubmitted ? 'Loading....' : 'Submit' }
            {isSubmitted && <span className="spinner"></span>}
        </button>
    );
};

export default SubmitButton;