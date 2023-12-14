import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="pt-9 pb-12 absolute w-full">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={logo} alt="logo" className="mb-0.5" />
              <p className="font-[karantina] text-sm leading-3">CarpTravel</p>
            </Link>
          </div>
          <div className="flex gap-14 ">
            <Link href="#about" className="text-sm hover:scale-150">
              About
            </Link>
            <Link href="#services" className="text-sm hover:scale-150">
              Services
            </Link>
            <Link href="#career" className="text-sm hover:scale-150">
              Career
            </Link>
            <Link href="#gallery" className="text-sm hover:scale-150">
              Gallery
            </Link>
            <Link href="#contacts" className="text-sm hover:scale-150">
              Contacts
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
