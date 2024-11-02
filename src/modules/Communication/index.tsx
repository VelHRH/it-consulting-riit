import { FC } from "react";
import { Heading, Section } from "../common/components";

export const Communication: FC = () => {
  return (
    <Section>
      <div className="container h-full mx-auto flex flex-col gap-10 items-center">
        <Heading>Communication</Heading>
        <div className="flex gap-5 w-full">
          <div className="flex flex-col flex-1 gap-3 items-end">
            <h5 className="text-2xl font-semibold">
              {"Jürgen Tiedemann".toUpperCase()}
            </h5>
            <h6>General Manager</h6>
            <h6>Your consultant from the ICT industry</h6>
            <button className="relative w-1/4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-semibold rounded-lg group bg-gradient-to-br from-green-700 to-green-500 text-white hover:text-slate-900 focus:ring-4 focus:outline-none focus:ring-green-200">
              <span className="relative py-1 transition-all ease-in duration-75 bg-slate-50 rounded-md bg-opacity-0 group-hover:bg-opacity-100 w-full">
                Contact
              </span>
            </button>
          </div>
          <div
            className="mx-auto h-[500px] w-[900px] bg-fixed bg-right bg-no-repeat shadow-lg"
            style={{
              backgroundImage:
                "url('https://www.tiedemann-consulting.org/wp-content/uploads/2022/02/volker.jpeg')",
              backgroundSize: "1000px",
            }}
          ></div>
        </div>
      </div>
    </Section>
  );
};
