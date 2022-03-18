import React, { useState, useEffect, } from "react";
import { getBreeds } from "../helpers/getBreeds";
import Error from "./Error";
import Select from "react-select";
import { dogImg } from "../helpers/dogImg";
import {Cards} from "../components/Cards"

const SelectBreed = ({ updateDog }) => {
  const [breeds, setBreeds] = useState([]);
  const [breedImage, setBreedImage] = useState([])
  const [error, setError] = useState(null);

  const handleSelection = (e) =>{
    if(e.length >= 1 ){
      dogImg(e[e.length - 1].value).then(response => {
        console.log(response, 'aqui')
        setBreedImage(response, ...breedImage)
        console.log(breedImage, 'aqui2')
      })  
    }

  }

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
        console.log(error);
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
    < Cards  breedImage={breedImage} />

    </>

  );
};

export default SelectBreed;
