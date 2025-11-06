"use client";
import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Send } from "lucide-react";
import Link from "next/link";

export default function ContactUs2() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    errors: {} as Record<string, string>,
    submitting: false,
    submitted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    // Console log only
    console.log("Form submitted:", {
      name: state.name,
      email: state.email,
      message: state.message,
    });

    setState({
      ...state,
      submitting: false,
      submitted: true,
    });
  };

  return (
    <section className="w-full max-w-screen-md px-2 mx-auto">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-purple-500 transition-colors hover:bg-purple-500/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to Home
      </Link>
      <h2 className="mt-4 mb-5 bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        Let&apos;s Get in Touch
      </h2>
      <p className="text-muted-foreground mb-6 text-center">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>
      <div
        className="bg-opacity-10 mx-auto mb-6 grid w-full items-start gap-12 rounded-lg border bg-white px-4 pt-10 pb-6 shadow shadow-slate-800 md:grid-cols-2 lg:px-12"
        style={{
          backgroundImage:
            "radial-gradient(164.75% 100% at 50% 0,#272f3c 0,#0b1224 48.73%)",
        }}
      >
        <form className="space-y-8 text-slate-300" onSubmit={handleSubmit}>
          <div className="space-y-4 text-lg">
            <label htmlFor="name" />
            Name
            <input
              id="name"
              type="text"
              required
              className="bg-background flex h-10 w-full rounded-md border border-purple-700/30 bg-slate-950 px-3 py-2 text-sm shadow-inner outline-none hover:border-purple-500/50 hover:transition-all hover:outline-none focus:border-purple-500 focus:outline-none"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="space-y-4 text-lg">
            <label htmlFor="email" /> Email
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              className="hover:transition-all bg-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border border-purple-700/30 bg-slate-950 px-3 py-2 text-sm shadow-inner outline-none file:text-sm file:font-medium hover:border-purple-500/50 hover:outline-none focus:border-purple-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              name="email"
              required
            />
            {state.errors && state.errors.email && (
              <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>
          <div className="space-y-4 text-lg">
            <label htmlFor="message" className="text-lg" />
            Message
            <textarea
              className="bg-background ring-offset-background placeholder:text-muted-foreground mb-5 flex min-h-[100px] w-full rounded-md border border-purple-700/30 bg-slate-950 px-3 py-2 text-sm text-white shadow-inner outline-none hover:border-purple-500/50 hover:transition-all hover:outline-none focus:border-purple-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="message"
              placeholder="Enter your message"
              name="message"
            />
            {state.errors && state.errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {state.errors.message}
              </p>
            )}
          </div>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-purple-600 to-purple-700 py-2 text-center font-medium text-white shadow transition-all duration-300 ease-in-out hover:from-purple-700 hover:to-purple-800"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send"}
            <Send className="mx-2 inline h-4" />
          </button>
        </form>
        <div>
          <h3 className="mb-10 text-2xl font-semibold text-slate-300">
            Connect with Us
          </h3>
          <div className="mb-12 flex gap-8">
            <Link
              prefetch={false}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-600/30 bg-purple-950/30 hover:border-purple-500/50 hover:bg-purple-900/40 hover:shadow-purple-500/20 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Mail className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Email to us at </p>
              <p>peeps.io.inc0@gmail.com</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link
              prefetch={false}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-600/30 bg-purple-950/30 hover:border-purple-500/50 hover:bg-purple-900/40 hover:shadow-purple-500/20 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Phone className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Call us at </p>
              <p>+2349139985618</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link
              prefetch={false}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-600/30 bg-purple-950/30 px-2 hover:border-purple-500/50 hover:bg-purple-900/40 hover:shadow-purple-500/20 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <MapPin className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Location at </p>
              <p>Enugu State, Nigeria</p>
            </div>
          </div>

          <div className="flex space-x-12 py-7">
            <Link
              prefetch={false}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-600/30 bg-purple-950/30 hover:border-purple-500/50 hover:bg-purple-900/40 hover:shadow-purple-500/20 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Twitter className="h-5 w-5 text-white" />
            </Link>
            <Link
              prefetch={false}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-600/30 bg-purple-950/30 hover:border-purple-500/50 hover:bg-purple-900/40 hover:shadow-purple-500/20 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Facebook className="h-5 w-5 text-white" />
            </Link>
            <Link
              prefetch={false}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-600/30 bg-purple-950/30 hover:border-purple-500/50 hover:bg-purple-900/40 hover:shadow-purple-500/20 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Instagram className="h-5 w-5 text-white" />
            </Link>
            <Link
              prefetch={false}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-600/30 bg-purple-950/30 hover:border-purple-500/50 hover:bg-purple-900/40 hover:shadow-purple-500/20 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Github className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
