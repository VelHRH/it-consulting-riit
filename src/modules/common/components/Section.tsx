import { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`relative py-16`}>
      {children}
      <div className="absolute top-0 left-7 w-[1.5px] h-full bg-slate-200 pointer-events-none" />
      <div className="absolute top-0 right-7 w-[1.5px] h-full bg-slate-200 pointer-events-none" />
      <div
        className={`absolute top-0 left-7 right-7 h-[1.5px] bg-slate-200 pointer-events-none`}
      />
      <div className="absolute top-0 left-7 -translate-x-1/2 -translate-y-1/2">
        <span className="block w-3 h-[3px] bg-slate-500" />
        <span className="block w-[3px] h-3 bg-slate-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute top-0 right-7 -translate-y-1/2 translate-x-1/2">
        <span className="block w-3 h-[3px] bg-slate-500" />
        <span className="block w-[3px] h-3 bg-slate-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};
