import React, { useContext } from "react";
import Title from "../title";
import { Swiper, SwiperSlide } from "swiper/react";
import image_1 from "../../assets/image/img-1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductCard from "../product-card";
import { Button } from "@material-tailwind/react";
import { MainContext } from "../../context/useMainContext";
import { dataProducts } from "../../constant";
const Products = () => {
	const {cart, like, likeItems,  cartItems} = useContext(MainContext)
	return (
		<section className="mt-20">
			<div className="container">
				<Title>Популярные товары</Title>

				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					navigation={true}
					modules={[Navigation]}
					className="mySwiper mt-6 h-[400px]"
				>
					{dataProducts.map(el => (
						<SwiperSlide>
							<ProductCard
							data={el}
								cart={cartItems.some(item => item.id == el.id)}
								like={likeItems.some(item => item.id == el.id)}

							/>
						</SwiperSlide>
					))}
				</Swiper>

				<Button
					variant="gardient"
					className="py-4 px-11 bg-primary mt-9 block mx-auto w-max"
				>
					Показать еще
				</Button>
			</div>
		</section>
	);
};

export default Products;
