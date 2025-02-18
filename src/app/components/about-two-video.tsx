import React from "react";

import Link from "next/link";
import Image from "next/image";

export default function AboutTwoVideo() {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
      <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
        <div className="pb-6 px-6 rounded-2xl bg-primary/5 dark:bg-primary/10 shadow shadow-primary/20">
          <video
            playsInline
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "auto" }}
            className="mx-auto"
          >
            <source
              src="https://res.cloudinary.com/dtemuf6fd/video/upload/f_webm/v1738861907/anagn484ki2vd6xzoueq"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/dtemuf6fd/video/upload/v1738861907/anagn484ki2vd6xzoueq.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
        <div className="lg:me-10">
          <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
            Get Found Easly
          </h6>
          <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            Make It Simple For Customers To <br /> Find Your Business
          </h4>
          <p className="text-slate-400 max-w-xl">
            Focus on customers within your defined service area, minimizing
            wasted inquiries.
          </p>

          <ul className="list-none text-slate-400 mt-6">
            <li className="mb-1 flex">
              <i className="mdi mdi-check text-primary text-xl me-2"></i>
              Reduce travel time and costs by limiting services to manageable
              locations.
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-primary text-xl me-2"></i>
              Serve local clients promptly, enhancing satisfaction and building
              trust.
            </li>
            <li className="mb-1 flex ms-0">
              <i className="mdi mdi-check text-primary text-xl me-2"></i>
              Build strong connections with clients in your community who value
              local support.
            </li>
          </ul>

          <div className="mt-6">
            <Link
              href=""
              className="hover:text-primary dark:hover:text-primary after:bg-primary dark:text-white transition duration-500 font-medium"
            >
              Learn More <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
