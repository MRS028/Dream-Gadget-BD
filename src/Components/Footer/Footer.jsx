import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-[80%] mx-auto">
      <div className="flex flex-col text-center my-5">
        <h3 className="font-bold text-4xl opacity-85">Gadget Heaven</h3>
        <p className="text-sm w-[75%] mx-auto py-4 opacity-85">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="footer bg-white grid grid-cols-2 p-10 w-[90%] mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      </section>
    </>
  );
};

export default Footer;
