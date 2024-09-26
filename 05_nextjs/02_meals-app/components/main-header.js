import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground/>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          {/* We have put LogoImg.src as in LogoImg we will get an object in which we will have the directory in the src key */}
          <Image src={LogoImg} alt="a plate containing many dishes" />
          Next Level Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
