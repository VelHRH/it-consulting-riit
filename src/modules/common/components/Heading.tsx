import { FC } from "react";

type Props = {
  children: string;
};

export const Heading: FC<Props> = ({ children }) => {
  return <h1 className="text-5xl font-semibold">{children}</h1>;
};
