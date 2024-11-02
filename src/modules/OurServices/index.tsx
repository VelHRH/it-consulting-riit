import { FC } from "react";
import { Heading, Section } from "../common/components";
import { services } from "./constants";
import { Card } from "./components";

export const OurServices: FC = () => {
  return (
    <Section>
      <div className="flex flex-col gap-10 items-center">
        <Heading>Our services</Heading>
        <div className="grid grid-cols-3 gap-4 w-full">
          {services.map((service) => (
            <Card key={service.description} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
};
