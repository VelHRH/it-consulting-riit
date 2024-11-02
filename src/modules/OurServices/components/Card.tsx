import { FC } from "react";
import { Service } from "../types";

type Props = Service;

export const Card: FC<Props> = (props) => {
  const { Icon, description, textColor, gradient } = props;

  return (
    <div className={`bg-gradient-to-r p-1 rounded-xl ${gradient}`}>
      <div className="group relative overflow-hidden bg-slate-50 rounded-[calc(0.5rem-1px)] p-4 cursor-pointer">
        <span
          className={`absolute z-0 h-20 w-20 rounded-full bg-gradient-to-r ${gradient} transition-all duration-300 group-hover:scale-[11]`}
        ></span>
        <div className="relative z-10 flex flex-col gap-5">
          <span
            className={`grid h-20 w-20 place-items-center rounded-full bg-gradient-to-r ${gradient} group-hover:from-transparent group-hover:to-transparent`}
          >
            {<Icon size={40} className="text-slate-50" />}
          </span>
          <p className="group-hover:text-white">{description}</p>
          <div className="text-base font-semibold">
            <p
              className={`${textColor} transition-all duration-300 font-semibold group-hover:text-white`}
            >
              Read more &rarr;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
