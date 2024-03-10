// Replace these placeholder values with your actual EmailJS Service ID, Template ID, and Public Key
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Button from "./Button";

const SERVICE_ID = "service_scz1vpl";
const TEMPLATE_ID = "template_df8tsay";
const PUBLIC_KEY = "bj2f5Pa0ZG48_KDDx";

export default function Contact() {
  const form = useRef();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value;

    if (!validateEmail(userEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Clear previous email error
    setEmailError("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="container form-container">
      <form ref={form} onSubmit={sendEmail}>
        <h2>📧 Send me a message:</h2>
        <input placeholder="Full Name" type="text" name="user_name" required />
        <input placeholder="E-Mail" type="email" name="user_email" required />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}
        <input placeholder="Subject" type="text" name="subject" required />
        <textarea placeholder="Message" name="message" required />
        <Button className={"contact-button"} type="submit">
          Send Email
        </Button>
      </form>
    </div>
  );
}
