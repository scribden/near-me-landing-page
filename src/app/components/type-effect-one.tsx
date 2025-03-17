"use client";
import React from "react";

import { TypeAnimation } from "react-type-animation";

export default function TypeEffectOne() {
  return (
    <h4 className="lg:leading-normal leading-normal text-1xl lg:text-[54px] mb-5">
      Connecting Communities to Local Services <br />
      {/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Window Cleaners",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Dog Walkers",
          1000,
          "Gardeners",
          1000,
          "Florists",
          1000,
          "Cleaners",
          1000,
          "Car Washers",
          1000,
          "Waste Collectors",
          1000,
          "Nail Technicians",
          1000,
          "Drain Cleaners",
          1000,
        ]}
        wrapper="span"
        speed={20}
        repeat={Infinity}
        className="typewrite font-bold inline-block min-h-[40px] lg:min-h-[54px] min-w-[10px]"
        cursor={false}
      /> */}
    </h4>
  );
}
