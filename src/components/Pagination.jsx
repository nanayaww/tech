const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [];
  for (let i = 1; i < Math.ceil(totalProducts / productsPerPage) + 1; i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <>
      {pages.map((page) => {
        return (
          <div
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${
              page === currentPage &&
              "bg-background-primary text-white scale-110 "
            } "border border-background-secondary rounded-lg px-1.5 py-0.5 hover:bg-background-primary hover:text-white`}
          >
            {page}
          </div>
        );
      })}
    </>
  );
};

export default Pagination;
