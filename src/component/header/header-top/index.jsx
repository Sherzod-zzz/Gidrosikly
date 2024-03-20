import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartModal, LikeModal, UserModal } from "../../dialog";
import { Icons } from "../../../assets/icons";
import { MainContext } from "../../../context/useMainContext";
import { Badge } from "@material-tailwind/react";

const HeaderTop = () => {
	const { cartItems, likeItems } = useContext(MainContext);

	const [likeModal, setLikeModal] = useState(false);
	const [cartModal, setCartModal] = useState(false);
	const [userModal, setUserModal] = useState(false);

	const handleLike = () => {
		setLikeModal(!likeModal);
	};

	const handleUser = () => {
		setUserModal(!userModal);
	};

	const handleCart = () => {
		setCartModal(!cartModal);
	}; 

	return (
		<>
			<div className="flex item-center justify-between py-5">
				<nav className="flex items-center justify-center gap-x-12">
					<a href="#!" className="text-xl text-title-color font-bold">
						Магазины
					</a>
					<a href="#!" className="text-xl text-title-color font-bold">
						Акции
					</a>
					<Link to="/orders" className="text-xl text-title-color font-bold">
						Доставка и оплата
					</Link>
				</nav>

				<Link to="/">
					<Icons.logoIcon />
				</Link>

				<div className="flex items-center justify-between">
					<a
						href="#!"
						className="flex items-end gap-x-1 text-xl text-title-color font-bold"
					>
						<Icons.locationIcon />
						Москва, ул. Науки 25
					</a>
				</div>

				<div className="flex items-center gap-3">
					<button onClick={() => handleLike()}>
						{likeItems.length ? (
							<Badge content={likeItems.length}>
								<Icons.likeIcon />
							</Badge>
						) : (
							<Icons.likeIcon />
						)}
					</button>
					<button onClick={() => handleUser()}>
						<Icons.userIcon />
					</button>
					<button onClick={() => handleCart()}>
						{cartItems.length ? (
							<Badge content={cartItems.length}>
								<Icons.cartIcon />
							</Badge>
						) : (
							<Icons.cartIcon />
						)}
					</button>
				</div>
				<LikeModal open={likeModal} handleOpen={handleLike} />
				<UserModal open={userModal} handleOpen={handleUser} />
				<CartModal open={cartModal} handleOpen={handleCart} />
			</div>
		</>
	);
};

export default HeaderTop;
