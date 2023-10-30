import React from 'react';

// Link
import { Link } from 'react-router-dom';

// Logo
import Logo from "../assets/img/logo.svg"

const Header = () => {
  return <header className="py-6 mb-12 border-b shadow-lg">
    <div className="container  mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-[160px]" />
      </Link>
      {/* Buttons */}
      <div className="flex gap-6 items-center">
        <Link to="" className='text-violet-700 hover:text-violet-900 transition'>log in</Link>
        <Link to="" className='text-white bg-violet-700 hover:bg-violet-800  px-4 py-2 rounded transition'>Sign up</Link>
      </div>
    </div>
  </header>;
};

export default Header;
