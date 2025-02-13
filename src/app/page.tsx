"use client";

import React, { useState } from "react";
import Image from "next/image";

import Navbar from "./components/navbar";

import Faq from "./components/faq";
import Footer from "./components/footer";
import AboutTwoVideo from "./components/about-two-video";
import AboutOneVideo from "./components/about-one-video";
import FeaturesVideo from "./components/features-video";
import ScrollToTop from "./components/scroll-to-top";
import TypeEffectOne from "./components/type-effect-one";
import { SubmitForm } from "./components/submit-form";

export default function Page() {
  return (
    <>
      <Navbar
        navLight={false}
        playBtn={false}
        bgLight={false}
        navCenter={false}
      />

      <section
        className="relative overflow-hidden pt-40 after:content-[''] after:absolute after:inset-0 after:mx-auto after:size-[56rem] after:bg-gradient-to-tl after:to-primary/10  after:from-primary/20 after:blur-[200px] after:rounded-full after:-z-1"
        id="home"
      >
        <div className="container relative z-2">
          <div className="grid grid-cols-1 text-center">
            <div className="">
              <TypeEffectOne />
              <SubmitForm />
            </div>
            <div className="relative mt-4 lg:mx-16 z-3">
              <Image
                src="/images/phone/3-phone-half.png"
                width={992}
                height={552}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt=""
                className="mover"
                placeholder="empty"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="features">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Features
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Grow Your Local Business
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Use NearMe to attract more customers, expand your reach, and build
              a thriving local service business with ease.
            </p>
          </div>

          <FeaturesVideo />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <AboutOneVideo />
        </div>

        <div className="container relative md:mt-24 mt-16">
          <AboutTwoVideo />
        </div>
      </section>

      {/* <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="screenshot"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Screenshots
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Simple & Beautiful Interface
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>

          <Screenshot />
        </div>
      </section> */}

      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <Faq />
      </section>

      {/* <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="download"
      >
        <Download />
      </section> */}

      {/* <section className="relative md:py-24 py-16" id="reviews">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
              Reviews
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              10k+ Customers Trust Us
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>
          <Client />
        </div>
      </section> */}

      {/* <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="contact"
      >
        <Contact />
      </section> */}

      {/* <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container relative">
          <Partner />
        </div>
      </section> */}

      <Footer />

      <ScrollToTop />
    </>
  );
}
