"use client";
import { AnimatedTextCharacter, FadeInDiv } from "@/app/animations";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_3cg3cyi",
        "template_8jv5ude",
        {
          from_name: form.name,
          to_name: "Michael",
          from_email: form.email,
          to_email: "mixalismeliop@gmail.com",
          message: form.message,
        },
        "PT2cBtRUGgQLlI3DD"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  return (
    <>
      <AnimatedTextCharacter
        text="Contact Me"
        className="margin med"
        myDelay={0.5}
      />
      <FadeInDiv myDelay={1} className="contact_form">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
            />
          </label>
          <button type="submit">{loading ? "Sending..." : "Send"}</button>
        </form>
      </FadeInDiv>
    </>
  );
};

export default ContactSection;
