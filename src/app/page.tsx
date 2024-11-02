import { Communication } from "$/modules/Communication";
import { Hero } from "$/modules/Hero";
import { OurServices } from "$/modules/OurServices";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <Communication />
    </>
  );
}
