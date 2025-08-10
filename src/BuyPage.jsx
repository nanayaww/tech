// import { useLoaderData } from "react-router-dom";
import BuySidebar from "./components/BuySidebar";
import ItemsList from "./components/ItemsList";
import { useState } from "react";
import data from "/src/assets/data.json";

const BuyPage = () => {
  // const { brands, phones } = useLoaderData();
  const { brands, phones } = data;
  const [newPhones, setNewPhones] = useState([]);

  function handleFilter(item) {
    const maxPrice = item.price;
    const selectedBrands = item.brands;
    const condition = item.condition;

    const filteredPhones = phones.filter((phone) => {
      if (maxPrice && phone.price_usd >= maxPrice) {
        return false;
      }
      if (condition && phone.category !== condition) {
        return false;
      }
      if (selectedBrands.length > 0 && !selectedBrands.includes(phone.brand)) {
        return false;
      }
      return true;
    });

    setNewPhones(filteredPhones);
    console.log(filteredPhones);

    return;
  }

  return (
    <div className=" flex p-5 ">
      <div>
        <BuySidebar brands={brands} handleFilter={handleFilter} />
      </div>
      <div className=" flex-1">
        <ItemsList phones={newPhones.length > 0 ? newPhones : phones} />
      </div>
    </div>
  );
};

export default BuyPage;
