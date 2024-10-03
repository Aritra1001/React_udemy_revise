"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

export default function NavLink({href, children}) {
      // next js gives us a usePathname hook. This hook gives us the currently active path after the domain

    const path = usePathname();

  return (
    <>
      <Link
        href={href}
        className={path.startsWith(`${href}`) ? `${styles.link} ${styles.active}` : `${styles.link}`}
      >
       {children}
      </Link>
    </>
  );
}
