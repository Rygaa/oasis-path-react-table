import React, { FC } from "react";
import { BodyProps } from "./Body.types";
export const Body: FC<BodyProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      {children}
    </div>
  );
};
