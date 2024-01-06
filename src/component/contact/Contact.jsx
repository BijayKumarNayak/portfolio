import React from "react";
import Container from "../container/Container";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://contactform-517d5-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
        data
      );

      if (res.status == 200) {
        alert(`Message Send sucessfully`);
      }
    } catch (error) {
      console.log("Error!", error);
    }

    reset();
  };
  return (
    <div
      className="w-full h-full text-white bg-gradient-to-b from-slate-700 to-slate-900"
      id="contact"
    >
      <Container>
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col w-full gap-3 md:w-1/2">
            <h3 className="text-4xl font-bold ">Contact Us</h3>
            <div className="flex items-center gap-2">
              <i className="text-lg fa-solid fa-phone"></i>
              <p className="text-lg">1234567890</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="text-lg fa-regular fa-envelope"></i>
              <p className="text-lg">abc@gamil.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 p-3"
            >
              <label className="text-white">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                {...register("Name", { required: true })}
                className="p-2 rounded-md focus:outline-none text-black"
              />
              {errors.Name && <p className="text-red-600">Required</p>}
              <label className="text-white">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                {...register("Email", { required: true })}
                className="p-2 rounded-md focus:outline-none text-black"
              />
              {errors.Email && <p className="text-red-600">Required</p>}

              <label className="text-white">Message</label>
              <textarea
                rows="4"
                cols="50"
                placeholder="Enter Your Message"
                {...register("Message", { required: true })}
                className="p-2 rounded-md focus:outline-none text-black"
              />
              {errors.Message && <p className="text-red-600">Required</p>}
              <button
                type="submit"
                className="w-1/2 p-2 m-auto mt-3 text-white bg-blue-600 rounded hover:bg-blue-500"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
