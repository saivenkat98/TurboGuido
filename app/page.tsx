import Hero from "@/components/Hero";
import { CustomFilter, SearchBar } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels,yearsOfProduction } from "@/constants";

export default async function Home({searchParams}) {
  const allcars = await fetchCars({
    manufacturer: searchParams.manufacturer || 'Audi',
    model: searchParams.model || 'R8',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || ''
  });
  console.log(allcars)
  const isDataEmpty = (allcars: string): boolean =>{
    try {
      const data = JSON.parse(allcars);
      return !(Array.isArray(data) && data.length > 0 && data.every(obj => obj && typeof obj === "object"));
    } catch {
      return true; // JSON parsing failed
    };
  }
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home-text__container">
          <h1 className="text-6xl font-extrabold">Car Catalogue</h1>
          <p className="text-xl">Explore cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        <br/>
        { !isDataEmpty(allcars) ? (
          <section>
            <div className="home-cars__wrapper">
                <CarCard car={allcars} />
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-x1 font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
