const BrandsFilter = ({ title, setSelectedFilters, selectedFilters }) => {
  function handleChecked(e) {
    const isChecked = e.target.checked;
    const value = e.target.value;

    const selectedBrands = selectedFilters.brands;

    if (isChecked && !selectedBrands.includes(value)) {
      setSelectedFilters({
        ...selectedFilters,
        brands: [...selectedBrands, value],
      });
    }

    if (selectedBrands.includes(value) && !isChecked) {
      const currSelectedFilters = [...selectedBrands];

      const index = selectedBrands.indexOf(value);
      currSelectedFilters.splice(index, 1);
      console.log(currSelectedFilters);

      setSelectedFilters({ ...selectedFilters, brands: currSelectedFilters });
    }
  }

  return (
    <div className=" flex items-center gap-2">
      <input
        className=" accent-background-primary"
        onChange={(e) => handleChecked(e)}
        type="checkbox"
        name={title}
        id={title}
        value={title}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default BrandsFilter;
