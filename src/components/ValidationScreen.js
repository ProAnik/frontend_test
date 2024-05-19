import React from 'react';
import { useCaptcha } from '../context/CaptchaContext';

const ValidationScreen = () => {
    const { result } = useCaptcha();
    return (
        <div>
            <h2>Validation Result</h2>
            <p> {result ? "Congratulations" : "Sorry"}, you have { result ? "passed" : "failed" } the CAPTCHA test!</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );
};

export default ValidationScreen;
