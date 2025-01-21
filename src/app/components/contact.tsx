import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="container relative">
      <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
        <div className="lg:col-span-7 md:col-span-6">
          <Image
            src="/images/contact.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>

        <div className="lg:col-span-5 md:col-span-6">
          <div className="lg:ms-5">
            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
              <h6 className="text-primary uppercase text-sm font-bold tracking-wider mb-3">
                Contact Us
              </h6>
              <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                Get in touch !
              </h4>

              <form>
                <div className="grid lg:grid-cols-12 gap-3">
                  <div className="lg:col-span-6">
                    <div className="text-start">
                      <label htmlFor="name" className="font-medium">
                        Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                        placeholder="Name :"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className="text-start">
                      <label htmlFor="email" className="font-medium">
                        Email:
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                        placeholder="Email :"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-12">
                    <div className="text-start">
                      <label htmlFor="subject" className="font-medium">
                        Subject:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        className="form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                        placeholder="Subject :"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-12">
                    <div className="text-start">
                      <label htmlFor="comments" className="font-medium">
                        Message:
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        className="form-input mt-1 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-primary dark:border-gray-800 dark:focus:border-primary focus:ring-0"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>

                  <div className="lg:col-span-12">
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 tracking-wider inline-flex items-center justify-center font-medium rounded bg-primary text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
