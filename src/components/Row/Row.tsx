import React, { FC } from "react";
import { VList } from "virtua";
import { RowProps } from "./row.types";

export const Row: FC<RowProps> = ({ children }) => {
  return (
    <VList style={{ height: 50, overflow: "hidden" }} horizontal>
      {children}
    </VList>
  );
};

