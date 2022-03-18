import React, { useState, useEffect } from "react";
import { getBreeds, dogImg } from "../helpers/getBreeds";
import Error from "./Error";
import Select from "react-select";

import {getAllBreeds} from "../helpers/getBreeds"
import { Cards } from "../components/Cards";
import { filter } from "lodash";

const SelectBreed = ({ updateDog }) => {
  const [breeds, setBreeds] = useState([]);
  const [breedImage, setBreedImage] = useState([]);
  const [error, setError] = useState(null);

 
  
 
  const searchByFilters = (filters) => {
    const breedNames = filters.map (filter => filter.value)
      

      dogImg(breedNames).then((response) => {
        setBreedImage([response]);
        
      });
  }
  const handleSelection = (filters) => {

    filters && filters.length ? searchByFilters (filters) : setBreedImage ([]);

    
  };

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds()
      .then((newBreeds) => {
        const newOptions = [];

        Object.keys(newBreeds).forEach((element) => {
          newOptions.push({ value: element, label: element });
        });
        setBreeds(newOptions);
      })
      .catch((error) => {
      
        setError("Error al cargar las razas");
      });
  };

  return (
    <>
      <Select
        isMulti
        name="colors"
        options={breeds}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleSelection}
      />
      <Cards breedImage={breedImage} />
    </>
  );
};

export default SelectBreed;
