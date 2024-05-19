import React, { createContext, useState, useContext } from 'react';

const CaptchaContext = createContext();

export const CaptchaProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [capturedImage, setCapturedImage] = useState(null);
    const [squarePosition, setSquarePosition] = useState({ top: 0, left: 0 });
    const [targetShape, setTargetShape] = useState('');
    const [result, setResult] = useState(false)
    const [selectedShape, setSelectedShape] = useState(new Array(25).fill(''))
    const [cells, setCells] = useState([]);

    const value = {
        step,
        setStep,
        capturedImage,
        setCapturedImage,
        squarePosition,
        setSquarePosition,
        targetShape, 
        setTargetShape,
        result, 
        setResult,
        selectedShape,
        setSelectedShape,
        cells,
        setCells
    };

    return (
        <CaptchaContext.Provider value={value}>
            {children}
        </CaptchaContext.Provider>
    );
};

export const useCaptcha = () => useContext(CaptchaContext);
