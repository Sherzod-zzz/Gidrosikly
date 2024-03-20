import { Rating } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { MainContext } from "../../context/useMainContext";
import { Icons } from "../../assets/icons";

const StoreProducts = ({ data, counter }) => {
	const { removeFromCart, addOne, removeOne, cartItems } =
		useContext(MainContext);
	const { image, id, title, price, quantity } = data;

	return (
		<>
			<div className="flex gap-x-8 border border-black relative">
				<div className="w-[102px] h-[90px]">
					<img
						src={image}
						alt={title}
						width={102}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="">
					<h3 className="font-bold text-lg text-title-color ">{title}</h3>
					{counter ? (
						<div className="mt-2 flex items-center gap-x-3">
							<button
								disabled={quantity == 1}
								onClick={() => removeOne(id)}
								className="text-black font-extrabold text-lg"
							>
								-
							</button>
							<div className="py-[5px] px-[22px]  border text-title-color font-bold border-black">
								{quantity}
							</div>
							<button
								onClick={() => addOne(id)}
								className="text-black font-bold text-lg"
							>
								+
							</button>
						</div>
					) : (
						""
					)}
					<div className="mt-2 flex gap-x-4 items-center">
						<h1 className="font-bold text-lg text-title-color">
							{price * quantity}
						</h1>
						<h1 className="font-normal text-sm text-blue-gray-600 line-through">
							{price * quantity + price / 2}
						</h1>
					</div>
					<button
						onClick={() => removeFromCart(id)}
						className="absolute top-3 right-3 text-primary"
					>
						<Icons.trashIcon />
					</button>
				</div>
			</div>
		</>
	);
};

export default StoreProducts;
