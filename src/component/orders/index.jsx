import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { MainContext } from "../../context/useMainContext";
import axios from "axios";
import StoreProducts from "../store-products";
import { message } from "antd";

const OrderForm = () => {
	const { cartItems } = useContext(MainContext);
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	let totalSum = 0;

	for (const key of cartItems) {
		totalSum = totalSum + key.price * key.quantity;
	}

	console.log(cartItems);
	async function onSubmit(data) {
		setLoading(true);
		if (cartItems?.length) {
			try {
				const res = await axios.post(`${import.meta.env.VITE_API_ORDER}/test`, {
					...data,
					products: cartItems,
				});

				if (res.status == 201) {
					message.success("Your order has been successfully received!!!");
					localStorage.clear("cartItems");
					setTimeout(function () {
						window.location.href = "/";
					}, 3000);
				}
			} catch (error) {
				message.error("Error");
				console.log(error);
			} finally {
				setLoading(false);
			}
		} else {
			message.error("You have not chosen any products !!!");
		}
	}

	return (
		<div className="container">
			<h2 className="text-[44px] mt-10">Оформление заказа</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex items-start gap-8">
					<div className="w-[711px] border-2 border-gray py-6 px-8">
						<h3 className="text-lg font-normal leading-8 text-title-color">
							1. Контактные данные
						</h3>

						<div className="grid grid-cols-2 gap-5">
							<div className="flex flex-col">
								<label
									htmlFor="lastName"
									className="mt-4 text-xs font-normal leading-5 text-title-color"
								>
									Фамилия
								</label>

								<input
									type="text"
									{...register("lastName", {
										required: "This last name field is required",
										min: 3,
										message: "Invalid last name",
									})}
									className="py-[10px] px-[18px] border-2 border-gray mt-2"
								/>
								{errors.lastname && (
									<span className="text-red-500">
										{errors.lastname.message}
									</span>
								)}
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="name"
									className="mt-4 text-xs font-normal leading-5 text-title-color"
								>
									Имя
								</label>

								<input
									type="text"
									{...register("name", {
										required: "Name is required",
										min: 3,
										message: "Invalid name",
									})}
									className="py-[10px] px-[18px] border-2 border-gray mt-2"
								/>

								{errors.name && (
									<span className="text-red-500">{errors.name.message}</span>
								)}
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="phone"
									className="mt-4 text-xs font-normal leading-5 text-title-color"
								>
									Телефон
								</label>

								<input
									type="tel"
									{...register("phone", {
										required: "Tel is required",
										min: 13,
										message: "Invalid tel",
									})}
									className="py-[10px] px-[18px] border-2 border-gray mt-2"
								/>
								{errors.phone && (
									<span className="text-red-500">{errors.phone.message}</span>
								)}
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="mail"
									className="mt-4 text-xs font-normal leading-5 text-title-color"
								>
									E-mail
								</label>

								<Controller
									name="email"
									control={control}
									rules={{
										required: "Email is required",

										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Invalid email format",
										},
									}}
									render={({ field }) => (
										<input
											className="py-[10px] px-[18px] border-2 border-gray mt-2"
											{...field}
										/>
									)}
								/>
								{errors.email && (
									<span className="text-red-500">{errors.email.message}</span>
								)}
							</div>
						</div>

						<h3 className="text-lg font-normal leading-8 text-title-color mt-6">
							2. Доставка
						</h3>

						<div className="flex flex-col gap-3 mt-4">
							<div className="flex items-center gap-2">
								<input
									type="radio"
									value="Сдек"
									className="w-5 h-5"
									{...register("value", {
										required: true,
									})}
									id="Сдек"
								/>
								<label
									className="text-lg font-normal leading-6 text-title-color"
									htmlFor="Сдек"
								>
									Сдек
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									type="radio"
									name="variant"
									value="Почта"
									className="w-5 h-5"
									id="Почта России"
									{...register("value", {
										required: true,
									})}
								/>
								<label
									className="text-lg font-normal leading-6 text-title-color"
									htmlFor="Почта России"
								>
									Почта России
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									required
									type="radio"
									value="линии"
									name="variant"
									className="w-5 h-5"
									id="Деловые линии"
									{...register("value", {
										required: true,
									})}
								/>
								<label
									className="text-lg font-normal leading-6 text-title-color"
									htmlFor="Деловые линии"
								>
									Деловые линии
								</label>
							</div>
						</div>

						<h3 className="text-lg font-normal leading-8 text-title-color mt-6">
							3. Оплата
						</h3>

						<div className="flex flex-col gap-3 mt-4">
							<div className="flex items-center gap-2">
								<input
									required
									type="radio"
									value="оплата"
									className="w-5 h-5"
									id="Оплата при получении товара"
									{...register("payment", {
										required: true,
									})}
								/>
								<label
									className="text-lg font-normal leading-6 text-title-color"
									htmlFor="Оплата при получении товара"
								>
									Оплата при получении товара
								</label>
							</div>
							<div className="flex items-center gap-2">
								<input
									required
									type="radio"
									value="банковская карта"
									className="w-5 h-5"
									id="Банковская карта"
									{...register("payment", {
										required: true,
									})}
								/>
								<label
									className="text-lg font-normal leading-6 text-title-color"
									htmlFor="Банковская карта"
								>
									Банковская карта
								</label>
							</div>
						</div>

						<h3 className="text-sm font-normal leading-5 text-title-color mt-6">
							Комментарий
						</h3>
						<textarea
							name="message"
							{...register("message", {
								required: false,
							})}
							className="border-2 border-gray w-full resize-none 
            !h-[100px] p-3 mt-2"
							placeholder="Напишите комментарий"
						></textarea>
					</div>
					<div className="w-1/3 border-gray border-2 py-4 ">
						<h2 className="text-2xl font-semibold mx-6 text-title-color">
							Итого
						</h2>

						<div className="mt-2 border-t-2 border-b-2 border-gray px-4 flex flex-col gap-y-5">
							{cartItems.map(el => (
								<StoreProducts key={el.id} data={el} counter={false} />
							))}
						</div>
						<h3 className="text-base font-normal leading-6 text-title-color mt-6 ml-4">
							Итого:{" "}
							<span className="text-xl font-semibold text-title-color">
								{`${totalSum.toLocaleString()} ₽  `}
							</span>
						</h3>
						<button
							className="text-lg ml-4 rounded-sm flex gap-2 bg-primary px-8 py-2 text-white mt-4"
							type="submit"
							loading={loading}
							disabled={loading}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default OrderForm;
