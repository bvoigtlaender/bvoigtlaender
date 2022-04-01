import NavLink from './navlink';

export default function Header() {
  return (
    <div className="mb-4 flex justify-between overflow-hidden border-4 border-solid border-black bg-white shadow-backdrop">
      <NavLink href={'/'}>stuff</NavLink>
      <NavLink href={'/websites'}>websites</NavLink>
      <NavLink href={'/games'}>games</NavLink>
      <NavLink href={'/about'}>about me</NavLink>
      <p className="ml-auto hidden cursor-default items-center space-x-1 bg-white py-2 px-4 font-abril text-2xl font-bold md:flex md:py-4 md:px-8">
        <span className="hover:animate-wiggle">made</span>{' '}
        <span className="hover:animate-wiggle">by</span>{' '}
        <span className="hover:animate-wiggle">bjarne</span>
      </p>
    </div>
  );
}
