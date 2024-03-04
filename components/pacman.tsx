"use client";

// @ts-ignore
import ReactPacman from "react-pacman";
import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";

export const EAST = 0;
export const NORTH = 1;
export const WEST = 2;
export const SOUTH = 3;

export function Pacman() {
  const [isGameStopped, setStopGame] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const ref = useRef<ReactPacman>(null);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      switch (eventData.dir) {
        case "Up":
          ref.current?.changeDirection(NORTH);
          break;
        case "Down":
          ref.current?.changeDirection(SOUTH);
          break;
        case "Left":
          ref.current?.changeDirection(WEST);
          break;
        case "Right":
          ref.current?.changeDirection(EAST);
          break;
      }
    },
    preventScrollOnSwipe: true,
  });

  useEffect(() => {
    setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 640);
    });
  }, []);
  return (
    <div>
      {isGameStopped ? (
        <p>Thanks for playing react-pacman!</p>
      ) : (
        <div className="flex flex-col items-center gap-2" {...handlers}>
          {isMobile && (
            <p className="text-sm text-gray-500">Swipe on the board to move</p>
          )}
          <div className="p-4 overflow-hidden flex w-full items-center justify-center border rounded-xl bg-zinc-950">
            <ReactPacman ref={ref} gridSize={isMobile ? 10 : 12} />
          </div>
          <p className="text-sm text-gray-500">
            Courtesy of{" "}
            <a
              target="_blank"
              className="text-gray-800 underline"
              href="https://github.com/nurra01/react-pacman"
            >
              react-pacman
            </a>{" "}
            (MIT) /{" "}
            <button
              className="text-gray-800 underline"
              onClick={() => setStopGame(true)}
            >
              Stop game
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
