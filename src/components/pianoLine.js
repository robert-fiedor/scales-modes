import React, { useRef, useEffect } from 'react';

const PianoLine = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let height = 2;

        // Set canvas dimensions
        canvas.width = 450;
        canvas.height = height;

        // Draw left grey part
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, 150, height);

        // Draw middle black part
        ctx.fillStyle = 'black';
        ctx.fillRect(150, 0, 150, height*5);

        // Draw right grey part
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(300, 0, 150, height)
    }, []);

    return <canvas ref={canvasRef}></canvas>;
};

export default PianoLine;
