import React from 'react';
import { useCaptcha } from '../context/CaptchaContext';

const ValidationScreen = () => {
    const { setStep } = useCaptcha();

    return (
        <div>
            <h2>Validation Result</h2>
            <p>Congratulations, you have passed the CAPTCHA test!</p>
            <button onClick={() => setStep(1)}>Try Again</button>
        </div>
    );
};

export default ValidationScreen;
