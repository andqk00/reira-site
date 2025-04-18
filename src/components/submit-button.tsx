import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex self-center items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full transition-all outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white/30 dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 cursor-pointer"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-75 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
