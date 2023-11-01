import React, { useContext, useState, useEffect } from "react";

// Context
import { HouseContext } from "../HouseContext/HouseContext";

// Icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// Headless ui
import { Menu } from "@headlessui/react";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  // console.log("COUNTRY", countries);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      {/* btn */}
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your country</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

          {/* items */}
      <Menu.Items as="ul" className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item as="li" key={index} className="cursor-pointer hover:text-violet-700 transition" onClick={()=> setCountry(country)}>
              {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
