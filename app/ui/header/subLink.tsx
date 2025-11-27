import Link from 'next/link';

interface SubLinkProps {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

export default function SubLink({ name, description, href, icon: Icon }: SubLinkProps) {
  return (
    <Link
    href={href}
    className={`grid grid-rows-2 grid-cols-2 m-auto max-w-[260px]`}
    >
        <Icon className="w-6 h-6 text-blue-600" />
        <h1 className={`col-start-2 row-start-1 text-white`}>{name}</h1>
        <p className={`col-start-2 row-start-2 text-white text-[9spx]`}>{description}</p>
    </Link>
  );
}
