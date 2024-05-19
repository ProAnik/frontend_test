import React, { createContext, useState, useContext } from 'react';

const CaptchaContext = createContext();

export const CaptchaProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [capturedImage, setCapturedImage] = useState(null);
    const [selectedShape, setSelectedShape] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [squarePosition, setSquarePosition] = useState({ top: 0, left: 0 });
    const [targetShape, setTargetShape] = useState('');


    const value = {
        step,
        setStep,
        capturedImage,
        setCapturedImage,
        selectedShape,
        setSelectedShape,
        selectedColor,
        setSelectedColor,
        squarePosition,
        setSquarePosition,
        targetShape, 
        setTargetShape
    };

    return (
        <CaptchaContext.Provider value={value}>
            {children}
        </CaptchaContext.Provider>
    );
};

export const useCaptcha = () => useContext(CaptchaContext);
