import { createContext, useEffect, useReducer } from "react";
import { useReduce } from "../reduce/store";
import {
	ADD_ONE,
	ADD_TO_CART,
	ADD_TO_LIKE,
	REMOVE_FROM_CART,
	REMOVE_FROM_LIKE,
	REMOVE_ONE,
} from "../reduce/type";
import { data } from "autoprefixer";

export const MainContext = createContext(null);

export function MainContextContainer({ children }) {
	const initialState = {
		cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
		likeItems: JSON.parse(localStorage.getItem("likeItems")) || [],
	};

	const [state, dispatch] = useReducer(useReduce, initialState);

	const addToCart = el => dispatch({ type: ADD_TO_CART, payload: el });

	const removeFromCart = id =>
		dispatch({ type: REMOVE_FROM_CART, payload: id });

	const addToLike = data => dispatch({ type: ADD_TO_LIKE, payload: data });

	const removeFromLike = id =>
		dispatch({ type: REMOVE_FROM_LIKE, payload: id });

	const addOne = id => dispatch({ type: ADD_ONE, payload: id });
	const removeOne = id => dispatch({ type: REMOVE_ONE, payload: id });

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
	}, [state.cartItems]);

	useEffect(() => {
		localStorage.setItem("likeItems", JSON.stringify(state.likeItems));
	}, [state.likeItems]);

	return (
		<MainContext.Provider
			value={{
				addToCart,
				removeFromCart,
				addToLike,
				removeFromLike,
				likeItems: state.likeItems,
				cartItems: state.cartItems,
				addOne,
				removeOne,
			}}
		>
			{children}
		</MainContext.Provider>
	);
}
