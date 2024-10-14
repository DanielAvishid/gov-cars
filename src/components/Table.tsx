"use client";
import { getCar, getCars } from "@/services/queries";
import { Car } from "@/types/Cars";
import { useState } from "react";
import Loader from "./Loader";

export default function Table() {
  const [currPage, setCurrPage] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isLoading } = getCars(10, currPage + 1 * 10);
  const cars = data?.result.records;
  console.log(searchValue);

  const { data: currCar, isLoading: isCarLoading } = getCar(searchValue);
  const car = currCar?.result.records;

  const renderedCars = cars?.map((car: Car) => {
    return (
      <div key={car.mispar_rechev} className="grid grid-flow-col gap-20">
        <div>{car.tzeva_rechev}</div>
        <div>{car.shnat_yitzur}</div>
        <div className="w-min">{car.baalut}</div>
        <div className="w-[180px]">{car.kinuy_mishari}</div>
        <div>{car.mispar_rechev}</div>
      </div>
    );
  });

  const renderedCar = car?.map((car: Car) => {
    return (
      <div key={car.mispar_rechev} className="grid grid-flow-col gap-20">
        <div>{car.tzeva_rechev}</div>
        <div>{car.shnat_yitzur}</div>
        <div className="w-min">{car.baalut}</div>
        <div className="w-[180px]">{car.kinuy_mishari}</div>
        <div>{car.mispar_rechev}</div>
      </div>
    );
  });

  return (
    <div className="grid grid-flow-row mx-auto w-full justify-center gap-5">
      <div className="mt-10 mx-auto flex items-center gap-4">
        <button>חפש</button>
        <input
          type="text"
          placeholder="חפש לפי מס' רכב"
          className="bg-gray-100 rounded-sm p-2"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {searchValue !== "" && isCarLoading ? <Loader /> : renderedCar}
      {/* {searchValue === "" && isLoading ? <Loader /> : renderedCars} */}
      <div className="grid grid-flow-col"></div>

      <div className="flex items-center mx-auto gap-4 mt-10">
        <button
          className="border border-black p-4"
          onClick={() => setCurrPage(currPage + 1)}
        >
          עמוד הבא
        </button>
        <div className="border border-black p-4">{currPage + 1}</div>
        <button
          className="border border-black p-4"
          onClick={() => {
            if (currPage === 0) return;
            setCurrPage(currPage - 1);
          }}
        >
          עמוד קודם
        </button>
      </div>
    </div>
  );
}
