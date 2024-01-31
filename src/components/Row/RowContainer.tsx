import React, { FC } from "react";
import { RowContainerProps } from "./row.types";
import { VList } from "virtua";

const TableBody: FC<RowContainerProps> = ({ children, className, style, ...props }) => {
  return (
    <VList
        className={className}
        style={style}
        {...props}
        horizontal
    >
        {children}
    </VList>
  );
};

export default TableBody;
