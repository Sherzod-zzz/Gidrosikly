import React, { useContext } from "react";
import { Icons } from "../../assets/icons";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/useMainContext";

const ProductCard = ({ data, cart, like }) => {
	const { addToCart, removeFromCart, addToLike, removeFromLike } =
		useContext(MainContext);
	return (
		<div className="w-[270px] h-full relative border-2 border-gray flex flex-col items-center justify-center gap-5">
			<button
				onClick={() => (like ? removeFromLike(data.id) : addToLike(data))}
				className=" border-none absolute top-4 right-5"
			>
				<Icons.likeIcon color={like && "red"} />
			</button>
			<Link to={`/info/${data?.id}`}>
				<img src={data?.image} alt={data?.title} />
			</Link>
			<h2 className="flex text-center self-center	text-xl font-bold  mb-4 ml-4">{data?.title}</h2>

			<button
				onClick={() => (cart ? removeFromCart(data.id) : addToCart(data))}
				className={
					cart
						? "absolute bottom-0 right-0 rounded-tl-xl border-primary border-2 bg-white p-3 px-5"
						: "absolute bottom-0 right-0 rounded-tl-xl border-2 border-primary bg-primary p-3 px-5"
				}
			>
				<Icons.cartIcon color={cart ? "dark" : "light"} />
			</button>
		</div>
	);
};

export default ProductCard;
