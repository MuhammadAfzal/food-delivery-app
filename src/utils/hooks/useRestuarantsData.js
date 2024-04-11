import { useEffect, useState } from "react";
import { RESTUARANT_LIST_API } from "../constants";

const useRestuarantsData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTUARANT_LIST_API);
      const json = await response.json();
      const restuarants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurants(restuarants);
      setFilteredRestaurants(restuarants);
    } catch (error) {
      console.error("Error fetching restaurant data", error);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestuarantsData;
