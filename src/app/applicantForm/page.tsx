"use client";

import { Form } from "@/components/ui/form";
import React, { useState } from "react";

const Test: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [positionApplied, setPositionApplied] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to submit form data
    console.log("Form submitted:", {
      fullName,
      email,
      phoneNumber,
      street,
      city,
      state,
      zipCode,
      dob,
      gender,
      positionApplied,
      joiningDate,
      resume,
      coverLetter,
    });
  };

  return (
    <div className="mx-auto my-12 max-w-lg border">
      <h1 className="mt-4 text-center text-2xl font-semibold">
        Job Application Form
      </h1>
      <p className="text-center text-sm text-gray-500 mt-3 mb-4">
        Please fill out the form below to submit your job application.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-6 p-8">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-row justify-between max-sm:gap-6">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 p-3 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="positionApplied"
            className="block text-sm font-medium text-gray-700"
          >
            Position Applied
          </label>
          <input
            type="text"
            id="positionApplied"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={positionApplied}
            onChange={(e) => setPositionApplied(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="joiningDate"
            className="block text-sm font-medium text-gray-700"
          >
            Earliest Possible Joining Date
          </label>
          <input
            type="date"
            id="joiningDate"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Resume
          </label>
          <input
            type="file"
            id="resume"
            className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) =>
              setResume(e.target.files ? e.target.files[0] : null)
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Letter
          </label>
          <textarea
            className="w-full rounded-md border border-gray-300 px-4 py-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
