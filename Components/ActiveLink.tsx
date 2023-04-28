import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
  color: "orangered",
  textDecoration: "underline",
};

interface Props {
  href: string,
  text: string
}


export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { pathname } = useRouter();

  return (
    <Link style={pathname == href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};