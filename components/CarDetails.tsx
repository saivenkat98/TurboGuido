import { CarCardProps } from "@/types";
import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProp {
  isOpen: boolean;
  closeModel: () => void;
  car: CarCardProps;
}

const CarDetails = ({ isOpen, closeModel, car }: CarDetailsProp) => {
  const parsedCars = JSON.parse(car.car);
  const { city_mpg, year, make, model, transmission, drive } = parsedCars[0]; // Destructure from the first object
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className="flex min-h-full items-center
            justify-center p-4 text-center"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg 
                p-6 max-h-[90vh] overflow-y-auto 
                transform rounded-2xl text-left 
                shadow-xl transition-all flex 
                flex-col gap-5  bg-[#e5e4e2]"
                >
                  <button
                    type="button"
                    className="absolute top-2 bg-primary-blue-100 z-10 right-2 w-fit p-2 rounded-full"
                    onClick={closeModel}
                  >
                    <Image
                      src="/close.svg"
                      alt="exit"
                      height={20}
                      width={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-[#2f4f4f] bg-cover bg-center rounded-lg">
                      {/*  */}
                      <Image
                        src={generateCarImageUrl(car)}
                        fill
                        priority
                        alt="car model"
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-[#e5e4e2] rounded-lg">
                        <Image
                          src={generateCarImageUrl(car,"23")}
                          fill
                          priority
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-[#e5e4e2] rounded-lg">
                        <Image
                          src={generateCarImageUrl(car,"33")}
                          fill
                          priority
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-[#e5e4e2] rounded-lg">
                        <Image
                          src={generateCarImageUrl(car,"09")}
                          fill
                          priority
                          alt="car model"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {make} {model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(parsedCars[0]).map(([key, value]) => (
                        <div
                          className="flex justify-between
                        gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className=" text-gray-400 capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {" "}
                            {value}{" "}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
