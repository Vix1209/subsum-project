import React from "react";

interface Props {
  icon: string;
  content: string;
  bgColor: string;
  title: string;
}

const Layout: React.FC<Props> = ({ icon, content, bgColor, title }) => {
  return (
    <div className="w-full">
      <div className=" w-full p-3 text-left ">
        <div className="flex rounded-xl items-center lg:items-start gap-x-4 lg:p-4 w-full  ">
          <div className={`p-4 w-fit h-fit  rounded-xl ${bgColor}`}>
            <div className="">
              <img
                className="w-[20px] lg:w-[20px] h-[20px] lg:h-[20px]"
                src={icon}
                alt=""
              />
            </div>
          </div>

          <div className="text-default_black-1">
            <h1 className="font-medium text-base lg:mb-2">{title}</h1>
            <p
              className={`${
                content === "Coming Soon"
                  ? "p-1 text-center bg-[#EFF3FB] rounded-full"
                  : ""
              } font-light text-xs w-full`}
            >
              {content} →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
