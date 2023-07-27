"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../components/style.module.scss";

export default function LinkToHome() {
  const pathname = usePathname();
  console.log("pathname: ", pathname);

  const style1 =
    "font-bold hover:text-white active:font-bold  active:text-white visited:text-white";
  const style2 = "";

  return (
    <main>
      {pathname === "/" ? (
        <Link className={styles.linkStyling} href="/">
          A project-issimo on Next-Auth{" "}
        </Link>
      ) : (
        <Link className={styles.linkStyling} href="/">A project-issimo on Next-Auth </Link>
      )}
    </main>
  );
}
