import React, { FC } from "react";
import { CellProps } from "./Cell.types";

export const Cell: FC<CellProps> = ({ children }) => {
  return <div>{children}</div>;
};
