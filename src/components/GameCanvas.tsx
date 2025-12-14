import React, { useRef } from 'react';

interface GameCanvasProps {
  title: string;
  width?: number;
  height?: number;
  description: string;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({ title = "Select a game", width = 512, height = 512, description = "No game selected yet!" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  return (
    <div className="flex-1 flex flex-col justify-evenly items-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      <canvas
        ref={canvasRef}
        id="canvas"
        width={width}
        height={height}
        className="border-2 border-blue-500 rounded-lg shadow-xl"
      />
       <p className="text-center bg-beige p-5 border-5 whitespace-pre-line text-gray-600 max-w-md">
        {description}
      </p>
    </div>
  );
};
