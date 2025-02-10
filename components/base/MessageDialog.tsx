"use client";
import { RiXboxLine, RiCheckLine } from "@remixicon/react";
import React from "react";

const MessageDialog = ({
  type,
  message,
  Open,
  setOpen,
}: {
  type: "success" | "error";
  message: string;
  Open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    Open && (
      <div className="fixed top-0 left-0 bg-black/30 z-[66] backdrop-blur-lg w-full h-full flex items-center justify-center">
        <div className="w-96 rounded-3xl h-72 p-5 shadow-2xl shadow-black/5 bg-white">
          {type === "success" ? (
            <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-green-600 flex items-center justify-center mx-auto rounded-full">
              <RiCheckLine strokeWidth={1.2} className="text-white size-9" />
            </div>
          ) : (
            <div className="w-16 h-16 bg-gradient-to-tr from-red-500 to-red-600 flex items-center justify-center mx-auto rounded-full">
              <RiXboxLine strokeWidth={1.2} className="text-white size-9" />
            </div>
          )}
          <p className="text-center text-xl mt-5">
            {type === "success"
              ? "Your Message is Send Successfully"
              : "Failed To Sand Your Message!"}
          </p>
          <p className="text-sm text-muted-foreground text-center mt-2">
            {message}
          </p>

          <div className="w-full flex mt-5 justify-center">
            <button
              onClick={() => setOpen(false)}
              className="w-1/2 bg-accent text-text py-3"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default MessageDialog;
