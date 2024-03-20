// import React, { useContext } from "react";
// import { MainContext } from "../../context/useMainContext";

const CategoryCard = ({ data }) => {
	// const { addToCart } = useContext(MainContext);
	const { id, title, image } = data;
	return (
		<div
			key={id}
			className="group hover:shadow-[3px_3px_20px_0px_rgba(50,50,50,0.25)]  transition-all border-2 border-gray rounded-[3px] p-5 relative flex gap-4 "
		>
			<h2 className="text-title-color group-hover:text-primary text-2xl font-bold">
				{title}
			</h2>
			<img src={image} alt={title} className="w-1/2 h-[90px]" />

			<button className="absolute left-5 bottom-5 text-[#CDCDCD] text-sm font-normal">
				Подробее
			</button>
		</div>
	);
};

export default CategoryCard;
