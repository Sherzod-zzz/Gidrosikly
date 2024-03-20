import React, { useContext } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from "@material-tailwind/react";
import { MainContext } from "../../../context/useMainContext";
import { Icons } from "../../../assets/icons";
import LikedProducts from "../../liked-proucts";
import StoreProducts from "../../store-products";
import { Link } from "react-router-dom";
import { Orders } from "../../../pages";

function CartModal({ open, handleOpen }) {
	const { likeItems, cartItems } = useContext(MainContext);

	let totalSum = 0;
	for (const key of cartItems) {
		totalSum = totalSum + key.price * key.quantity;
	}

	return (
		<>
			<Dialog
				open={open}
				handler={handleOpen}
				className="relative h-[600px] overflow-y-auto bg-gray"
			>
				<DialogHeader className="flex justify-between items-center">
					<p>{cartItems ? "Cart modal" : "Cart modal is empty"}</p>
					<button onClick={handleOpen}>
						<Icons.closeIcon />
					</button>
				</DialogHeader>
				<DialogBody>
					<div className="h-[500px] overflow-y-auto pb-[145px]">
						{cartItems ? (
							<div className="flex flex-col gap-y-7 bg-white">
								{cartItems.map(el => (
									<StoreProducts key={el.id} data={el} counter={true} />
								))}
							</div>
						) : (
							<h2>Store is empty</h2>
						)}
					</div>
					<div className="overflow-x-auto w-full">
						<div className="absolute bottom-0 left-0 right-0 h-[100px] w-full bg-white p-5 ">
							<h1 className="text-title-color">
								Итого:
								<span className="text-title-color font-bold text-lg">
									{totalSum}
								</span>
							</h1>
							<div className="flex justify-between mt-3">
								<Link
									to={"/orders"}
									className="bg-primary items-center py-1 px-1 rounded-sm pt-2 text-white"
								>
									Оформить заказ
								</Link>
								<Button
									onClick={handleOpen}
									className="text-primary shadow-none bg-white rounded-sm border	 border-primary "
								>
									Продолжить покупки
								</Button>
							</div>
						</div>
					</div>
				</DialogBody>
			</Dialog>
		</>
	);
}

export default CartModal;
