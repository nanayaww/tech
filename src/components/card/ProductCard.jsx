import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className=" w-full col-span-1 shadow rounded-2xl p-2 hover:scale-105 hover:ease-in-out duration-300">
      <div>
        <img className=" w-full h-[12rem]" src={product.image_url} alt="" />
        <p>
          {product.brand} {product.model}
        </p>
        <p className=" text-text-secondary"> {product.condition}</p>

        <p className=" text-text-secondary"> ${product.price_usd}</p>
      </div>
      <Link to={`/${product.id}`}>
        {" "}
        <button
          className=" w-[40%] bg-background-secondary text-black hover:text-white hover:bg-background-primary"
          type="button"
        >
          View
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
