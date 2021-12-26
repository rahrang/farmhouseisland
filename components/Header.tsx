import Link from 'next/link';

function NavLink({ href, title }: { href: string; title: string }) {
  return (
    <Link href={href}>
      <a className="hover:text-pink-400 uppercase text-sm">{title}</a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="text-white flex flex-row justify-between items-baseline">
      <Link href="/">
        <a className="text-white">
          <h2 className="prose prose-xl text-white">Farmhouse Island</h2>
        </a>
      </Link>
      <nav className="grid grid-cols-2 gap-x-8">
        <NavLink href="/characters" title="Characters" />
        <NavLink href="/stories" title="Stories" />
      </nav>
    </header>
  );
}
