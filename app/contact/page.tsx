"use client";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      phone,
      location,
      reason,
      message,
      date: new Date().toISOString(),
    };

    const oldData = JSON.parse(localStorage.getItem("contacts") || "[]");
    oldData.push(contactData);
    localStorage.setItem("contacts", JSON.stringify(oldData));

    alert("Message saved successfully!");
    console.log(oldData);

    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setReason("");
    setMessage("");
  };

  return (
    <div className="bg-yellow-400 min-h-screen">
      <Navbar />

      <div className="text-center mt-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Contact Us
        </h1>
        <p className="mt-4 text-base sm:text-lg font-semibold max-w-xl mx-auto">
          Send us a message and we’ll get back to you as soon as possible.
          Looking forward to hearing from you.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto flex flex-col gap-4 p-4 sm:p-6 mt-8 bg-yellow-400 rounded-lg "
      >
        <label className="font-semibold">NAME</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="p-3 border-2 border-black rounded w-full"
          required
        />

        <label className="font-semibold">EMAIL</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="p-3 border-2 border-black rounded w-full"
          required
        />

        <label className="font-semibold">PHONE NUMBER</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          placeholder="Enter your phone number"
          className="p-3 border-2 border-black rounded w-full"
        />

        <label className="font-semibold">LOCATION</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 border-2 border-black rounded w-full"
        >
          <option value="">Select location</option>
          <option>Karachi</option>
          <option>Lahore</option>
          <option>Islamabad</option>
          <option>Other</option>
        </select>

        <label className="font-semibold">REASON FOR CONTACT</label>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="p-3 border-2 border-black rounded w-full"
        >
          <option value="">Select reason</option>
          <option>Wedding</option>
          <option>Event</option>
          <option>Photography</option>
          <option>Other</option>
        </select>

        <label className="font-semibold">YOUR MESSAGE</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message"
          className="p-4 border-2 border-black rounded w-full h-32 resize-none"
        />

        <button
          type="submit"
          className="mt-4 px-6 py-2 border-2 border-black font-bold hover:bg-black hover:text-yellow-400 transition w-full sm:w-auto mx-auto"
        >
          SEND
        </button>
      </form>
      <p className="text-center mt-6 font-semibold text-sm px-4">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>

      <div className="flex justify-center mt-4 mb-10">
        <a href="#" className="font-bold hover:underline">
          MANAGE CONSENT PREFERENCE
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
