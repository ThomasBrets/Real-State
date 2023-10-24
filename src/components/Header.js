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
        <Link to="" className='text-violet-900'>log in</Link>
        <Link to="" className='text-violet-900'>Sign up</Link>
      </div>
    </div>
  </header>;
};

export default Header;
