import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" mt-[4%] bg-secondary-500  text-white p-8 flex justify-around">
        <section className="max-w-xs">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </section>

        <section className="max-w-xs">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <p>Twitter: @example_twitter</p>
          <p>Facebook: /example_facebook</p>
        </section>

        <section className="max-w-xs">
          <h3 className="text-xl font-bold mb-4">Address</h3>
          <p>123 Main Street</p>
          <p>Cityville, State, Zip</p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
