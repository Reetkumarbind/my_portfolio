import React from "react";

const PersonalDetails = () => {
  return (
    <section className="w-full py-5">
      <h2 className="text-3xl font-bold">Personal Details</h2>
      <div className="mt-4">
        <p className="mt-1">
          <strong>Address:</strong> #533 Main Street West Guru Angad Nagar,
          Laxmi Nagar, Delhi 110092
        </p>
        <p className="mt-1">
          <strong>Email:</strong> reetkumarbind@gmail.com
        </p>
        <p className="mt-1">
          <strong>Phone:</strong> +91 9738443482
        </p>
        <p className="mt-1">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/reetkumarbind/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/reetkumarbind/
          </a>
        </p>
        <p className="mt-1">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/reetkumarbind"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/reetkumarbind
          </a>
        </p>
        <p className="mt-1">
          <strong>Portfolio:</strong>{" "}
          <a
            href="https://reetkumarbind.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://reetkumarbind.github.io/
          </a>
        </p>
        <p className="mt-1">
          <strong>Skype:</strong> reetkumarbind
        </p>
        <p className="mt-1">
          <strong>Twitter:</strong>{" "}
          <a
            href="https://twitter.com/reetkumarbind"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://twitter.com/REETMEENA/
          </a>
        </p>
        {/* Add more personal details as needed */}
      </div>
    </section>
  );
};

export default PersonalDetails;
