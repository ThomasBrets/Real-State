import React from 'react';

// logo
import Logo from "../assets/img/logo.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="text-white bg-black text-center py-8">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 justify-between items-center">
     <Link to="/">
      <div className="bg-white p-4 rounded-lg">
        <img src={Logo} alt="" />
      </div>
     </Link>
      <div>
      Copyright &copy; 2023. All rights reserved.
      </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
