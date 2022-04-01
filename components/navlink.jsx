import Link from 'next/link';

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="group flex cursor-pointer items-center bg-white py-4 px-8 hover:bg-black">
        <p className="font-abril text-2xl group-hover:text-white">{children}</p>
      </a>
    </Link>
  );
}
