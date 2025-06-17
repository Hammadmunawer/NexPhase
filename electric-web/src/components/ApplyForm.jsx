import React, { useState } from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const inputClass = "w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-10">
        <h1 className="text-3xl font-bold text-center  mb-6">Apply Now</h1>

        {/* 1. Personal Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">1. Personal Information</h2>
          <input name="fullName" placeholder="Full Name" onChange={handleChange} className={inputClass} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} className={inputClass} required />
          <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} className={inputClass} required />
          <input name="dob" type="date" onChange={handleChange} className={inputClass} />
          <input name="address" placeholder="Address" onChange={handleChange} className={inputClass} />
          <input name="city" placeholder="City" onChange={handleChange} className={inputClass} />
          <input name="country" placeholder="Country" onChange={handleChange} className={inputClass} />
        </section>

        {/* 2. Educational & Professional Background */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">2. Educational & Professional Background</h2>
          <input name="highestDegree" placeholder="Highest Degree" onChange={handleChange} className={inputClass} />
          <input name="university" placeholder="University/Institute" onChange={handleChange} className={inputClass} />
          <input name="graduationYear" type="number" placeholder="Graduation Year" onChange={handleChange} className={inputClass} />
          <input name="certifications" placeholder="Certifications (comma separated)" onChange={handleChange} className={inputClass} />
        </section>

        {/* 3. Work Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">3. Work Experience</h2>
          <input name="company" placeholder="Company Name" onChange={handleChange} className={inputClass} />
          <input name="position" placeholder="Job Title/Position" onChange={handleChange} className={inputClass} />
          <input name="yearsOfExperience" type="number" placeholder="Years of Experience" onChange={handleChange} className={inputClass} />
          <textarea name="jobDescription" placeholder="Job Responsibilities" onChange={handleChange} className={`${inputClass} h-24 resize-none`} />
        </section>

        {/* 4. Skills & Qualifications */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">4. Skills & Qualifications</h2>
          <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className={inputClass} />
          <textarea name="strengths" placeholder="Strengths" onChange={handleChange} className={`${inputClass} h-24 resize-none`} />
          <textarea name="achievements" placeholder="Achievements" onChange={handleChange} className={`${inputClass} h-24 resize-none`} />
        </section>

        {/* 5. Employment Terms */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">5. Employment Terms</h2>
          <input name="availability" placeholder="Availability (e.g., Immediate, 2 weeks)" onChange={handleChange} className={inputClass} />
          <input name="expectedSalary" placeholder="Expected Salary" onChange={handleChange} className={inputClass} />
          <input name="workLocation" placeholder="Preferred Work Location" onChange={handleChange} className={inputClass} />
          <select name="relocation" onChange={handleChange} className={inputClass}>
            <option value="">Willing to Relocate?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </section>

        {/* 6. Resume/CV Upload */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">6. Resume/CV Upload</h2>
          <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} className={inputClass} />
        </section>

        <div className="text-center">
          <button type="submit" className="bg-[#1DB7B2] text-white font-semibold px-6 py-2 rounded-md  transition duration-200">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;