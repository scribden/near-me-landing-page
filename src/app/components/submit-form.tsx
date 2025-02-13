import { useState } from "react";
import { FiArrowRight, FiHome, FiMail, FiUser } from "react-icons/fi";
import { useMutation } from "react-query";
import { registerInterestQuery } from "../graphql/queries";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

const schema = z.object({
  email: z.string().email(),
  businessName: z.string().optional(),
  name: z.string().optional(),
});

type FormInput = z.infer<typeof schema>;

export const SubmitForm = () => {
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);

  const useEmail = () => {
    return useMutation({
      mutationFn: async (email: string) => {
        console.log(process.env.NEXT_PUBLIC_API_URL);

        if (
          !process.env.NEXT_PUBLIC_API_URL ||
          !process.env.NEXT_PUBLIC_API_KEY
        ) {
          console.log(
            "Envrionment variables are not set to connect to API and Services"
          );
          return {};
        }
        return fetch(process.env.NEXT_PUBLIC_API_URL, {
          method: "POST",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
          },
          body: JSON.stringify({
            query: registerInterestQuery,
            variables: { email },
          }),
        });
      },
    });
  };

  const { mutate, isLoading } = useEmail();

  const { register, handleSubmit } = useForm<FormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log("Submit data", data);
    mutate(data.email);
    setSent(true);
    setStep(step + 1);
  };

  return (
    <>
      <p
        className={`text-slate-500 dark:text-white/60 text-lg max-w-xl mx-auto transition-opacity duration-1000 
            ${
              step === 1 ? "opacity-1 max-h-max" : "opacity-0 invisible max-h-0"
            }`}
      >
        Enter your email address to find out more...
      </p>

      <p
        className={`text-slate-500 dark:text-white/60 text-lg max-w-xl mx-auto transition-opacity duration-1000 ${
          step === 2 ? "opacity-1 max-h-max" : "opacity-0 invisible max-h-0"
        }`}
      >
        Thanks for registering your interest
      </p>

      <p
        className={`text-slate-500 dark:text-white/60 text-lg max-w-xl mx-auto transition-opacity duration-1000 ${
          step === 2 ? "opacity-1 max-h-max" : "opacity-0 invisible max-h-0"
        }`}
      >
        Please provide more information so we can get in contact
      </p>

      <p
        className={`text-slate-500 dark:text-white/60 text-lg max-w-xl mx-auto transition-opacity duration-1000 ${
          step === 3 ? "opacity-1 max-h-max" : "opacity-0 invisible max-h-0"
        }`}
      >
        Thank you, we will get in contact with you.
      </p>

      <div className="subcribe-form mt-6 mb-3">
        {step < 3 && (
          <form
            className="relative max-w-lg mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={`transition-opacity duration-1000
            ${
              step === 2 ? "opacity-0 invisible max-h-0" : "opacity-1 max-h-max"
            }`}
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
                disabled={isLoading}
                type="submit"
                className="size-[46px] inline-flex items-center justify-center rounded-full align-middle absolute top-[2px] end-[3px] bg-primary border-primary text-white"
              >
                <FiArrowRight className="size-5" />
              </button>
            </div>

            <div
              className={`transition-opacity duration-1000
            ${
              step === 1 ? "opacity-0 invisible max-h-0" : "opacity-1 max-h-max"
            }`}
            >
              <div className="relative mb-4">
                <FiHome className="size-4 absolute top-[17px] start-5 text-slate-400" />

                <input
                  type="text"
                  id="subcribe"
                  className="form-input border-0 py-4 ps-12 pe-12 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 focus:border-0 focus:ring-0"
                  placeholder="Your Name :"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="relative">
                <FiMail className="size-4 absolute top-[17px] start-5 text-slate-400" />
                <input
                  type="text"
                  id="subcribe"
                  className="form-input border-0 py-4 ps-12 pe-12 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 focus:border-0 focus:ring-0"
                  placeholder="Name of your business :"
                  {...register("businessName", { required: true })}
                />
                <button
                  disabled={isLoading}
                  type="submit"
                  className="size-[46px] inline-flex items-center justify-center rounded-full align-middle absolute top-[2px] end-[3px] bg-primary border-primary text-white"
                >
                  <FiArrowRight className="size-5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {step < 2 && (
        <span className="text-slate-500 dark:text-white/60 font-light text-sm">
          By entering your details, you agree to our{" "}
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
      )}
    </>
  );
};
