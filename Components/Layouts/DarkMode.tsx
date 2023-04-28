import { FC, PropsWithChildren } from "react";

export const DarkMode: FC<PropsWithChildren> = ({ children }) => {
  return <div style={{ backgroundColor: "red" }}>{children}</div>;
};
