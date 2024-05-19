import React, { useEffect, useState } from "react";
import { useCaptcha } from "../context/CaptchaContext";
import GameBoard from "./GameBoard";

const CapturedImage = () => {
  const {
    capturedImage,
    squarePosition,
    targetShape,
    cells,
    setStep,
    setResult,
    selectedShape,
  } = useCaptcha();
  const [watermarkedImage, setWatermarkedImage] = useState(null);

  useEffect(() => {
    const addWatermarks = () => {
      const img = new Image();
      img.src = capturedImage;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        setWatermarkedImage(canvas.toDataURL("image/png"));
      };
    };

    if (capturedImage) {
      addWatermarks();
    }
  }, [capturedImage]);

  const handleValidation = () => {
    let res = true;
    cells.map((cell, index) => {
    
      if (cell.shape == targetShape) {
        if(selectedShape[index] != "ok") {
            res = false
        };
      }
    });
    setResult(res)
    setStep(3);
  };

  return (
    <div>
      <img
        src={watermarkedImage}
        alt="captured"
        style={{ position: "relative", cursor: "pointer" }}
      />
      <div
        style={{
          position: "absolute",
          top: squarePosition.top,
          left: squarePosition.left,
          width: "200px",
          height: "200px",
          border: "2px solid red",
        }}
      >
        <GameBoard></GameBoard>
      </div>
      <p>Find the {targetShape}</p>

      <button onClick={handleValidation}>Validate</button>
    </div>
  );
};

export default CapturedImage;
