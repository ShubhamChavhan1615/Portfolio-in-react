import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bmdpjkga", userInfo);
      console.log("success");
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Me</h1>
      <span className="block text-center mb-6 text-gray-600">
        Please fill out the form below to contact me
      </span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full max-w-md px-8 py-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl"
        >
          <h1 className="text-xl font-semibold mb-4 text-gray-800">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              {...register("name", { required: true })}
              className={`shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              {...register("email", { required: true })}
              className={`shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              className={`shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              id="message"
              name="message"
              placeholder="Enter your query"
              rows="4"
            />
            {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-lg px-4 py-2 hover:bg-slate-700 duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
