import React from "react";
import Link from "next/link";

import { FiSmartphone } from "react-icons/fi";
import Image from "next/image";

export default function Download() {
  return (
    <div className="container relative">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
        <div className="lg:col-span-5 md:col-span-6">
          <div className="pt-6 px-6 rounded-2xl bg-primary/5 dark:bg-primary/10 shadow shadow-primary/20">
            <Image
              src="/images/phone/half-3.png"
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
              Mobile Apps
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Available for your <br /> Smartphones
            </h4>
            <p className="text-slate-400 max-w-xl mb-0">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
            <div className="my-6">
              <Link href="#">
                <Image
                  src="/images/app.png"
                  width={152}
                  height={48}
                  className="h-12 inline-block m-1"
                  alt=""
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/play.png"
                  width={152}
                  height={48}
                  className="h-12 inline-block m-1"
                  alt=""
                />
              </Link>
            </div>

            <div className="inline-block">
              <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                <FiSmartphone className="me-2 text-primary size-10" />
                <div className="content">
                  <h6 className="text-base font-medium">
                    Install app now on your cellphones
                  </h6>
                  <Link
                    href="#"
                    className="hover:text-primary dark:hover:text-primary after:bg-primary dark:text-white transition duration-500 font-medium"
                  >
                    Install Now <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
