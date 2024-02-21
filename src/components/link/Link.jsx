"use client";
import Link from "next/link";
import styles from "./link.module.css";
import { usePathname } from "next/navigation";

const NavigationLink = ({ path, pathname }) => {
  const pathName = usePathname();
  return (
    <div
      className={`${styles.navigation} ${
        pathName === path && styles.activeNavigation}
      `}
    >
      <Link href={path}>{pathname} </Link>
    </div>
  );
};

export default NavigationLink;
