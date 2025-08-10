const SellPage = () => {
  return (
    <div className=" w-[70%] m-auto pt-5">
      <h1 className=" text-[1.5rem] font-medium ">List Your Phone</h1>
      <div className="">
        <form className=" flex flex-col gap-5">
          <div className="form-field">
            <label htmlFor="category">Category</label>
            <select
              className="border rounded-lg px-2 py-1 border-background-secondary"
              name="category"
              id="category"
            >
              <option value="scrap">Scrap</option>
              <option value="working">Working</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="e.g. used samsung S22 Ultra"
            />
          </div>
          <div className="form-field">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" placeholder=" Enter price" />
          </div>
          <div className="form-field">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Describe the condition, features and any issues"
            />
          </div>
          <div className="form-field">
            <div>Upload Photos</div>
            <input type="file" name="" id="" />
          </div>
          <div className="form-field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter location"
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-info">Contact</label>
            <input
              type="text"
              name="contact-info"
              id="contact-info"
              placeholder="Your phone number"
            />
          </div>
          <div className=" flex justify-between">
            <button
              className=" w-30 bg-background-primary text-white"
              type="button"
            >
              Preview Ad
            </button>
            <button
              className=" w-30 bg-background-primary text-white"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellPage;
