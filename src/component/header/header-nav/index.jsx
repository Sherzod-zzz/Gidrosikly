import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
	const navbarData = [
		{
			id: 0,
			text: "Квадроциклы",
			link: "/products/quad-bikes",
		},
		{
			id: 1,
			text: "Катера",
			link: "/products/boat",
		},
		{
			id: 2,
			text: "Гидроциклы",
			link: "/products/hydro-cycles",
		},
		{
			id: 3,
			text: "Лодки",
			link: "/products/boat",
		},
		{
			id: 4,
			text: "Вездеходы",
			link: "/products/off-roads",
		},
		{
			id: 5,
			text: "Снегоходы",
			link: "/products/snowmobiles",
		},
		{
			id: 6,
			text: "Двигатели",
			link: "/products/engines",
		},
		{
			id: 7,
			text: "Запчасти",
			link: "/products/engines",
		},
	];
	return (
		<nav className="w-full bg-gray py-4 flex items-center gap-3 justify-between">
			{navbarData.map(el => (
				<Link
					to={el.link}
					key={el.id}
					className="text-xl font-normal text-title-color"
				>
					{el.text}
				</Link>
			))}
		</nav>
	);
};

export default HeaderNav;
