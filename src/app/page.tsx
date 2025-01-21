"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/navbar";

import Faq from "./components/faq";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Download from "./components/download";
import AboutTwoVideo from "./components/about-two-video";
import AboutOneVideo from "./components/about-one-video";
import Screenshot from "./components/screenshot";
import FeaturesVideo from "./components/features-video";
import ScrollToTop from "./components/scroll-to-top";
import TypeEffectOne from "./components/type-effect-one";

import { FiArrowRight, FiMail } from "react-icons/fi";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email(),
});

type FormInput = z.infer<typeof schema>;

export default function Page() {
  const [sent, setSent] = useState(false);

  const { register, handleSubmit } = useForm<FormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    //Submit code to go here
    console.log("Submit data", data);
    setSent(true);
  };

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
              {!sent ? (
                <>
                  <p className="text-slate-500 dark:text-white/60 text-lg max-w-xl mx-auto">
                    Enter your email address to find out more...
                  </p>

                  <div className="subcribe-form mt-6 mb-3">
                    <form
                      className="relative max-w-lg mx-auto"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <FiMail className="size-4 absolute top-[17px] start-5 text-slate-400" />
                      <input
                        type="email"
                        id="subcribe"
                        className="form-input border-0 py-4 ps-12 pe-12 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 focus:border-0 focus:ring-0"
                        placeholder="Your Email Address :"
                        {...register("email", { required: true })}
                      />
                      <button
                        type="submit"
                        className="size-[46px] inline-flex items-center justify-center rounded-full align-middle absolute top-[2px] end-[3px] bg-primary border-primary text-white"
                      >
                        <FiArrowRight className="size-5" />
                      </button>
                    </form>
                  </div>

                  <span className="text-slate-500 dark:text-white/60 font-light text-sm">
                    By entering your email, you agree to our{" "}
                    <Link
                      href="https://www.scribden.com/terms"
                      className="text-primary"
                      target="_blank"
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://www.scribden.com/privacy-policy"
                      className="text-primary"
                      target="_blank"
                    >
                      Privacy Policy.
                    </Link>
                  </span>
                </>
              ) : (
                <>
                  <p className="text-slate-500 dark:text-white/60 text-lg max-w-xl mx-auto">
                    Thanks for registering your interest
                  </p>
                </>
              )}
            </div>
            <div className="relative mt-4 lg:mx-16 z-3">
              <Image
                src="/images/phone/3-phone-half.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt=""
                className="mover"
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
