"use client";

import { ReactElement, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";
import { Input } from "@headlessui/react";
import { manufacturers } from "@/constants";

const SearchButton = ({ otherclasses,handle }: { otherclasses: string, handle: any }) => (
  <button type="submit" className={`px-4 -ml-3 -z-10 ${otherclasses}`} onSubmit={handle}>
    <Image
      src="/magnifying-glass.svg"
      alt=""
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

const Searchbar = () => {
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" || model.trim() === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const pathName = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(pathName,{scroll: false});
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
        <SearchButton otherclasses="sm:hidden" handle={handleSearch}/>
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <Input
          type="text"
          name="model"
          placeholder="Tiguan"
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherclasses="sm:hidden" handle={handleSearch} />
      </div>
      <SearchButton otherclasses="max-sm:hidden" handle={handleSearch} />
    </form>
  );
};

export default Searchbar;
