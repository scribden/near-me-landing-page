import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FiDribbble,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiShoppingCart,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 dark:bg-gray-900">
      <div className="container">
        <div className="grid md:grid-cols-12 items-center">
          <div className="md:col-span-3">
            <Link href="#" className="logo-footer">
              <Image
                src="/images/logo-light.svg"
                width={121}
                height={20}
                className="md:ms-0 mx-auto"
                alt=""
              />
            </Link>
          </div>

          <div className="md:col-span-5 md:mt-0 mt-8">
            <div className="text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Scribden LTD
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:mt-0 mt-8">
            <ul className="list-none foot-icon ltr:md:text-right rtl:md:text-left text-center">
              {/* <li className="inline">
                <Link
                  href=""
                  target="_blank"
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-primary rounded-md text-slate-300 hover:text-white hover:bg-primary"
                >
                  <FiShoppingCart
                    className="h-4 w-4 align-middle"
                    title="Buy Now"
                  />
                </Link>
              </li> */}

              {/* <li className="inline">
                <Link
                  href=""
                  target="_blank"
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-primary rounded-md text-slate-300 hover:text-white hover:bg-primary"
                >
                  <FiDribbble
                    className="h-4 w-4 align-middle"
                    title="dribbble"
                  />
                </Link>
              </li> */}

              {/* <li className="inline">
                <Link
                  href=""
                  target="_blank"
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-primary rounded-md text-slate-300 hover:text-white hover:bg-primary"
                >
                  <FiLinkedin
                    className="h-4 w-4 align-middle"
                    title="Linkedin"
                  />
                </Link>
              </li> */}

              <li className="inline">
                <Link
                  href="https://www.facebook.com/profile.php?id=61572422038968"
                  target="_blank"
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-primary rounded-md text-slate-300 hover:text-white hover:bg-primary"
                >
                  <FiFacebook
                    className="h-4 w-4 align-middle"
                    title="facebook"
                  />
                </Link>
              </li>

              {/* <li className="inline">
                <Link
                  href=""
                  target="_blank"
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-primary rounded-md text-slate-300 hover:text-white hover:bg-primary"
                >
                  <FiInstagram className="h-4 w-4 align-middle" />
                </Link>
              </li> */}

              {/* <li className="inline">
                <Link
                  href=""
                  target="_blank"
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-primary rounded-md text-slate-300 hover:text-white hover:bg-primary"
                >
                  <FiTwitter className="h-4 w-4 align-middle" title="twitter" />
                </Link>
              </li> */}

              <li className="inline">
                <Link
                  href="hello@nearmeapp.co.uk"
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-primary rounded-md text-slate-300 hover:text-white hover:bg-primary"
                >
                  <FiMail className="h-4 w-4 align-middle" title="email" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
