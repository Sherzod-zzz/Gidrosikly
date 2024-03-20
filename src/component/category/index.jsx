import React, { useEffect, useState } from "react";
import { categoryData } from "../../constant";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import CategoryCard from "../category-card";

const Category = () => {
	const [data, setData] = useState([]);

	async function getData() {
		return await fetch(`${import.meta.env.VITE_API_URL}/products`)
			.then(res => res.json())
			.then(json => setData(json));
	}

	useEffect(() => {
		getData();
	}, []);

	console.log(data);
	return (
		<section className="mt-20">
			<div className="container">
				<div className="grid grid-cols-3 gap-8">
					{data.length
						? data.map(el => (
								<Link to={`/products/${el.category}`}>
									<CategoryCard data={el} />
								</Link>
						  ))
						: Array.from({ length: 6 }).map(el => (
								<Skeleton width={370} height={120} />
						  ))}
				</div>
			</div>
		</section>
	);
};

export default Category;
