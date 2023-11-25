import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from "@iconify/react";
//<Icon icon="icons8:gender" />

export const Card = ({ gender, name, phone, image }) => {
  if (!gender) {
    return <Loading />;
  } else {
    return (
      <div className="flex h-screen items-center justify-center bg-cyan-100">
        <div className="border rounded-lg w-[24rem] h-48 md:w-[40rem] md:h-80 flex drop-shadow-lg bg-white scale-90">
          <div className="w-2/5 flex items-center justify-center">
            <img src={image} alt="image" className="w-4/5 rounded-full" />
          </div>
          <div className="flex-grow flex flex-col justify-center p-8 pl-4 space-y-4 md:space-y-8 md:p-10 ">
            <div className="text-2xl md:text-5xl font-bold md:font-semibold tracking-tight">
              {name}
            </div>
            <div className=" capitalizecapitalize flex items-center space-x-3">
              <GenderIcon gender={gender} />
            </div>
            <div className="text-base md:text-2xl flex items-center space-x-3 cursor-pointer">
              <span className="text-teal-400">
                <Icon icon="ph:phone-fill" />
              </span>
              <span className="text-zinc-400">
                <a href={"tel:" + phone}> {phone}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border rounded-lg w-[24rem] h-48 md:w-[40rem] md:h-80 flex">
        <div className="w-2/5 flex items-center justify-center">
          <div className="w-4/5 fontstyle">
            <Skeleton circle={true} />
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-center p-8 pr-0 space-y-4 md:space-y-8 md:p-10">
          <div className="text-2xl md:text-4xl">
            <Skeleton />
          </div>
          <div className="text-2xl md:text-4xl">
            <Skeleton />
          </div>
          <div className="text-2xl md:text-4xl">
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

function GenderIcon({ gender }) {
  if (gender == "female") {
    return (
      <>
        <span className="text-xl md:text-3xl ">
          <Icon icon="fluent-emoji-flat:female-sign" />
        </span>
        <span className="text-zinc-400 text-lg md:text-2xl capitalize">
          {gender}
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="ext-xl md:text-3xl">
          <Icon icon="fluent-emoji-flat:male-sign" />
        </span>
        <span className="text-zinc-400 text-lg md:text-2xl capitalize">
          {gender}
        </span>
      </>
    );
  }
}
