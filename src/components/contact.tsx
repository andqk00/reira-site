/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/send-email";
import SubmitButton from "./submit-button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      className="mb-28 scroll-mt-28 w-[min(100%,36rem)] text-center"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-600 -mt-6 dark:text-white/80">
        Please contact me at{" "}
        <a className="underline" href="mailto:gianggummy@gmail.com">
          gianggummy@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-6 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={100}
          className="h-12 rounded-lg border border-black/10 p-4 bg-white/90 focus:bg-white dark:bg-white/80 dark:bg-opacity-80 dark:focus:bg-white/90 transition-all dark:outline-none"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="h-48 my-3 rounded-lg border border-black/10 p-4 bg-white/90 focus:bg-white dark:bg-white/80 dark:bg-opacity-80 dark:focus:bg-white/90 transition-all dark:outline-none"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
