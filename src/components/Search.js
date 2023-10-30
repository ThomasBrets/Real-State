import React, { useContext } from "react";

// Components
import CountryDropdown from "../components/CountryDropdown";
import PropertyDropdown from "../components/PropertyDropdown";
import PriceRangeDropdown from "../components/PriceRangeDropdown";

// Icons
import { RiSearch2Line } from "react-icons/ri";

// Houses
import { HouseContext } from "../HouseContext/HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 items-center lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={() => handleClick()} className="bg-violet-700 hover:bg-violet-700 transition w-full max-w-[162px] h-14 rounded-lg flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
