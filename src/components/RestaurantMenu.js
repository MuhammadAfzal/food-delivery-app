import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utils/hooks/useResturantMenu";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestuarantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  if (!itemCards)
    return <h1>Something went wrong! Looks like API has changed.</h1>;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
