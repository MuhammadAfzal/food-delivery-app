import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utils/hooks/useResturantMenu";
import RestaurantCategory from "./RestuarantCategory";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);
  const [activeIndex, setActiveIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (!itemCards)
    return <h1>Something went wrong! Looks like API has changed.</h1>;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2x'">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card.card.title}
          data={category?.card?.card}
          showItems={index === activeIndex}
          setActiveIndex={() =>
            setActiveIndex(index === activeIndex ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestuarantMenu;
