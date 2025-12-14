import React, { useEffect, useState, useMemo } from 'react';
import { Sidebar } from '../components/Sidebar';
import { GameCanvas } from '../components/GameCanvas';
import {
  launchCube,
  launchFractolMandelbrot,
  launchFractolJulia
} from '../wasm/wasmLauncher';
import { Loading } from '../components/Loading';

export const Games: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("")
  const GAMES = useMemo(() => [
  { id: "Cub3D", name: "cub3D", description: `A simple 3D ray-casting engine inspired by Wolfenstein 3D.
Controls:\nW = forward, A = left, S = right, D = backward\n
Left Arrow = rotate left, Right Arrow = rotate right.
`, launcher: launchCube },
  { id: "Mandelbrot", name: "Mandelbrot", description: `Explore the Mandelbrot fractal set through movement and zoom.
Controls:\nC = change color palette\nArrow keys = move\nMouse scroll = zoom.
`, launcher: launchFractolMandelbrot },
  { id: "Julia", name: "Julia", description: `Render and explore Julia fractals interactively.
Controls:\nC = change color palette\nArrow keys = move\nMouse scroll = zoom.
`, launcher: launchFractolJulia },
], []);

useEffect(() => {
  const loadGame = async () => {
    setLoading(true);
    try {
      const game = GAMES.find(g => g.id === selected);
      if (game) {
        await game.launcher();
        setTitle(game.name);
        setDescription(game.description);
      }
    } catch (error) {
      console.error('Failed to load game:', error);
    } finally {
      setLoading(false);
    }
  };

  loadGame();
}, [selected, GAMES]);

  return (
    <div className="flex h-screen relative">
      <Sidebar 
        games={GAMES}
        selected={selected}
        onSelect={setSelected} />
      <GameCanvas 
        title={title}
        description={description}
      />
      {loading && <Loading message="Loading game..." />}
    </div>
  );
};

export default Games;