import React from "react";

const ApplyForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-white text-center bg-blue-600 py-4 text-2xl font-bold rounded-md mb-6">
          STED APPLICATION FORM
        </h1>

        {/* Personal Information Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
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
                className="w-full border rounded px-4 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">Example: John William Smith</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name (Arabic) *
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الكامل باللغة العربية"
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nationality *</label>
              <select className="w-full border rounded px-4 py-2">
                <option>Select your nationality</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Current Country of Residence *
              </label>
              <select className="w-full border rounded px-4 py-2">
                <option>Select your current country</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth *</label>
              <input type="date" className="w-full border rounded px-4 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender *</label>
              <select className="w-full border rounded px-4 py-2">
                <option>Select gender</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Marital Status *</label>
              <select className="w-full border rounded px-4 py-2">
                <option>Select status</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Number of Dependents *
              </label>
              <input
                type="number"
                placeholder="Enter number"
                className="w-full border rounded px-4 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">Include spouse and children</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Personal Email *</label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Contact Number *</label>
              <input
                type="tel"
                placeholder="00966512345678"
                className="w-full border rounded px-4 py-2"
              />
              <p className="text-xs text-gray-500 mt-1">Format: 00 + country code + number</p>
            </div>
          </div>
        </div>

        {/* Educational & Professional Background */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
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
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Career Start Year *</label>
              <input
                type="number"
                placeholder="YYYY"
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
