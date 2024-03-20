import React, { useContext, useEffect, useState } from "react";
import { Breadcrumb, Footer, Header } from "../../component";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/product-card";
import Skeleton from "react-loading-skeleton";
import { MainContext } from "../../context/useMainContext";

const Products = () => {
	const { category } = useParams();
	const { cartItems, likeItems } = useContext(MainContext);
	const [data, setData] = useState([]);

	async function getData() {
		return await fetch(
			`${import.meta.env.VITE_API_URL}/products?category=${category}`
		)
			.then(res => res.json())
			.then(json => setData(json));
	}

	useEffect(() => {
		getData();
	}, [category]);

	return (
		<>
			<Header />
			<Breadcrumb link={category} text={category?.toUpperCase()} />

			<div className="container">
				<div className="mt-14">
					{data.length ? (
						data.map(el => (
							<ProductCard
								key={el.id}
								data={el}
								cart={cartItems?.some(item => item.id == el?.id)}
								like={likeItems?.some(item => item.id == el?.id)}
							/>
						))
					) : (
						<div className="grid grid-cols-4 gap-8">
							{Array.from({ length: 1 }).map(item => (
								<Skeleton width={271} height={403} />
							))}
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Products;
