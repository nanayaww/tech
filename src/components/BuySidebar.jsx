import { useState } from "react";
import BrandsFilter from "./BrandsFilter";

const BuySidebar = ({ brands, handleFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    condition: "",
    brands: [],
    price: "",
  });

  function handleRadioChange(e) {
    setSelectedFilters({ ...selectedFilters, condition: e.target.value });
    console.log(selectedFilters.condition);
  }

  function handlePriceChange(e) {
    setSelectedFilters({ ...selectedFilters, price: e.target.value });
  }

  return (
    <div className=" flex flex-col gap-4 border-r border-r-background-secondary px-4">
      <h2>Filters</h2>
      <div className=" flex flex-col gap-2">
        <div className="filter-category flex items-center gap-2">
          <input
            onChange={(e) => handleRadioChange(e)}
            type="radio"
            name="filter-category"
            id="scrap"
            value="scrap"
          />
          <label htmlFor="scrap">Scrap</label>
        </div>
        <div className="filter-category flex items-center gap-2">
          <input
            onChange={(e) => handleRadioChange(e)}
            type="radio"
            name="filter-category"
            id="working"
            value="working"
          />
          <label htmlFor="working">Working</label>
        </div>
      </div>
      <div>
        <h3>Brand</h3>
        <div className=" flex flex-col gap-1.5">
          {brands.map((item) => (
            <BrandsFilter
              setSelectedFilters={setSelectedFilters}
              selectedFilters={selectedFilters}
              title={item.brand}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div>
        <h3>Price Range</h3>
        <div className="flex flex-col gap-2">
          <label htmlFor="price-range">Price</label>
          <input
            type="range"
            name="price-range"
            id="price-range"
            min="20"
            max="1000"
            onChange={(e) => handlePriceChange(e)}
          />
        </div>
        <p>{selectedFilters.price}</p>
      </div>
      <div
        className=" flex flex-col gap-2
       "
      >
        <label className=" font-bold text-[1.3rem] " htmlFor="location">
          Location
        </label>
        <input
          className=" border border-background-secondary rounded-lg p-2 placeholder:text-text-secondary "
          type="text"
          name="location"
          id="location"
          placeholder="location"
        />
      </div>
      <div>
        <button
          className=" w-2/4 bg-background-secondary text-black hover:bg-background-primary hover:text-white"
          type="button"
          onClick={() => handleFilter(selectedFilters)}
        >
          Apply filter
        </button>
      </div>
    </div>
  );
};

export default BuySidebar;
