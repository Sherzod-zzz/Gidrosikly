import React, { useContext } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Rating,
} from "@material-tailwind/react";
import { MainContext } from "../../../context/useMainContext";
import LikedProducts from "../../liked-proucts";
import { Icons } from "../../../assets/icons";

function LikeModal({ open, handleOpen }) {
	const { cartItems, likeItems } = useContext(MainContext);
	return (
		<>
			<Dialog
				open={open}
				handler={handleOpen}
				className="h-[600px] overflow-y-auto bg-gray"
			>
				<DialogHeader className="flex justify-between">
					<p>{likeItems ? "Like modal" : "Like modal is empty"}</p>
					<button onClick={handleOpen}>
						<Icons.closeIcon />
					</button>
				</DialogHeader>
				<DialogBody>
					{likeItems ? (
						<div className="flex flex-col gap-y-7 bg-white">
							{likeItems.map(el => (
								<LikedProducts
									key={el.id}
									data={el}
									cart={cartItems.some(item => item.id == el.id)}
								/>
							))}
						</div>
					) : (
						<h2>Likebox is empty</h2>
					)}
				</DialogBody>
			</Dialog>
		</>
	);
}

export default LikeModal;
