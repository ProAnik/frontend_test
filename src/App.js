import React from 'react';
import { CaptchaProvider, useCaptcha } from './context/CaptchaContext';
import VideoStream from './components/VideoStream';
import CapturedImage from './components/CapturedImage';
import ValidationScreen from './components/ValidationScreen';
import './components/styles.css';

const App = () => {
    const { step } = useCaptcha();

    return (
        <div className="app">
            {step === 1 && <VideoStream />}
            {step === 2 && <CapturedImage />}
            {step === 3 && <ValidationScreen />}
        </div>
    );
};

const AppWrapper = () => (
    <CaptchaProvider>
        <App />
    </CaptchaProvider>
);

export default AppWrapper;
