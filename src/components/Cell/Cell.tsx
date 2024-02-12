import React, { FC, HTMLAttributes, ReactNode } from "react";

interface CellProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const Cell: FC<CellProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Cell;
