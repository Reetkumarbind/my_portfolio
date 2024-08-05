import React from "react";

const Education = () => {
  return (
    <section className="w-full py-5">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">
          Master of Computer Application
        </h3>
        <p className="mt-1">VTU, 2010 - 2013</p>
        <p className="mt-1">CGPA: 8.0</p>
        <p className="mt-1">Major Project : Cloud Data Production For Masses</p>
        <p className="mt-1">Minor: Hospital Management System</p>

        {/* Add more details as needed */}
        <h3 className="text-xl font-semibold">
          Bachelor of Computer Application
        </h3>
        <p className="mt-1">VTU, 2006 - 2010</p>
        <p className="mt-1">CGPA: 8.0</p>
        <p className="mt-1">Major Project : Online Shopping System</p>
        <p className="mt-1">Minor: Library Management System</p>
        {/* Add more details as needed */}
        <h3 className="text-xl font-semibold">Intermediate</h3>
        <p className="mt-1">
          Maharshi Gargey Inter College Kharagpur, 2004 - 2006
        </p>
        <p className="mt-1">Percentage: 66%</p>
        {/* Add more details as needed */}
        <h3 className="text-xl font-semibold">High School</h3>
        <p className="mt-1">
          DR. LOHIYA INTER COLLEGE SAGARPUR BAVAI, 2002 - 2004
        </p>
        <p className="mt-1">Percentage: 65%</p>
        {/* Add more details as needed */}
        <h3 className="text-xl font-semibold">
          Certificate in Computer Science
        </h3>
      </div>
      {/* Add more education details as needed */}
    </section>
  );
};

export default Education;
