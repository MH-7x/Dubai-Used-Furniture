"use client";
import React, { useState } from "react";

import { RiMailSendFill } from "@remixicon/react";
import MessageDialog from "./base/MessageDialog";
import { useTranslations } from "next-intl";

function ContactForm() {
  const [Errors, setErrors] = useState("");
  const [Success, setSuccess] = useState("");
  const [Open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);
  const t = useTranslations("NavList");
  const l = useTranslations("contact");
  const b = useTranslations("buttons");
  const services = [
    "ser1",
    "ser2",
    "ser3",
    "ser4",
    "ser5",
    "ser6",
    "ser7",
    "ser8",
    "ser9",
  ] as const;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setOpen(false);
    setErrors("");
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      setLoading(true);
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, Date: Date.now() }),
      });

      if (!response.ok)
        throw new Error(`Failed To Send Message ${response.status}`);
      const resData = await response.json();
      if (!resData.success) throw new Error(resData.message);

      setSuccess(resData.message);
      setOpen(true);
      document.querySelector("form")?.reset();
    } catch (error) {
      setErrors(
        error instanceof Error ? error.message : "Failed To Send Message"
      );
      setOpen(true);
      console.log("MAIL SENDING ERROR :: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {Open && Success && !Errors ? (
        <MessageDialog
          Open={Open}
          setOpen={setOpen}
          type="success"
          message={Success}
        />
      ) : (
        <MessageDialog
          Open={Open}
          setOpen={setOpen}
          type="error"
          message={Errors}
        />
      )}
      <form id="contact-form" onSubmit={handleSubmit} className="mt-12">
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-accent">
              {l("name")}
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="input"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-accent">
              {l("email")}
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="johndoe@example.com"
              className="input"
            />
          </div>
        </div>
        <div className="-mx-2 mt-5 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-accent">
              {l("phone")}
            </label>
            <input
              type="number"
              name="phone"
              required
              placeholder="+971 50 000 0000"
              className="input"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-accent">
              {l("type")}
            </label>
            <select
              name="services"
              required
              defaultValue={""}
              className="input"
              id=""
            >
              <option value="" disabled>
                Select your type
              </option>
              {services.map((service) => (
                <option key={service} value={t(`services.${service}`)}>
                  {t(`services.${service}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm text-accent"></label>
          <input
            required
            type="text"
            name="address"
            placeholder="123 Street, City"
            className="input"
          />
        </div>
        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-accent">
            {l("message")}
          </label>
          <textarea
            required
            name="message"
            className="input h-32"
            placeholder="Message"
          ></textarea>
        </div>

        <button
          className="mt-5 w-full bg-secondary text-primary flex items-center justify-center gap-x-3 py-4"
          disabled={Loading}
          type="submit"
        >
          {!Loading ? (
            <>
              {b("send")} <RiMailSendFill />
            </>
          ) : (
            <> {b("sending")}</>
          )}
        </button>
      </form>
    </>
  );
}

export default ContactForm;
