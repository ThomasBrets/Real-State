import React from 'react';

// Image 
import Image from "../assets/img/house-banner.png"

// Components
import Search from "./Search"

const Banner = () => {
  return <section className="h-full max-h-[640px] mb-8 xl:mb-24">
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] leading-none  font-semibold mb-6'>
          <span className='text-violet-700'>Rent</span> Your Dream House With Us.
          </h1>
        <p className='max-w-[480px] mb-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum eum sequi blanditiis dignissimos ea assumenda totam quod, facilis provident nostrum neque? Aspernatur pariatur earum commodi error repellendus ab accusantium!
        </p>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search/>
  </section>;
};

export default Banner;
