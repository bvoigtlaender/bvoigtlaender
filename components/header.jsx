export default function Header() {
  return (
    <div className="flex border-4 border-solid border-neutral-800 bg-white shadow-backdrop">
      <a className="group flex cursor-pointer items-center bg-white py-4 px-8 hover:bg-black">
        <p className="font-abril text-2xl group-hover:text-white">stuff</p>
      </a>
      <a className="group flex cursor-pointer items-center bg-white py-4 px-8 hover:bg-black">
        <p className="font-abril text-2xl group-hover:text-white">websites</p>
      </a>
      <a className="group flex cursor-pointer items-center bg-white py-4 px-8 hover:bg-black">
        <p className="font-abril text-2xl group-hover:text-white">games</p>
      </a>
      <a className="group flex cursor-pointer items-center bg-white py-4 px-8 hover:bg-black">
        <p className="font-abril text-2xl group-hover:text-white">about me</p>
      </a>
      <a className="ml-auto flex cursor-default items-center bg-white py-4 px-8 font-bold">
        <p className="font-abril text-2xl">made by bjarne</p>
      </a>
    </div>
  );
}
