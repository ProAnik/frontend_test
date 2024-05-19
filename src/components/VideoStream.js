import React, { useRef, useEffect, useState } from 'react';
import { useCaptcha } from '../context/CaptchaContext';

const VideoStream = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { setCapturedImage, setStep, squarePosition, setSquarePosition } = useCaptcha();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        // Wait for video to be loaded before playing
        videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current.play();
        });
      } catch (err) {
        console.error(err);
      }
    };
    const handlePlay = () => {
        videoRef.current.play();
    };

    getVideo();

    const moveSquare = () => {
      const top = Math.random() * 200;
      const left = Math.random() * 400;
      setSquarePosition({ top, left});
    };

    const interval = setInterval(moveSquare, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (video.readyState === video.HAVE_ENOUGH_DATA) { // Check video is ready
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      setCapturedImage(canvas.toDataURL('image/png'));
      setStep(2);
    } else {
      console.warn('Video not ready for capture yet');
    }
  };

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div
        style={{
          position: 'absolute',
          top: squarePosition.top,
          left: squarePosition.left,
          width: '200px',
          height: '200px',
          border: '2px solid red',
        }}
      />
      <button onClick={handleCapture}>Continue</button>
    </div>
  );
};

export default VideoStream;
