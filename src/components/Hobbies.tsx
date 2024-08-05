import React from "react";

const Hobbies = () => {
  return (
    <section className="w-full py-5">
      <h2 className="text-3xl font-bold">Hobbies</h2>
      <ul className="mt-4 list-none list-inside">
        <li>Music</li>
        <li>Coding</li>
        <li>Reading</li>
        <li>Traveling</li>

        {/* Add more hobbies as needed */}
      </ul>
    </section>
  );
};

export default Hobbies;
