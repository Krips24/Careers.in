// pages/about.tsx

import React from "react";

const page: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-blue-600 py-4 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Welcome to Job Portal</h1>
        </div>
      </header>
      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="mb-4 text-2xl font-semibold">About Us</h2>
          <p className="mb-4 text-lg">
            At Job Portal, we are dedicated to revolutionizing the way people
            find jobs and companies find talent. Our platform is designed to
            make the job search process as efficient and enjoyable as possible.
          </p>
          <p className="mb-4 text-lg">
            With our advanced matching algorithms and intuitive interface, we
            connect job seekers with opportunities that align with their skills
            and interests. Likewise, we help employers find the perfect
            candidates for their open positions quickly and easily.
          </p>
          <h3 className="mb-2 text-xl font-semibold">Our Mission</h3>
          <p className="mb-4 text-lg">
            Our mission is to empower individuals to find meaningful employment
            and help companies build their dream teams. We believe that the
            right job can transform lives and that every company deserves to
            find the talent they need to thrive.
          </p>
          <h3 className="mb-2 text-xl font-semibold">Our Values</h3>
          <ul className="mb-4 list-disc pl-6 text-lg">
            <li>Integrity: We operate with honesty and transparency.</li>
            <li>Innovation: We continuously strive to improve and innovate.</li>
            <li>Collaboration: We believe in the power of teamwork.</li>
            <li>Customer Focus: We prioritize the needs of our users.</li>
            <li>Respect: We treat everyone with dignity and respect.</li>
          </ul>
          <h3 className="mb-2 text-xl font-semibold">Our Team</h3>
          <p className="mb-4 text-lg">
            Behind Job Portal is a diverse team of passionate individuals
            dedicated to making a positive impact on the world of employment.
            From software engineers to customer support specialists, each member
            of our team plays a vital role in achieving our mission.
          </p>
          <p className="text-lg">
            Thank you for choosing Job Portal. We&apos;re committed to helping
            you achieve your career goals and build the team of your dreams.
          </p>
        </div>
      </main>
      <footer className="bg-blue-600 py-4 text-white">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default page;
