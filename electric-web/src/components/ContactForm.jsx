import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
    // You can send the form data to a backend/API here
  };

  return (
    <section className="px-4 py-10 md:px-10 bg-white">
     

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mt-10 space-y-6 text-left"
      >
        {/* Name */}
        <div>
          <label className="font-semibold text-[#04182B]">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <div className="flex-1">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                required
                className="w-full bg-[#04182B] text-white px-4 py-2 rounded"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                className="w-full bg-[#04182B] text-white px-4 py-2 rounded"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Email & Phone */}
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="font-semibold text-[#04182B]">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#04182B] text-white px-4 py-2 mt-2 rounded"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1">
              <label className="font-semibold text-[#04182B]">Phone</label>
              <input
                type="text"
                name="phone"
                className="w-full bg-[#04182B] text-white px-4 py-2 mt-2 rounded"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="font-semibold text-[#04182B]">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full bg-[#04182B] text-white px-4 py-2 mt-2 rounded"
            value={form.subject}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div>
          <label className="font-semibold text-[#04182B]">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            required
            className="w-full bg-[#04182B] text-white px-4 py-2 mt-2 rounded"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-[#1DB7B2] hover:bg-[#149a99] text-[#04182B] font-semibold px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
