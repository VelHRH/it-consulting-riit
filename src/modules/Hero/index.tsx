import { FC } from "react";
import { Section } from "../common/components";

export const Hero: FC = () => {
  return (
    <Section>
      <div className="container h-full mx-auto flex flex-col gap-5 items-center">
        <h1 className="text-7xl font-semibold">RIIT Consulting</h1>
        <h3 className="text-4xl">Your expert for B2B consulting</h3>
        <h6 className="text-xl">Welcome to RIIT Consulting...</h6>
      </div>
    </Section>
  );
};
