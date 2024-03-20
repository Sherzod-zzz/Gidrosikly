import React from 'react'
import { Rating } from "@material-tailwind/react";
import React, { useContext } from "react";
import { MainContext } from "../../context/useMainContext";

const AddedProducts = () => {
    const LikedProducts = ({ data, cart }) => {
        const { addToCart, removeFromCart } = useContext(MainContext);
        console.log(cart);

        return (
            <div className="flex gap-x-8 border border-black relative">
                <div className="w-[102px] h-[90px]">
                    <img
                        src={data?.image}
                        alt={data?.title}
                        width={102}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="">
                    <h3 className="font-bold text-lg text-title-color ">{data?.title}</h3>
                    <div className="mt-2 flex items-center gap-x-3">
                        <Rating value={4} />
                        <span className="text-sm text-blue-gray-700 font-normal leading-5">
                            (12) отзывов
                        </span>
                    </div>		
                    <div className="mt-2 flex gap-x-4 items-center">
                        <h1 className="font-bold text-lg text-title-color">1 100 475 ₽</h1>
                        <h1 className="font-normal text-sm text-blue-gray-600 line-through">
                            1 200 475 ₽
                        </h1>
                    </div>
                    <button
                        onClick={() => cart ? removeFromCart(data.id) : addToCart(data)}
                        className="absolute top-3 right-3"
                    >
                        {
                            cart ? "- Удалить" : "+ Добавить"
                        }
                    </button>
                </div>
            </div>
        );
    };    
}

export default AddedProducts