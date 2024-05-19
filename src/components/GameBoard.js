import React, { useState, useEffect } from 'react';
import { useCaptcha } from '../context/CaptchaContext';

const  GameBoard = () => {
    const [cells, setCells] = useState([]);
    const { targetShape, setTargetShape , setStep } = useCaptcha();
  
    useEffect(() => {
      const shapes = ['squares', 'circles', 'triangles', 'blank', 'blank' , 'blank'];
      const initialCells = Array.from({ length: 25 }, () => ({
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      }));
      setCells(initialCells);
      setTargetShape(shapes[Math.floor(Math.random() * 3)]);
    }, []);
  
    const handleCellClick = (index) => {
      if (cells[index].shape === targetShape) {
        alert('Correct!');
        setStep(3)
      } else {
        alert('Try Again!');
      }
    };
    return <>
        <div id="game-board">
        {cells.map((cell, index) => (
          <div key={index} className={`cell ${cell.shape}`} data-cell  onClick={() => handleCellClick(index)}>
            <div className={`shape ${cell.shape}`}></div>
          </div>
        ))}
        </div>
    </>
}
export default GameBoard;