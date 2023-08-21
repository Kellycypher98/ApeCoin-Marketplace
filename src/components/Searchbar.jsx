import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import "./../index.css";

export default function SearchBar() {
  return (
    <div className="bg-blue-900 py-5">
      <div className="flex flex-col w-full mx-auto gap-2 md:w-max">
        <label htmlFor="search" className="text-white">
          Find any ApeCoin item you are looking for
        </label>
        <div className="relative ">
          <input
            type="search"
            placeholder="I am looking for..."
            className="px-2 w-full"
          ></input>
          <MagnifyingGlassIcon className="h-6 w-5 text-gray-500 !absolute right-1 top-0 " />
        </div>
      </div>
    </div>
  );
}
