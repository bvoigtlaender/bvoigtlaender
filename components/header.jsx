import NavLink from './navlink';

export default function Header() {
  return (
    <div className="mb-4 flex border-4 border-solid border-neutral-800 bg-white shadow-backdrop">
      <NavLink href={'/'}>stuff</NavLink>
      <NavLink href={'/websites'}>websites</NavLink>
      <NavLink href={'/games'}>games</NavLink>
      <NavLink href={'/about'}>about me</NavLink>
      <p className="ml-auto flex cursor-default items-center bg-white py-4 px-8 font-abril text-2xl font-bold">
        made by bjarne
      </p>
    </div>
  );
}
