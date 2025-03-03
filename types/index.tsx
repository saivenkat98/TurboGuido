import { MouseEventHandler } from "react";

export interface CustomButtomProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btntype?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setmanufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
}

export interface OptionProps {
  title: string,
  value: string
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}