import { useLoaderData, useParams } from "react-router-dom";
import profile_img from "./assets/default-profile.png";
import data from "/src/assets/data.json";

const ProductsDetails = () => {
  // const product = useLoaderData();
  const { id } = useParams();
  const { phones } = data;

  const product = phones.find((e) => e.id === id);

  return (
    <div className=" w-full flex flex-col gap-5 p-5 sm:px-10 md:px-40">
      <div className=" flex w-full gap-10 p-5">
        <div className="flex flex-col gap-5  rounded-lg w-25 ">
          <img
            className=" h-20 shadow px-1 py-1.5"
            src={product.image_url}
            alt=""
          />
          <img
            className=" h-20 shadow px-1 py-1.5"
            src={product.image_url}
            alt=""
          />
          <img
            className=" h-20 shadow px-1 py-1.5"
            src={product.image_url}
            alt=""
          />
          <img
            className=" h-20 shadow px-1 py-1.5"
            src={product.image_url}
            alt=""
          />
        </div>
        <img
          className=" h-[20rem] shadow px-1.5 py-2"
          src={product.image_url}
          alt=""
        />
      </div>
      {/* Product */}
      <div>
        <h3>{product.condition}</h3>
        <p className=" text-text-secondary">Posted 2 days ago</p>
        <p className=" font-medium">${product.price_usd}</p>
      </div>
      {/* Selle details */}
      <div className=" w-full flex flex-col gap-5">
        <h2>Seller information</h2>
        <div className=" flex items-center gap-5 rounded-full">
          <img src={profile_img} alt="" />
          <div className=" flex flex-1 justify-between ">
            <div>
              <p>David August</p>
              <p className=" text-text-secondary">Joined 2021</p>
            </div>
            <button className="w-32 bg-background-primary text-white hover:scale-102 duration-300 ease-in-out">
              Chat Now{" "}
            </button>
          </div>
        </div>
        <div className=" flex gap-4">
          <button className=" w-[8rem] bg-background-primary text-white hover:scale-102 duration-300 ease-in-out">
            Call
          </button>
          <button className=" w-[10rem] bg-background-secondary text-text-primary hover:scale-102 duration-300 ease-in-out">
            View Seller Profile
          </button>
        </div>
      </div>
      {/* Product Details */}
      <div className=" flex flex-col gap-2">
        <h2>Item Details</h2>
        <p>{product.description}</p>
        <div>
          <div className="product-attributes">
            <span>Model</span> <span className=" col-2 ">{product.brand}</span>
          </div>
          <div className="product-attributes">
            <span>Storage</span>{" "}
            <span className=" col-2">{product.storage_gb}gb</span>
          </div>
          <div className="product-attributes">
            <span>Ram</span> <span className=" col-2">{product.ram_gb}gb</span>
          </div>
          <div className="product-attributes">
            <span>Condition</span> <span>{product.condition}</span>
          </div>
          <div className="product-attributes">
            <span>Camera</span> <span></span>
          </div>
          <div className="product-attributes grid grid-cols-3 py-2 sm:gap-50 ">
            <span>Defects</span>{" "}
            <span>
              {product?.defects ? product.defects : "Some minor scratches"}
            </span>
          </div>
        </div>
      </div>
      <button className=" w-[10rem] py-1.5 bg-background-secondary text-black">
        Report item
      </button>
    </div>
  );
};

export default ProductsDetails;
