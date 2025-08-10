import React from "react";

import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col items-center gap-5 pb-4 mt-15">
      <div className=" flex gap-20 text-text-secondary">
        <span className="footer-link">About</span>
        <span className="footer-link">Contact</span>
        <span className="footer-link">Help</span>
        <span className="footer-link">Privacy Policy</span>
      </div>
      <div className=" flex gap-20 text-text-secondary">
        <CiInstagram size="1.5em" className="socials" />
        <CiFacebook size="1.5em" className="socials" />
        <CiTwitter size="1.5em" className="socials" />
      </div>
      <div className=" text-text-secondary ">
        <p>&copy; 2025 TechCycle. All rights reserved.</p>
      </div>
    </div>
  );
}
