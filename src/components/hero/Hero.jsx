import heroImg from "../../assets/hero-img.jpg";

export default function Hero() {
  return (
    <div>
      <div className=" absolute text-white w-full h-[20rem] flex flex-col justify-center items-center px-15 ">
        <h2 className=" text-[clamp(16px,10vw,36px)] font-medium text-center">
          Find Your Next Phone Or Sell Your Old Phone
        </h2>
        <p className=" text-center ">
          Discover a wide selection of used and scrap phones, or easily sell
          your old phone for cash. Join our community of buyers and sellers
          today.
        </p>
        <div className=" w-full flex justify-center">
          <input
            className=" outline-none w-[40%] bg-[#e7edf4] text-black rounded-lg px-2 py-2"
            type="text"
            placeholder="search for phones, parts or sellers"
          />
          <button className=" bg-[#0c7ff2]" type="button">
            Search
          </button>
        </div>
      </div>
      <div>
        <img className=" w-full h-[20rem] rounded-2xl" src={heroImg} alt="" />
      </div>
    </div>
  );
}
