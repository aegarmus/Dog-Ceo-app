import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Cards } from "../components/Cards";
import { dogImg, getBreeds } from "../helpers/getBreeds";
import "./selectBreeds.css";

const SelectBreed = () => {
  const [breeds, setBreeds] = useState([]);
  const [breedImage, setBreedImage] = useState([]);
  const [error, setError] = useState(null);

  const searchByFilters = (filters) => {
    const breedNames = filters.map((filter) => filter.value);
    dogImg(breedNames).then((response) => setBreedImage(response));
  };

  const handleSelection = (filters) => {
    filters && filters.length ? searchByFilters(filters) : setBreedImage([]);
  };

  useEffect(() => updateBreeds(), []);

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
        setError("Error loading doggys :c");
      });
  };

  return (
    <>
      <Grid className="container-grid-select" xs={12}>
        <Select
          isMulti
          name="breeds"
          options={breeds}
          className="basic-multi-select breed-select"
          classNamePrefix="select"
          onChange={handleSelection}
        />
      </Grid>
      <Grid className="container-grid-title" container xs={12}>
        <Grid item className="item-grid-title" xs={12}>
          <h2 className="title-text">Dog Breeds</h2>
        </Grid>
      </Grid>
      {breedImage.length ? (
        <Cards breedImage={breedImage} />
      ) : (
        <h2 className="no-filter">Please select a filter</h2>
      )}
    </>
  );
};

export default SelectBreed;
