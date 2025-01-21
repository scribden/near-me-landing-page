"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollToTop() {
  let [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    let scrollTop = () => {
      setScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  });
  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href="#"
      onClick={() => scrollToTop()}
      id="back-to-top"
      className="back-to-top fixed  text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary text-white leading-9"
      style={{ display: scrollTop ? "block" : "none" }}
    >
      <i className="mdi mdi-arrow-up"></i>
    </Link>
  );
}
