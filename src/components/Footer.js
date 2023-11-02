import React from 'react';

// logo
import Logo from "../assets/img/logo.svg"

const Footer = () => {
  return <footer className="text-white bg-black text-center py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
      <div className="bg-white p-4 rounded-lg">
        <img src={Logo} alt="" />
      </div>
      <div>
      Copyright &copy; 2023. All rights reserved.
      </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
