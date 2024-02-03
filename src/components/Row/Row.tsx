import React, { FC } from "react";
import { RowProps } from "./Row.types";
import { VList } from "virtua";

export const Row: FC<RowProps> = ({ children }) => {
  return (
    <VList style={{ height: 50, overflow: "hidden" }} horizontal>
      {children}
    </VList>
  );
};
