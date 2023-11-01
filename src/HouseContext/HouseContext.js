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

  //! Return all Coutries

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

    // console.log("ALLCOUNRRIES", uniqueCountries);
    // console.log("ALLPROPERTIES", uniqueProperties);

    // Set countries state
    setCountries(uniqueCountries);
    setProperties(uniqueProperties);
    // setPrice(uniquePrice)
  }, []);

  // !Search HandleClick

  const handleClick = (str) => {
    // Set Loading
    setLoading(true);

    // Function that checks if the strings includes "(any)"
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // Get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    // Get second value of price and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);

    //! Filter houses

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // if all values are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not default
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) return house;
      }

      // if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.country === country
        )
          return house;
      }

      // if property & price is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.type === property
        )
          return house;
      }
    });

    setTimeout(() => {
      return newHouses < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false);
    }, 1000);
  };

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
    handleClick,
  };

  return (
    <HouseContext.Provider value={contextValues}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
