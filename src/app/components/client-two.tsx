import React from "react";
import dynamic from "next/dynamic";

import { clientData } from "../data/data";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });
import "../../../node_modules/tiny-slider/dist/tiny-slider.css";

import ReactWOW from "react-wow";
import "animate.css";
import Image from "next/image";

interface ClientData {
  image: string;
  name: string;
  position: string;
  desc: string;
  rate: string[];
}

export default function ClientTwo() {
  const settings = {
    container: ".tiny-three-item",
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 mt-6">
      <ReactWOW animation="fadeInUp">
        <div
          className="tiny-three-item wow animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          <TinySlider settings={settings}>
            {clientData.map((item: ClientData, index: number) => {
              return (
                <div className="tiny-slide text-center" key={index}>
                  <div className="cursor-e-resize">
                    <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                      <i className="mdi mdi-format-quote-open mdi-48px text-primary"></i>
                      <p className="text-slate-400">{item.desc}</p>
                      <ul className="list-none mb-0 text-amber-400 mt-3">
                        {item.rate.map((el: any, index: number) => {
                          return (
                            <li className="inline" key={index}>
                              <i className={el}></i>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="text-center mt-5">
                      <Image
                        src={item.image}
                        width={56}
                        height={56}
                        className="size-14 rounded-full shadow-md mx-auto"
                        alt=""
                      />
                      <h6 className="mt-2 font-semibold">{item.name}</h6>
                      <span className="text-slate-400 text-sm">
                        {item.position}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </TinySlider>
        </div>
      </ReactWOW>
    </div>
  );
}
