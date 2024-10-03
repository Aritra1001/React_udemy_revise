import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./navLink";

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          {/* We have put LogoImg.src as in LogoImg we will get an object in which we will have the directory in the src key */}
          <Image src={LogoImg} alt="a plate containing many dishes" />
          Next Level Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
             <NavLink href='/meals' children='Browse Meals'/>
            </li>
            <li>
              <NavLink href='/community' children='Foodies Community'/>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
