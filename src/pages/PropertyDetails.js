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
  // console.log("ID", id);

  // Get house based on the id
  const house = houses.find((house) => {
    return house.id === parseInt(id);
  });

  console.log("HOUSE", house);

  const {
    name,
    address,
    description,
    type,
    counrty,
    bedrooms,
    bathrooms,
    country,
    surface,
    imageLg,
    price,
    agent,
  } = house;

  return (
    <section>
      <div className="container mx-auto min-h-[800px]">
        {/* name, adress, type, country */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h3 className="text-lg mb-4">{address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 rounded-full px-3 text-white">
              {type}
            </div>
            <div className="bg-violet-500 rounded-full px-3 text-white">
              {country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-500">${price}</div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* image, Bed, Bath, Area, description */}
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={imageLg} alt="image" />
            </div>
            <div className="flex text-violet-700 gap-x-6 mb-6">
              <div className="flex items-center gap-x-2">
                <BiBed className="text-2xl" />
                <div>{bedrooms}</div>
              </div>
              <div className="flex items-center gap-x-2">
                <BiBath className="text-2xl" />
                <div>{bathrooms}</div>
              </div>
              <div className="flex items-center gap-x-2">
                <BiArea className="text-2xl" />
                <div>{surface}</div>
              </div>
            </div>
            <div>
              <div>{description}</div>
            </div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border p-6 border-gray-300 rounded-lg">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold text-lg">{agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
                <div>{agent.phone}</div>
              </div>
            </div>

            {/* form */}
            <form className="flex flex-col gap-y-2">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm"
                type="text"
                placeholder="Phone*"
              />
              <textarea className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 text-sm" placeholder="Message*"></textarea>
              <div className="flex flex-col">
                <button>Send message</button>
                <button>Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
