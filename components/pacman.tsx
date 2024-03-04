"use client";

// @ts-ignore
import ReactPacman from "react-pacman";
import { useState } from "react";

export function Pacman() {
  const [isGameStopped, setStopGame] = useState(false);
  return (
    <div>
      {isGameStopped ? (
        <p>Thanks for playing react-pacman!</p>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <div className="p-4 flex w-full items-center justify-center border rounded-xl bg-zinc-950">
            <ReactPacman />
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
