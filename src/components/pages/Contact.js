import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vpsoxco",
        "profile-email-template",
        form.current,
        "user_U4Kj4wZFZCZKtXmFarV2X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="contact-clean">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            placeholder="Message"
            rows="14"
          ></textarea>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            send{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
