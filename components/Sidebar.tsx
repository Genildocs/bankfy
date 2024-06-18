import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar({ user }: SiderbarProps) {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
          <h1 className="sidebar-logo">Bankfy</h1>
        </Link>
      </nav>
    </section>
  );
}
