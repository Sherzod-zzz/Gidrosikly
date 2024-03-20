import React, { useEffect, useState } from "react";
import { Footer, Header, Products } from "../../component";
import { useParams } from "react-router-dom";
import { Button, Input, Rating } from "@material-tailwind/react";
import { Icons } from "../../assets/icons";

const Info = () => {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	async function getData() {
		return await fetch(`${import.meta.env.VITE_API_URL}/products?id=${id}`)
			.then(res => res.json())
			.then(json => setProduct(json));
	}

	useEffect(() => {
		getData();
	}, [id]);

	console.log(product);

	return (
		<>
			<Header />
			<div className="container">
				<div className="flex items-center justify-between gap-8 mt-10">
					<div className="max-w-[500px] w-[100%] relative h-[579px] border border-blue-gray-100 ">
						<button className="uppercase bg-primary text-white px-7 py-3 rounded-[3px]">
							sale
						</button>
						<div className="mt-6">
							<img
								className="max-w-[500px] w-[100%] max-h-[375px]"
								src={product[0]?.image}
								alt=""
							/>
						</div>
						<h3 className="line-through flex justify-center text-title-color opacity-60 mt-2 text-xl font-light">
							1 200 475 ₽
						</h3>
						<h3 className=" flex justify-center text-title-color mt-2 text-3xl font-bold">
							1 100 475 ₽
						</h3>
						<div className="flex justify-center mt-7">
							<a href="" className="text-primary">
								Нашли дешевле? Снизим цену!
							</a>
						</div>
					</div>
					<div className="">
						<h1 className="w-[570px] font-bold text-3xl">
							Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
						</h1>
						<p className="text-lg font-normal text-blue-gray-200 mt-2 mb-5">
							Код товара: 366666-2
						</p>
						<div className="flex gap-5 items-center">
							<button>
								<Icons.likeIcon />
							</button>
							<div className="">
								<Rating value={4} />
							</div>
						</div>
						<div className="mt-12 flex flex-col gap-y-4 w-[570px]">
							<div className="flex gap-x-16">
								<h3 className="relative before:h-[2px] before:bg-primary before:absolute before:top-6 before:w-[174px]">
									Характеристики
								</h3>
								<h3>Наличие в магазине</h3>
							</div>
							<div className="flex relative justify-between w-[436px] items-center before:h-[1px] before:bg-blue-gray-100 before:absolute before:top-6 before:w-[436px]">
								<p className="">Производитель</p>
								<p className="">Канада</p>
							</div>
							<div className="flex relative justify-between w-[436px] items-center before:h-[1px] before:bg-blue-gray-100 before:absolute before:top-6 before:w-[436px]">
								<p className="">Количество мест, шт:</p>
								<p className="">3</p>
							</div>
							<div className="flex relative justify-between w-[436px] items-center before:h-[1px] before:bg-blue-gray-100 before:absolute before:top-6 before:w-[436px]">
								<p className="">Мощность, л.с.</p>
								<p className="">155</p>
							</div>
							<div className="flex relative justify-between w-[436px] items-center before:h-[1px] before:bg-blue-gray-100 before:absolute before:top-6 before:w-[436px]">
								<p className="">Тип двигателя</p>
								<p className="">Бензиновый</p>
							</div>
							<div className="flex relative justify-between w-[436px] items-center before:h-[1px] before:bg-blue-gray-100 before:absolute before:top-6 before:w-[436px]">
								<p className="">Год выпуска</p>
								<p className="">2018</p>
							</div>
							<div className="mt-2 decoration-solid text-primary">
								<a href="">Показать еще</a>
							</div>
						</div>
						<Button className="px-[70px] py-[16px] bg-primary text-white text-lg font-normal mt-11 rounded-[2px]">
							купить
						</Button>
					</div>
				</div>
				<div className="mt-20">
					<div className="flex items-center">
						<p className="text-lg font-normal">Магазин</p>
						<div className="ml-4">
							<input
								type="text"
								className="rounded bg-gray w-[313px] h-[33px] pl-4"
								placeholder="Поиск"
							/>
						</div>
						<div className="flex gap-3 items-center ml-[155px]">
							<input type="checkbox" />
							<p className="text-lg font-normal">Забрать сегодня</p>
						</div>
						<div className="flex gap-3 items-center ml-[56px]">
							<input type="checkbox" />
							<p className="text-lg font-normal">Забрать в течение недели</p>
						</div>
					</div>
					<div className="flex flex-col gap-y-[50px] mt-5">
						<div className="flex">
							<h2 className="font-normal text-xl">Адрес</h2>
							<h2 className="font-normal text-xl ml-[203px]">Режим работы</h2>
							<h2 className="font-normal text-xl ml-[103px]">Доступно</h2>
							<h2 className="font-normal text-xl ml-[117px]">Количество</h2>
						</div>
						<div className="flex relative items-start before:h-[2px] before:bg-blue-gray-100 before:absolute before:top-16 before:w-[1134px]">
							<p className="">Москва, ул. Науки 25</p>
							<div className="ml-[100px]">
								<div className="flex">
									<p className="">пн-сб:</p>
									<p className="ml-5">08:00-19:00</p>
								</div>
								<div className="flex">
									<p className="">вс:</p>
									<p className="ml-11">09:00-17:00</p>
								</div>
							</div>
							<p className="ml-[96px]">В наличии</p>
							<p className="ml-[131px]">1</p>
							<div className="">
								<Button className="px-[40px] py-[10px] bg-primary text-white text-lg font-normal  rounded-[2px] ml-[228px] flex items-start">
									купить
								</Button>
							</div>
						</div>
						<div className="flex relative items-start before:h-[2px] before:bg-blue-gray-100 before:absolute before:top-16 before:w-[1134px]">
							<p className="">Москва, ул. Науки 25</p>
							<div className="ml-[100px]">
								<div className="flex">
									<p className="">пн-сб:</p>
									<p className="ml-5">08:00-19:00</p>
								</div>
								<div className="flex">
									<p className="">вс:</p>
									<p className="ml-11">09:00-17:00</p>
								</div>
							</div>
							<p className="ml-[96px]">В наличии</p>
							<p className="ml-[131px]">1</p>
							<div className="">
								<Button className="px-[40px] py-[10px] bg-primary text-white text-lg font-normal  rounded-[2px] ml-[228px] flex items-start">
									купить
								</Button>
							</div>
						</div>
						<div className="flex relative items-start before:h-[2px] before:bg-blue-gray-100 before:absolute before:top-16 before:w-[1134px]">
							<p className="">Москва, ул. Науки 25</p>
							<div className="ml-[100px]">
								<div className="flex">
									<p className="">пн-сб:</p>
									<p className="ml-5">08:00-19:00</p>
								</div>
								<div className="flex">
									<p className="">вс:</p>
									<p className="ml-11">09:00-17:00</p>
								</div>
							</div>
							<p className="ml-[96px]">В наличии</p>
							<p className="ml-[131px]">1</p>
							<div className="">
								<Button className="px-[40px] py-[10px] bg-primary text-white text-lg font-normal  rounded-[2px] ml-[228px] flex items-start">
									купить
								</Button>
							</div>
						</div>
						<div className="flex relative items-start before:h-[2px] before:bg-blue-gray-100 before:absolute before:top-16 before:w-[1134px]">
							<p className="">Москва, ул. Науки 25</p>
							<div className="ml-[100px]">
								<div className="flex">
									<p className="">пн-сб:</p>
									<p className="ml-5">08:00-19:00</p>
								</div>
								<div className="flex">
									<p className="">вс:</p>
									<p className="ml-11">09:00-17:00</p>
								</div>
							</div>
							<p className="ml-[96px]">В наличии</p>
							<p className="ml-[131px]">1</p>
							<div className="">
								<Button className="px-[40px] py-[10px] bg-primary text-white text-lg font-normal  rounded-[2px] ml-[228px] flex items-start">
									купить
								</Button>
							</div>
						</div>
					</div>
					<div className="mt-24">
						<h1 className="text-2xl font-bold">С этим товаром покупают</h1>
						<Products />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Info;
