
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauratMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  

  const { resId } = useParams();  // call useParam to get value of restaurant Id(resId) using object destructuring.

  const resInfo= useRestauratMenu(resId); // use own hooks to write a code in modular way 


  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId); // fetching menu data
  //   const jsonResData = await data.json(); // converting fetched data to json

  //   console.log(jsonResData);

  //   // set Restaurant 
  //   setResInfo(jsonResData.data);
  // };

  if (resInfo === null) return <Shimmer />;

  //destructuring the restaurant info
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

    // menu
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            <h3>{item.card.info.name}</h3>
            <p>
              {"Rs. "}
              {item.card.info.price / 100}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
