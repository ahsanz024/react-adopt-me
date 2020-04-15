import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Result from "./Result";

const SearchParams = () => {
  // useState is a hook
  // Hooks give back an array, with default value and updater callback func.
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  // Render happens before anything in the useEffect is executed
  // Needs a list of dependencies (e.g. when should it run)
  useEffect(() => {
    // Reset breeds and current selected breed
    setBreeds([]);
    setBreed("");

    // fetch data from pets API
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedNames = apiBreeds.map(({ name }) => name);
      setBreeds(breedNames);
    }, console.error);
    // same as (error) => console.error(error)

    // Depends on [animal, setBreeds, setBreed]
  }, [animal, setBreeds, setBreed]);

  async function requestPets() {
    const { animals } = await pet.animals({ location, breed, type: animal });
    setPets(animals || []);
  }

  return (
    <div className="search-params">
      <h1>{animal}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
