import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { 
     cloudinaryImageId,
     name, 
     cuisines, 
     avgRating, 
     costForTwo 
    } = resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] bg-[#f0f0f0] rounded-xl hover:bg-gray-300">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-semibold">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};



export default RestaurantCard;
