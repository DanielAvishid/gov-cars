"use client";

import * as actions from "@/actions";
import { useEffect, useState } from "react";
import { Cars } from "../../types/Cars";

type TableProps = {
  cars?: Cars;
};

export default function Table({ cars }: TableProps) {
  const [currPage, setCurrPage] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="grid grid-flow-row mx-auto w-full justify-center gap-5">
      <div className="mt-10 mx-auto flex items-center gap-4">
        <input
          type="text"
          placeholder="חפש לפי מס' רכב"
          className="bg-gray-100 rounded-sm p-2"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="grid grid-flow-col"></div>
      {cars?.map((car) => (
        <div key={car.mispar_rechev} className="grid grid-flow-col gap-20">
          <div>{car.tzeva_rechev}</div>
          <div>{car.shnat_yitzur}</div>
          <div className="w-min">{car.baalut}</div>
          <div className="w-[180px]">{car.kinuy_mishari}</div>
          <div>{car.mispar_rechev}</div>
        </div>
      ))}
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
