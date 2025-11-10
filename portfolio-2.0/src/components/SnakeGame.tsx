import React, { useRef, useEffect, useState } from "react";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [running, setRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"playing" | "paused" | "dead">("playing");

  const gridSize = 20;
  const cellSize = 25;
  const canvasSize = gridSize * cellSize;
  const moveSpeed = 4; // velocidade suave

  const stateRef = useRef({
    snake: [
      { x: 9, y: 9 },
      { x: 8, y: 9 },
      { x: 7, y: 9 },
    ],
    dir: { x: 1, y: 0 },
    nextDir: { x: 1, y: 0 },
    coffee: { x: 15, y: 10 },
    alive: true,
    moveTimer: 0,
    lastMove: 0,
  });

  // ☕ sons
  const eatSound = new Audio(
    "https://cdn.pixabay.com/download/audio/2021/08/04/audio_b12c9c1538.mp3?filename=click-124467.mp3"
  );
  const gameOverSound = new Audio(
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_3a5ce2d0a0.mp3?filename=negative_beeps-6008.mp3"
  );

  // 🧭 Bloqueia scroll com setas e espaço
  useEffect(() => {
    const prevent = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", prevent, { passive: false });
    return () => window.removeEventListener("keydown", prevent);
  }, []);

  // ☕ posição aleatória
  function randomCoffeePos(snake: any[]) {
    const taken = new Set(snake.map((s) => `${s.x},${s.y}`));
    while (true) {
      const x = Math.floor(Math.random() * gridSize);
      const y = Math.floor(Math.random() * gridSize);
      if (!taken.has(`${x},${y}`)) return { x, y };
    }
  }

  // 🔄 Reinicia
  function resetGame() {
    stateRef.current = {
      snake: [
        { x: 9, y: 9 },
        { x: 8, y: 9 },
        { x: 7, y: 9 },
      ],
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      coffee: randomCoffeePos([
        { x: 9, y: 9 },
        { x: 8, y: 9 },
        { x: 7, y: 9 },
      ]),
      alive: true,
      moveTimer: 0,
      lastMove: 0,
    };
    setScore(0);
    setRunning(true);
    setStatus("playing");
  }

  // ⌨️ Controles
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const s = stateRef.current;
      const mapping: any = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const dir = mapping[e.key];
      if (dir && !(dir.x === -s.dir.x && dir.y === -s.dir.y)) s.nextDir = dir;
      if (e.key === "r") resetGame();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 🕹️ Loop principal
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let lastTime = 0;
    const stepTime = 1000 / moveSpeed;

    const loop = (time: number) => {
      const s = stateRef.current;
      const delta = time - lastTime;
      if (running && s.alive) s.moveTimer += delta;
      if (s.moveTimer >= stepTime) {
        s.moveTimer = 0;
        s.dir = s.nextDir;
        const head = {
          x: s.snake[0].x + s.dir.x,
          y: s.snake[0].y + s.dir.y,
        };

        // 🚧 colisão
        if (
          head.x < 0 ||
          head.y < 0 ||
          head.x >= gridSize ||
          head.y >= gridSize ||
          s.snake.some((seg) => seg.x === head.x && seg.y === head.y)
        ) {
          s.alive = false;
          setStatus("dead");
          gameOverSound.play();
        }

        s.snake.unshift(head);

        if (head.x === s.coffee.x && head.y === s.coffee.y) {
          eatSound.play();
          s.coffee = randomCoffeePos(s.snake);
          setScore((sc) => sc + 1);
        } else s.snake.pop();
      }
      lastTime = time;

      // 🎨 desenha
      ctx.fillStyle = "#f9f5e7";
      ctx.fillRect(0, 0, canvasSize, canvasSize);

      // ☕ café
      ctx.font = "22px serif";
      ctx.fillText("☕", s.coffee.x * cellSize + 4, s.coffee.y * cellSize + 20);

      // 🐍 cobra
      const grad = ctx.createLinearGradient(0, 0, canvasSize, canvasSize);
      grad.addColorStop(0, "#5c2d0a");
      grad.addColorStop(1, "#b0723e");
      ctx.strokeStyle = grad;
      ctx.lineWidth = cellSize - 3;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      s.snake.forEach((seg, i) => {
        const x = seg.x * cellSize + cellSize / 2;
        const y = seg.y * cellSize + cellSize / 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, [running]);

    return (
        <div className="max-sm:hidden h-screen overflow-hidden bg-[var(--secondary-color)] flex flex-col justify-center items-center">
            <h2 className="text-[var(--bg-color)] font-[Merienda] text-4xl">
                ☕ Snake do Café ☕
            </h2>
        
            <p className="text-[var(--bg-color)] font-[Raleway] text-lg">
                Pontuação: {score}
            </p>
        
            <div className="relative">
                <canvas
                    ref={canvasRef}
                    width={canvasSize}
                    height={canvasSize}
                    className="rounded-xl bg-[#ebe4cf] shadow-[0_0_12px_rgba(0,0,0,0.2)]"
                />
        
                {status === "paused" && (
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] text-white flex flex-col items-center justify-center rounded-xl font-[Raleway] text-lg">
                        <p>⏸️ Jogo Pausado</p>
                        <p>
                            Pressione <b>Espaço</b> ou <b>Esc</b> para continuar
                        </p>
                    </div>
                )}
        
                {status === "dead" && (
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] text-white flex flex-col items-center justify-center rounded-xl font-[Merienda] text-xl">
                        <p>💀 Você perdeu!</p>
                        <p>
                            Pressione <b>R</b> para reiniciar
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
