import React from "react";
import { FlipWords } from "./ui/FlipWords";
import { FlipWords2 } from "./ui/FlipWords";

export function FlipWordsDemo() {
  const words = ["The Future", "cute", "beautiful", "modern"];
  const words2 = ["Coding", "Bulding", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div
        className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords2 words={words2} /> <br />    
        Coding
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
