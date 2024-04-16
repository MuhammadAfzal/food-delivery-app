import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	}
  return (
    <div className="text-center p-4 m-4">
			<h1 className="text-2xl font-bold">Cart</h1>
			<button className="p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
				Clear Cart
			</button>
			<div className="w-6/12 m-auto">
				<ItemList items={cartItems} />
				{!cartItems.legth && <h1>Cart is empty, add items to the cart</h1>}
			</div>
    </div>
  );
};

export default Cart;
