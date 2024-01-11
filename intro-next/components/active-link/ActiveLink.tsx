"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./Activelink.module.css";

interface Props {
  path: string;
  text: string;
}
export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  // console.log(pathName);

  return (
    <Link
      href={path}
      className={`${style.link} ${pathName === path && style["active-link"]}`}
    >
      {text}
    </Link>
  );
};
