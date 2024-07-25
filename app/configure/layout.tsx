import React from "react";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
