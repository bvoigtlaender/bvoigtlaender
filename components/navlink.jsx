import Link from 'next/link';

export default function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="align-center group flex flex-1 cursor-pointer items-center justify-center bg-white py-2 px-4 hover:bg-black md:flex-initial md:py-4 md:px-8">
        <p className="whitespace-nowrap font-abril text-2xl group-hover:text-white">
          {children}
        </p>
      </a>
    </Link>
  );
}
