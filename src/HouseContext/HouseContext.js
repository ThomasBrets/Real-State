import React, { useEffect, useState, createContext } from "react";

// Data
import { housesData } from "../data";

// Create Context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  // Return all Coutries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const allProperties = houses.map((house) => {
      return house.type;
    });
    
    // Remove duplicate country
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    
    console.log("ALLCOUNRRIES", uniqueCountries);
    console.log("ALLPROPERTIES",uniqueProperties);

    // Set countries state
    setCountries(uniqueCountries);
    setProperties(uniqueProperties);
    // setPrice(uniquePrice)
  },[]);

  const handleClick = () => {
    console.log("clicked");
  }


  const contextValues = {
    houses,
    setHouses,
    country,
    setCountry,
    countries,
    setCountries,
    property,
    setProperty,
    properties,
    setProperties,
    price,
    setPrice,
    loading,
    setLoading,
    handleClick
  };

  return (
    <HouseContext.Provider value={contextValues}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
