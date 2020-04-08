import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // useState is a hook
  // Hooks give back an array, with default value and updater callback func.
  const [location, setLocation] = useState("Frankfurt");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
