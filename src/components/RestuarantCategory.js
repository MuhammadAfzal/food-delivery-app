import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setActiveIndex }) => {
  clickHandle = () => {
    setActiveIndex();
  };
  return (
    <div className="bg-gray-50 shadow-lg p-4 w-6/12 mx-auto my-6">
      <div
        className="flex justify-between cursor-pointer"
        onClick={clickHandle}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⌄</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
