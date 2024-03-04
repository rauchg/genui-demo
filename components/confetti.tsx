"use client";
import JSConfetti from "js-confetti";
import { useEffect } from "react";

export function Confetti() {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }, []);

  return "Here you go 🎉!";
}
