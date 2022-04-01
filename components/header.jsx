import NavLink from './navlink';

export default function Header() {
  return (
    <div className="mb-4 flex overflow-hidden border-4 border-solid border-neutral-800 bg-white shadow-backdrop">
      <NavLink href={'/'}>stuff</NavLink>
      <NavLink href={'/websites'}>websites</NavLink>
      <NavLink href={'/games'}>games</NavLink>
      <NavLink href={'/about'}>about me</NavLink>
      <p className="ml-auto flex cursor-default items-center bg-white py-2 px-4 font-abril text-2xl font-bold sm:py-4 sm:px-8">
        made by bjarne
      </p>
    </div>
  );
}
