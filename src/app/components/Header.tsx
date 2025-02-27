import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/blogs", label: "Artikel" },
    { href: "/category", label: "Kategori" },
    { href: "/contact", label: "Kontak" },
  ];
  return (
    <>
      <nav className="flex justify-between items-center h-20 border-b border-gray-200 px-4 shadow-sm">
        <div className="logo">
          <Image src={"/blog.svg"} width={24} height={24} alt="myblog logo" />
        </div>
        <ul className="flex gap-4 justify-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-base font-normal text-gray-600 hover:font-medium hover:text-gray-900 "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex">
            <Link href={"/sign-in"} className="text-green-500 hover:text-green-600 hover:font-medium">Sign In</Link>
        </div>
      </nav>
    </>
  );
}
