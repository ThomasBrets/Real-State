import React, { useContext } from "react";

// Data
import { housesData } from "../data";

// Context
import { HouseContext } from "../HouseContext/HouseContext";

// useParams
import { useParams, Link } from "react-router-dom";

// Icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { houses } = useContext(HouseContext);

  // Get the house id
  const { id } = useParams();
  console.log("ID", id);

  // Get house based on the id
  const house = houses.find((house) => {
    return house.id === parseInt(id);
  });

  console.log("HOUSE", house);

  return <div>PropertyDetails</div>;
};

export default PropertyDetails;
