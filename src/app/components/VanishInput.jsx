"use client";

import { PlaceholdersAndVanishInput } from "./ui/VanishInput";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Let's talk",
    "I'm Interested",
    "Let's build the future together",
    "Write me down a email or a whatsapp!", 
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[10rem] flex flex-col justify-center items-center -mt-5  size-80 ml-12 px-2
      md:size-100 md:-mt-35 md:ml-50
      lg:size-110 lg:-ml-10
      xl:ml-155 xl:-mt-42
    ">
      {/* <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask Aceternity UI Anything
      </h2> */}
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>
  );
}
