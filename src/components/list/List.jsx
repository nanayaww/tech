export default function List({ title, onclick, selectedHighlists }) {
  const selectedMenu = selectedHighlists === title && (
    <hr className=" border-none bg-background-primary w-[100%] rounded-lg h-[3px]" />
  );
  return (
    <li
      onClick={onclick}
      className="flex flex-col items-center justify-center gap-1 cursor-pointer"
    >
      {title}

      {selectedMenu}
    </li>
  );
}
