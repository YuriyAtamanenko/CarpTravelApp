import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-9 pb-12 absolute w-full">
      <div className="mx-auto max-w-7xl outline">
        <nav className="flex justify-between">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div className="flex gap-14">
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#career">Career</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contacts">Contacts</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
