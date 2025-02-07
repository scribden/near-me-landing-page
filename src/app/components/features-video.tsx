import React from "react";
import { feature2, feature3 } from "../data/data";

export default function FeaturesVideo() {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-6 gap-6 items-center">
      <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
        <div className="grid grid-cols-1 gap-6">
          {feature2.map((item, index) => {
            let Icon = item.icon;
            return (
              <div className="group flex duration-500 xl:p-3" key={index}>
                <div className="flex md:order-2 order-1 align-middle justify-center items-center size-16 mt-1 bg-primary/5 dark:bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                  <Icon className="size-5" />
                </div>
                <div className="flex-1 md:order-1 order-2 md:text-end md:me-4 md:ms-0 ms-4">
                  <h4 className="mb-0 text-lg font-semibold">{item.title}</h4>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-4 md:col-span-12 lg:mx-4 lg:order-2 order-1">
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "auto" }}
          className="mx-auto"
        >
          <source
            src="https://res.cloudinary.com/dtemuf6fd/video/upload/f_webm/v1738861907/zgqyhm77jjlxqo9d3hwp"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/dtemuf6fd/video/upload/v1738861907/zgqyhm77jjlxqo9d3hwp.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="lg:col-span-4 md:col-span-6 order-3">
        <div className="grid grid-cols-1 gap-6">
          {feature3.map((item, index) => {
            let Icon = item.icon;
            return (
              <div className="group flex duration-500 xl:p-3" key={index}>
                <div className="flex align-middle justify-center items-center size-16 mt-1 bg-primary/5 dark:bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary rounded-2xl text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                  <Icon className="size-5" />
                </div>
                <div className="flex-1 ms-4">
                  <h4 className="mb-0 text-lg font-semibold">{item.title}</h4>
                  <p className="text-slate-400 mt-3">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
