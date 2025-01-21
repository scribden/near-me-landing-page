import React from "react";
import Link from "next/link";

import { FiAperture, FiShield } from "react-icons/fi";
import { IconType } from "react-icons";
import Image from "next/image";

export default function AboutOne() {
  interface Data {
    icon: IconType;
    title: string;
    desc: string;
  }

  let data: Data[] = [
    {
      icon: FiShield,
      title: "Enhance Security",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
    {
      icon: FiAperture,
      title: "High Performance",
      desc: "There are many variations of passages of Lorem Ipsum available",
    },
  ];
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
      <div className="lg:col-span-5 md:col-span-6">
        <div className="pt-6 px-6 rounded-2xl bg-primary/5 dark:bg-primary/10 shadow shadow-primary/20">
          <Image
            src="/images/phone/half-1.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>
      </div>

      <div className="lg:col-span-7 md:col-span-6">
        <div className="lg:ms-10">
          <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
            Customizable
          </h6>
          <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            Work Faster With <br /> Powerful Tools
          </h4>
          <p className="text-slate-400 max-w-xl">
            Unleash the power of our platform with a multitude of powerful
            features, empowering you to achieve your goals.
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
            {data.map((item: Data, index: any) => {
              let Icon = item.icon;
              return (
                <div
                  className="group flex relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-slate-50/50 dark:bg-slate-800/20 hover:bg-primary dark:hover:bg-primary duration-500"
                  key={index}
                >
                  <span className="text-primary group-hover:text-white text-5xl font-semibold duration-500">
                    <Icon className="size-8 mt-2" />
                  </span>
                  <div className="flex-1 ms-3">
                    <h5 className="group-hover:text-white text-lg font-semibold duration-500">
                      {item.title}
                    </h5>
                    <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-2">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute start-1 top-5 text-slate-900/[0.02] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.1] duration-500">
                    <Icon className="size-24" />
                  </div>
                </div>
              );
            })}
          </div>

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
