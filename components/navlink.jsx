import Link from 'next/link';

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="group flex cursor-pointer items-center bg-white py-2 px-4 hover:bg-black sm:py-4 sm:px-8">
        <p className="font-abril text-2xl group-hover:text-white">{children}</p>
      </a>
    </Link>
  );
}
