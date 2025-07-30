"use client";

import React from "react";
import { Button } from "./ui/sendButton";


export function StatefulButtonDemo() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };
  return (
    <div className="flex h-40 w-full items-center justify-center -mt-10">
      <Button onClick={handleClick}>
        Whatsapp message</Button>
    </div>
  );
}
