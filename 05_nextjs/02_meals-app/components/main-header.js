import Link from "next/link";
import LogoImg from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <Link href="/">
        {/* We have put LogoImg.src as in LogoImg we will get an object in which we will have the directory in the src key */}
        <img src={LogoImg.src} alt="a plate containing many dishes" />
        Next Level Food
      </Link>

      <nav>
        <ul>
            <li>
                <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
                <Link href="/community">Foodies Community</Link>
            </li>
        </ul>
      </nav>
    </>
  );
}
