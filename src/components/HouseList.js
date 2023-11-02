import React, { useContext } from "react";

// Context
import { HouseContext } from "../HouseContext/HouseContext";

// Components
import House from "./House";

// Link
import { Link } from "react-router-dom";

// Icons
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // console.log("HOUSE", houses);


  // if loading is true 
  if (loading) {
    return(
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[120px]"/>
    )
  }

  if (houses.length < 1 ) {
    return (
      <div className="text-center text-gray-400 text-3xl mt-48">Sorry, nothing found</div>
    )
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
        {houses.map((house, index) => {
          // Destructure house
          const {id} = house
          return (
            <Link key={index} to={`/property/${id}`} >
              <House house={house}/>
            </Link>
          )
        })}
      </div>
      </div>
    </section>

  )
};

export default HouseList;
