import { AppContainerPropTypes } from "@/types";
import React, { FC } from "react";

const AppContainer: FC<AppContainerPropTypes> = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default AppContainer;
