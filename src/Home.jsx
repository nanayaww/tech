import Hero from "./components/hero/Hero";
// import products from "./assets/data.json";
import { AiOutlineUpload } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiHandshakeThin } from "react-icons/pi";
import { useState } from "react";
import List from "./components/list/List";
import ProductCard from "./components/card/ProductCard";
// import { useLoaderData } from "react-router-dom";
import data from "/src/assets/data.json";

export default function Home() {
  const [selectedHighlists, setSelectedHighlists] = useState("Most searched");
  // const { phones } = useLoaderData();
  const { phones } = data;

  console.log(data);

  const productsArray = phones.slice(0, 4);

  function handleClickedHighlights(title) {
    setSelectedHighlists(title);
  }

  return (
    <div className=" relative w-[70%] m-auto mt-4">
      <Hero />
      <div className=" mt-4">
        <h3>Browse Categories</h3>
        <div className=" flex gap-5">
          <span className=" bg-background-secondary px-2 py-1 rounded-lg cursor-pointer ">
            Scrap Phones
          </span>
          <span className=" bg-background-secondary px-2 py-1 rounded-lg cursor-pointer">
            {" "}
            Spare parts
          </span>
          <span className=" bg-background-secondary px-2 py-1 rounded-lg cursor-pointer">
            Working Used Phones
          </span>
        </div>
        <h3>Highlighted Listings</h3>
        <div className=" flex flex-col gap-5">
          <ul className=" flex gap-5 border-b border-b-[#e7edf4]">
            <List
              title="Most searched"
              onclick={() => handleClickedHighlights("Most searched")}
              selectedHighlists={selectedHighlists}
            />
            <List
              title="Recent Postings"
              onclick={() => handleClickedHighlights("Recent Postings")}
              selectedHighlists={selectedHighlists}
            />
            <List
              title="Top sellers"
              onclick={() => handleClickedHighlights("Top sellers")}
              selectedHighlists={selectedHighlists}
            />
          </ul>
          <div className=" flex gap-10">
            {productsArray.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-4 flex flex-col gap-5">
        <h3>How It Works</h3>
        <div>
          <div className=" flex items-center gap-2">
            <AiOutlineUpload /> Post Your Scrap
          </div>
          <div className=" border-l border-l-background-secondary ml-2 pl-4 pb-4 text-text-secondary">
            List your scrap phone with details and photo
          </div>
          <div className=" flex items-center gap-2">
            <IoChatbubbleEllipsesOutline /> Chat with buyers
          </div>
          <div className=" border-l border-l-background-secondary ml-2 pl-4 pb-4 text-text-secondary">
            Connect with potential buyers and negotiate
          </div>
          <div className=" flex items-center gap-2">
            <PiHandshakeThin /> Make a Deal
          </div>
          <div className=" pl-6 text-text-secondary">
            Agree on a deal and finalize the transaction
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center mt-5">
        <button
          className=" w-[6rem] bg-background-primary text-white "
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
