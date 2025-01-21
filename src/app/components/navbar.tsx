"use client";
import React, { useEffect, useState } from "react";
import { Link as Link1 } from "react-scroll";

import { FiUser } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({
  navLight,
  playBtn,
  bgLight,
  navCenter,
}: {
  navLight: boolean;
  playBtn: boolean;
  bgLight: boolean;
  navCenter: boolean;
}) {
  let [menu, setMenu] = useState<Boolean>(false);
  let [scroll, setScroll] = useState<Boolean>(false);

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  });

  return (
    <nav
      className={`navbar ${
        bgLight ? "bg-white dark:bg-slate-900 shadow dark:shadow-gray-800" : ""
      } ${scroll ? "is-sticky" : ""}`}
      id="navbar"
    >
      <div className="container relative flex flex-wrap items-center justify-between">
        {!navLight && (
          <Link className="navbar-brand md:me-8" href="/">
            <Image
              src="/images/logo-dark.png"
              width={121}
              height={20}
              className="h-5 inline-block dark:hidden"
              alt=""
            />
            <Image
              src="/images/logo-light.png"
              width={121}
              height={20}
              className="h-5 hidden dark:inline-block"
              alt=""
            />
          </Link>
        )}
        {navLight && (
          <Link className="navbar-brand" href="/">
            <span className="inline-block dark:hidden">
              <Image
                src="/images/logo-dark.png"
                width={121}
                height={20}
                className="l-dark"
                alt=""
              />
              <Image
                src="/images/logo-light.png"
                width={121}
                height={20}
                className="l-light"
                alt=""
              />
            </span>
            <Image
              src="/images/logo-light.png"
              width={121}
              height={20}
              className="hidden dark:inline-block"
              alt=""
            />
          </Link>
        )}

        <div className="nav-icons flex items-center lg_992:order-2 md:ms-6">
          {/* {!playBtn && (
            <ul className="list-none menu-social mb-0">
              <li className="inline">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center rounded-full align-middle bg-primary/10 hover:bg-primary text-primary hover:text-white"
                >
                  <FiUser className="size-4" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href=""
                  className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-full bg-primary text-white uppercase"
                >
                  Signup
                </Link>
              </li>
            </ul>
          )} */}
          {playBtn && (
            <ul className="list-none menu-social mb-0">
              <li className="inline">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"
                >
                  <Image
                    src="/images/appstore.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </Link>
              </li>

              <li className="inline ms-1">
                <Link
                  href=""
                  className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center"
                >
                  <Image
                    src="/images/playstore.png"
                    width={32}
                    height={32}
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          )}
          <button
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden"
            onClick={() => setMenu(!menu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div
          className={`navigation lg_992:order-1 lg_992:flex  ${
            navCenter ? "" : "ms-auto"
          } ${menu ? "" : "hidden"}`}
          id="menu-collapse"
        >
          <ul
            className={`navbar-nav ${navLight ? "nav-light" : ""}`}
            id="navbar-navlist"
          >
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="home"
              >
                Home
              </Link1>
            </li>
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="features"
              >
                Features
              </Link1>
            </li>
            {/* <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="screenshot"
              >
                Application
              </Link1>
            </li> */}
            <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="faqs"
              >
                FAQs
              </Link1>
            </li>
            {/* <li className="nav-item ms-0">
              <Link1
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                to="contact"
              >
                Contact us
              </Link1>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
