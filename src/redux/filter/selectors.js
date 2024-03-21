import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../catalog/selectors";

export const selectLocation = (state) => state.filter.location;
export const selectEquipment = (state) => state.filter.equipment;
export const selectType = (state) => state.filter.type;

export const selectVisibleCampers = createSelector(
  [selectCampers, selectLocation, selectEquipment, selectType],
  (campers, location, equipment, type) => {
    const filterParts = location
      .toLowerCase()
      .trim()
      .split(",")
      .map((part) => part.trim());
    const [cityFilter, countryFilter] = filterParts;

    let filteredCampers = campers;
    if (equipment) {
      filteredCampers = filteredCampers.filter(
        (item) =>
          item.details &&
          (item.details[equipment] || item.details[equipment] === undefined)
      );
    }

    if (type) {
      filteredCampers = filteredCampers.filter((item) => item.form === type);
    }

    const result = filteredCampers.filter((item) => {
      const [country, city] = item.location.toLowerCase().split(", ");
      return (
        (!cityFilter || city.includes(cityFilter)) &&
        (!countryFilter || country.includes(countryFilter))
      );
    });

    return result;
  }
);
