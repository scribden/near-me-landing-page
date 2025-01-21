"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { screenshotImg } from "../data/data";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

import Lightbox from "react-18-image-lightbox";
import "../../../node_modules/react-18-image-lightbox/style.css";

import Link from "next/link";

import ReactWOW from "react-wow";
import "animate.css";
import Image from "next/image";

export default function ScreenshotTwo() {
  let [open, setOpen] = useState<boolean>(false);
  let [activeIndex, setActiveIndex] = useState<number>(0);

  const settings = {
    container: ".tiny-four-item",
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      992: {
        items: 4,
      },

      767: {
        items: 3,
      },

      425: {
        items: 1,
      },
    },
  };

  let openImage = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };
  return (
    <div className="grid grid-cols-1 mt-6 relative">
      <ReactWOW animation="fadeInUp">
        <div
          className="tiny-four-itemwow animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          <TinySlider settings={settings}>
            {screenshotImg.map((item: string, index: number) => {
              return (
                <div className="tiny-slide" key={index}>
                  <Link
                    href="#"
                    onClick={() => openImage(index)}
                    className="lightbox"
                  >
                    <Image
                      src={item}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  </Link>
                </div>
              );
            })}
          </TinySlider>
        </div>
      </ReactWOW>
      {open && (
        <Lightbox
          mainSrc={screenshotImg[activeIndex]}
          nextSrc={screenshotImg[(activeIndex + 1) % screenshotImg.length]}
          prevSrc={
            screenshotImg[
              (activeIndex + screenshotImg.length - 1) % screenshotImg.length
            ]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex(
              (activeIndex + screenshotImg.length - 1) % screenshotImg.length
            )
          }
          onMoveNextRequest={() =>
            setActiveIndex((activeIndex + 1) % screenshotImg.length)
          }
        />
      )}
    </div>
  );
}
