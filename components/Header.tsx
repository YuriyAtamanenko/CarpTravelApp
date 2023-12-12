import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#career">Career</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#contacts">Contacts</Link>
      </nav>
    </header>
  );
}
