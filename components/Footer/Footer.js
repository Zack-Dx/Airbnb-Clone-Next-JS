import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
          <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
          </div>

          <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Community Guideline</p>
            <p>Community Stories</p>
            <p>Community Events</p>
            <p>Community Forums</p>
            <p>Community Support</p>
          </div>
          <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p>Become a Host</p>
            <p>Host Experiences</p>
            <p>Host Tips</p>
            <p>Host Support</p>
            <p>Host Referrals</p>
          </div>
          <div className="space-y-4 text-sm text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Payment and Refunds</p>
            <p>Cancellation Options</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="text-center font-medium text-sm text-gray-700 bg-gray-100 py-4 border">
          <p>Created with love by Zack@2023</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
