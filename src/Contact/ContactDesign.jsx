import React, { useState } from "react";

const ContactDesign = () => {

  
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(""); 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    setSuccess("");

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Message sent successfully");
    }
  };

  return (
    <section className="min-h-screen bg-[#b8d7e8] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full grid md:grid-cols-2 overflow-hidden">

        {/* Left Side - Form */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6 text-primary">Contact Us</h1>

          {/* FORM START */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Message"
                className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none h-28"
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl transition"
            >
              Send Message
            </button>
            {success && (
              <p className="text-green-600 text-base mt-2 font-medium">
                {success}
              </p>
            )}
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex items-center justify-center p-6 bg-white">
          <img
            src="/contact.png"
            alt="contact"
            className="w-full rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactDesign;
