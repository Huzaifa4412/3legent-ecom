import React from "react";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";

const Card = () => {
  return (
    <div className="h-full xl:w-[20vw] w-full md:w-[30vw] bg-white fixed top-0 right-0 z-50 p-5">
      <header className="flex justify-between">
        <h2 className="text-2xl font-semibold text-slate-700">My orders</h2>
        <Image
          src={"/images/navbar/close.svg"}
          alt="Close Icon"
          width={30}
          height={30}
        />
      </header>
      <div className="items w-full my-8 flex flex-col gap-5">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <footer className="absolute bottom-5">
        <h3 className="text-sm font-bold">Items :</h3>
        <h3 className="text-sm font-bold">Amount :</h3>
        <div className="mt-2">
          <PrimaryBtn text="Check Out" arrow={true} />
        </div>
      </footer>
    </div>
  );
};

export default Card;

function CardItem() {
  return (
    <div className="w-full h-[120px] flex justify-between items-center relative gap-2 p-3 rounded-md shadow-lg">
      <Image
        src={"/images/navbar/close.svg"}
        className="absolute top-2 right-2 cursor-pointer"
        alt="Delete Icon "
        width={14}
        height={14}
      />
      <div className="image w-[30%] h-full overflow-hidden py-1">
        <Image
          src={"/images/products/p4.png"}
          alt="Product"
          width={120}
          height={120}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="content w-[70%] h-full flex flex-col justify-evenly items-center">
        <div className="title font-bold  text-slate-600">Cart</div>
        <div className="price text-sm font-semibold ">RS : 150</div>
        <div className="btns">
          <button className="text-xl px-3 border hover:bg-slate-100 duration-200">
            +
          </button>
          <span className="quantity px-3">1</span>
          <button className="text-xl px-3 border hover:bg-slate-100 duration-200">
            -
          </button>
        </div>
      </div>
    </div>
  );
}
