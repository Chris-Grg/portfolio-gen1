import "./ContactFormStyle.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i2xk54a",
        "template_6rq9cso",
        form.current,
        "qvdV1vmLAV-9hcy93"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="heading">Enter Details here</h2>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="text" name="subject"></input>
      <label>Message</label>
      <textarea
        rows="6"
        placeholder="Type your message here"
        name="message"
      ></textarea>
      <button className="btn">Submit</button>
    </form>
  );
};
export default ContactForm;
