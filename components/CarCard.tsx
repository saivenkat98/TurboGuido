"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/types";
import { CustomButton, CarDetails } from ".";
import { calculateCarRent, generateCarImageUrl } from "@/utils";

const CarCard = (car: CarCardProps) => {
  const parsedCars = JSON.parse(car.car);
  console.log("ergw:: ",parsedCars);
  const { city_mpg, year, make, model, transmission, drive } = parsedCars[0]; // Destructure from the first object
  const [isOpen,setIsOpen] = useState(false);
  const CarRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="font-semibold text-xl capitalize car-card__card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {CarRent}
        <span className="self-start text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-60 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          alt={model}
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/transmission.png"
              alt="steering wheel"
              height={30}
              width={30}
            />
            <p className="text-[14px] font-bold">
              {transmission==='a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              alt="tire"
              height={20}
              width={20}
            />
            <p className="text-[14px] font-bold">
              FWD
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              alt="fuel"
              height={20}
              width={20}
            />
            <p className="text-[14px] font-bold">
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton 
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-[#2f4f4f]"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="./right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            isDisabled={false}        
            />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModel={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
