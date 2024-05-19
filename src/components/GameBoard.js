import React, { useState, useEffect } from 'react';
import { useCaptcha } from '../context/CaptchaContext';

const  GameBoard = () => {
    
    const { targetShape, setTargetShape , selectedShape, setSelectedShape, cells, setCells } = useCaptcha();
  
  
    useEffect(() => {
      const shapes = ['squares_red', 'squares_green','squares_blue', 'triangles_red', 'triangles_green', 'triangles_blue', 'circles_red', 'circles_green', 'circles_blue' ,'blank', 'blank' , 'blank'];
      const initialCells = Array.from({ length: 25 }, () => ({
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      }));
      setCells(initialCells);
      setTargetShape(shapes[Math.floor(Math.random() * 9)]);

    }, []);
  
    const handleCellClick = (index) => {
      if (cells[index].shape === targetShape) {
        const newArray = [...selectedShape];
        newArray[index] = 'ok';
        setSelectedShape(newArray);
        // setStep(3)
      } else {
        alert('Try Again!');
      }
    };
    return <>
        <div id="game-board">
        {cells.map((cell, index) => (
          <div key={index} className={`cell ${cell.shape}`} data-cell  onClick={() => handleCellClick(index)}>
            <div className={`shape ${cell.shape}`}>{selectedShape[index]}</div>
          </div>
        ))}
        </div>
    </>
}
export default GameBoard;