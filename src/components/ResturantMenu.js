import React, { } from "react";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";

import { useParams } from "react-router";

const RestaurantMenu = () => {
  const {resid}=useParams();
 
  const resinfo=useRestaurentMenu(resid);
  console.log(resinfo)

  


  if (resinfo == null) return <Shimmer />;

  // Extract data
  const { name, cuisines } = resinfo?.cards[2]?.card?.card?.info || {};
  const regularCards = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const itemCards =
    regularCards[3]?.card?.card?.itemCards ||
    regularCards[4]?.card?.card?.itemCards ||
    regularCards[4]?.card?.card?.categories?.[0]?.itemCards || [];
    

  if (!itemCards || itemCards.length === 0) {
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines?.join(",")}</h2>
        <p>No items available for this restaurant.</p>
      </div>
    );
  }

  return (
    <div className="m-4 p-4 w-[530px] rounded-xl bg-gray-300">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h2 className="py-2.5">{cuisines?.join(",")}</h2>
      <h2 className="font-bold">Menu 🚀</h2>
      <ul>
        {itemCards.map((menu, index) => (
          
          <li key={index}>
            {menu?.card?.info?.name} ={" "}
            {(menu?.card?.info?.price / 100 || menu?.card?.info?.defaultPrice / 100 || "N/A")} ₹
          </li>
      
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
