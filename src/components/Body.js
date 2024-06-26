import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESLIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local state variables -> super powerful variables
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [serachText, setSearchText] = useState("");
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESLIST_API);

    const json = await data.json();

    // optional chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(ListOfRestaurants);
  };

  // check for onlineStatus 
  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) {
    return(
    <h1>
      Looks like you're offline !! please check your Internet Connection{" "}
    </h1>
    )
  }

  //   conditional Rendering-> render on any contion

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black "
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the restaurants card and updates UI
              // serachText
              console.log(serachText);

              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(serachText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          {" "}
          Top Rated restaurants
        </button>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          // console.log(restaurant),
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
