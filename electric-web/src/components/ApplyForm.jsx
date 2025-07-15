import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belgium", "Bhutan",
  "Brazil", "Brunei", "Bulgaria", "Canada", "Chile", "China", "Colombia", "Croatia",
  "Cuba", "Cyprus", "Czech Republic", "Denmark", "Egypt", "Estonia", "Finland", "France",
  "Georgia", "Germany", "Ghana", "Greece", "Hong Kong", "Hungary", "Iceland", "India",
  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Libya",
  "Lithuania", "Luxembourg", "Malaysia", "Maldives", "Malta", "Mexico", "Monaco",
  "Mongolia", "Morocco", "Nepal", "Netherlands", "New Zealand", "Nigeria",
  "North Korea", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
  "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain",
  "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Tunisia", "Turkey", "Turkmenistan", "UAE", "Uganda",
  "Ukraine", "United Kingdom", "United States", "Uzbekistan", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
const ApplyForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-white text-center bg-blue-600 py-4 text-2xl font-bold rounded-md mb-6">
          STED APPLICATION FORM
        </h1>

        {/* Personal Information Section */}
        <div className="mb-8 bg-white px-3 py-2 rounded-md hover:shadow-lg">
          <h2 className="text-lg w-full bg-gray-100 px-4 py-3 rounded-t-md font-semibold text-gray-700 mb-4 -mx-3">
            🧑‍💼 Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name (English) *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">
                Example: John William Smith
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name (Arabic) *
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الكامل باللغة العربية"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-medium mb-1">Nationality *</label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option>Select your nationality</option>
                {countries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select>
            </div>

            {/* Country of Residence */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Country of Residence *
              </label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option>Select your current country</option>
                {countries.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* DOB, Gender, Marital, Dependents */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth *</label>
              <input 
                type="date" 
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender *</label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Marital Status *</label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option value="">Select Status</option>
                <option>Married</option>
                <option>Single</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Dependents *
              </label>
              <input
                type="number"
                placeholder="Enter number"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">
                Include spouse and children
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium mb-1">Personal Email *</label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Contact Number *</label>
              <input
                type="tel"
                placeholder="00966512345678"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">
                Format: 00 + country code + number
              </p>
            </div>
          </div>
        </div>

        {/* Educational & Professional Background */}
        <div className="mb-2 bg-white px-3 py-2 rounded-md hover:shadow-lg">
          <h2 className="text-lg w-full bg-gray-100 px-4 py-3 rounded-t-md font-semibold text-gray-700 mb-4 -mx-3">
            🎓 Educational & Professional Background
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">
                Academic Qualification *
              </label>
              <input
                type="text"
                placeholder="Enter your qualification"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter your highest degree with specialization
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Career Start Year *
              </label>
              <input
                type="number"
                placeholder="YYYY"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  {/* Technical Specialization */}
  <div>
    <label className="block text-sm font-medium mb-1">Technical Specialization *</label>
    <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
      <option>Select your primary field</option>
      <option>Civil Engineering</option>
      <option>Mechanical Engineering</option>
      <option>Electrical Engineering</option>
      <option>Architecture</option>
      <option>Environmental Engineering</option>
      <option>Low Current system</option>
      <option>Sustainability</option>
    </select>
    <p className="text-xs text-gray-500 mt-1">Your main area of technical expertise</p>
  </div>

  {/* Current Position */}
  <div>
    <label className="block text-sm font-medium mb-1">Current Position *</label>
    <input
      type="text"
      placeholder="Type your current job title"
      className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
    />
    <p className="text-xs text-gray-500 mt-1">Your current job title or role</p>
  </div>
</div>


         <div>
  <label className="block text-sm font-medium mb-1">
Position Applied For *  </label>
  <input
    type="text"
    placeholder="Enter the position your applying for at STED"
    className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
  />
  <p className="text-xs text-gray-500 mt-1">
Specify your target role or position at STED  </p>
          </div>
        </div>
        
         {/* Work Experience*/}
        <div className="mb-2 bg-white px-3 py-2 rounded-md hover:shadow-lg">
          <h2 className="text-lg w-full bg-gray-100 px-4 py-3 rounded-t-md font-semibold text-gray-700 mb-4 -mx-3">
             Work Experience
          </h2>
          <div>
  <label className="block text-sm font-medium mb-1">
    Most Recent Position
  </label>
  <input
    type="text"
    placeholder="Enter your current/job position"
    className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
  />
  <p className="text-xs text-gray-500 mt-1">
    Your current or most recent job title before applying
  </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
           <div>
  <label className="block text-sm font-medium mb-1">
    Current/Previous Basic Salary
  </label>

  <div className="flex w-full mt-1">
    {/* SAR label with matching border */}
    <span className="border border-r-0 rounded-l-md px-3 py-2 text-gray-600 bg-gray-100">
      SAR
    </span>

    {/* Input field seamlessly joined */}
    <input
      type="number"
      placeholder="Enter amount"
      className="w-full border border-l-1 rounded-r-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
    />
  </div>

  <p className="text-xs text-gray-500 mt-1">
    Monthly basic salary in Saudi Riyals
  </p>
</div>


            <div>
              <label className="block text-sm font-medium mb-1">Current/Previous Benefits</label>
              <div className="flex w-full mt-1">
    {/* SAR label with matching border */}
    <span className="border border-r-0 rounded-l-md px-3 py-2 text-gray-600 bg-gray-100">
      SAR
    </span>

    {/* Input field seamlessly joined */}
    <input
      type="number"
      placeholder="Enter amount"
      className="w-full border border-l-1 rounded-r-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
    />
  </div>
              <p className="text-xs text-gray-500 mt-1">
                Monthly allowances and benefits in Saudi Riyals
              </p>
            </div>
          </div>

          {/* Years of Experience */}
          <h3 className="text-md font-semibold mt-8 mb-2">Years of Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Testing & Commissioning */}
  <div>
    <label className="block text-sm font-medium mb-1">Testing & Commissioning *</label>
    <div className="flex w-full">
      <input
        type="number"
        placeholder="Enter years"
        className="w-full border border-r-0 rounded-l-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
      />
      <span className="border border-l-1 rounded-r-md px-3 py-2 text-gray-600 bg-gray-100">
        Years
      </span>
    </div>
    <p className="text-xs text-gray-500 mt-1">Experience in testing & commissioning</p>
  </div>

  {/* Construction Field */}
  <div>
    <label className="block text-sm font-medium mb-1">Construction Field *</label>
    <div className="flex w-full">
      <input
        type="number"
        placeholder="Enter years"
        className="w-full border border-r-0 rounded-l-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
      />
      <span className="border border-l-1 rounded-r-md px-3 py-2 text-gray-600 bg-gray-100">
        Years
      </span>
    </div>
    <p className="text-xs text-gray-500 mt-1">Total construction industry experience</p>
  </div>

  {/* Leadership/Managerial */}
  <div>
    <label className="block text-sm font-medium mb-1">Leadership/Managerial *</label>
    <div className="flex w-full">
      <input
        type="number"
        placeholder="Enter years"
        className="w-full border border-r-0 rounded-l-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
      />
      <span className="border border-l-1 rounded-r-md px-3 py-2 text-gray-600 bg-gray-100">
        Years
      </span>
    </div>
    <p className="text-xs text-gray-500 mt-1">Experience in leadership roles</p>
  </div>
</div>

        </div>
        {/* Skills & Qualifications Section */}
        <div className="mb-8 bg-white px-3 py-2 rounded-md hover:shadow-lg">
          <h2 className="text-lg w-full bg-gray-100 px-4 py-3 rounded-t-md font-semibold text-gray-700 mb-4 -mx-3">
            🛠️ Skills & Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">English Proficiency *</label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option>Select proficiency level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Fluent</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Your level of English language proficiency</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Technical Skills *</label>
              <input
                type="text"
                placeholder="E.g., AutoCAD, Revit, MS Office, BIM 360"
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-1">List software and technical tools you are proficient in</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Testing & Commissioning Role *</label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option>Select your preference</option>
                <option>Interested</option>
                <option>Not Interested</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Your interest in Testing & Commissioning work</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">QA/QC Role *</label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option>Select your preference</option>
                <option>Interested</option>
                <option>Not Interested</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Your interest in Quality Assurance/Control work</p>
            </div>
          </div>
        </div>

        {/* Employment Terms Section */}
        <div className="mb-8 bg-white px-3 py-2 rounded-md hover:shadow-lg">
          <h2 className="text-lg w-full bg-gray-100 px-4 py-3 rounded-t-md font-semibold text-gray-700 mb-4 -mx-3">
            📄 Employment Terms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Iqama Status</label>
              <select className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200">
                <option>Select status...</option>
                <option>Transferable</option>
                <option>Non-transferable</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">Current status of your Iqama transferability</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Expected Join Date *</label>
              <input 
                type="date" 
                className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200" 
              />
              <p className="text-xs text-gray-500 mt-1">Earliest date you can start working</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Expected Basic Salary *</label>
             <div className="flex w-full mt-1">
    
    <span className="border border-r-0 rounded-l-md px-3 py-2 text-gray-600 bg-gray-100">
      SAR
    </span>

    {/* Input field seamlessly joined */}
    <input
      type="number"
      placeholder="Enter amount"
      className="w-full border border-l-1 rounded-r-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
    />
  </div>
              <p className="text-xs text-gray-500 mt-1">Monthly basic salary expectation in Saudi Riyals</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Expected Benefits *</label>
             <div className="flex w-full mt-1">
    {/* SAR label with matching border */}
    <span className="border border-r-0 rounded-l-md px-3 py-2 text-gray-600 bg-gray-100">
      SAR
    </span>

    {/* Input field seamlessly joined */}
    <input
      type="number"
      placeholder="Enter amount"
      className="w-full border border-l-1 rounded-r-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
    />
  </div>
              <p className="text-xs text-gray-500 mt-1">Expected monthly allowances and benefits in Saudi Riyals</p>
            </div>

         <div>
  <label className="block text-sm font-medium mb-1">Notice Period *</label>
  <div className="flex w-full">
    <input
      type="number"
      placeholder="Enter the number of days"
      className="flex-grow border border-r-0 rounded-l-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
    />
    <span className="border border-l-1 rounded-r-md px-3 py-2 text-gray-600 bg-gray-100">
      Days
    </span>
  </div>
  <p className="text-xs text-gray-500 mt-1">Enter 0 if available for immediate joining</p>
</div>

          </div>
        </div>
           <div>
            <label className="block text-sm font-medium mb-1">Your Motivation *</label>
            <textarea
              rows={4}
              placeholder="Describe your motivation and what makes you a strong candidate for this position..."
              className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
            />
            <p className="text-xs text-gray-500 mt-1">
              Highlight your key strengths and motivation for joining STED
            </p>
          </div>
        {/* Why Should We Hire You Section */}
        <div className="mb-8 bg-white px-3 py-2 rounded-md hover:shadow-lg">
          <h2 className="text-lg w-full bg-gray-100 px-4 py-3 rounded-t-md font-semibold text-gray-700 mb-4 -mx-3">
            📝 Why Should We Hire You?
          </h2>
          <div>
            <label className="block text-sm font-medium mb-1">Your Motivation *</label>
            <textarea
              rows={4}
              placeholder="Describe your motivation and what makes you a strong candidate for this position..."
              className="w-full border rounded px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
            />
            <p className="text-xs text-gray-500 mt-1">
              Highlight your key strengths and motivation for joining STED
            </p>
          </div>
        </div>

        {/* Resume/CV Upload Section */}
        <div className="mb-8 bg-white px-3 py-2 rounded-md hover:shadow-lg">
          <h2 className="text-lg w-full bg-gray-100 px-4 py-3 rounded-t-md font-semibold text-gray-700 mb-4 -mx-3">
            📄 Resume/CV Upload
          </h2>
          <div>
            <label className="block text-sm font-medium mb-1">Upload Your CV *</label>
            <div className="flex w-full mt-1">
             <span className="border border-r-0 rounded-l-md px-3 py-2 text-gray-600 bg-gray-100">
      Choose 
    </span>
            <input
              type="file"
              accept=".pdf"
              className="w-full border border-l-1 rounded-r-md px-4 py-2 focus:border-blue-500 focus:shadow-md focus:outline-none focus:ring-0 transition duration-200"
            />
            </div>
            <ul className="text-xs text-gray-500 mt-2 list-disc list-inside">
              <li>Only PDF format accepted</li>
              <li>Maximum file size: 5MB</li>
              <li>Please ensure your CV is up to date</li>
            </ul>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Send className="w-5 h-5" />
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;