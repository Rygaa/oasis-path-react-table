import React, { FC, HTMLAttributes, ReactNode } from "react";

interface CellProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columnsWidth?: number[];
  columnIndex?: number;
}
const Cell: FC<CellProps> = ({
  children,
  columnIndex,
  columnsWidth,
  ...props
}) => {
  const parentstyle = {
    border: "1px solid black",
    width: `${
      columnsWidth && columnIndex !== undefined && columnsWidth[columnIndex]
        ? columnsWidth[columnIndex]
        : 200
    }px`,
    minWidth: `${
      columnsWidth && columnIndex !== undefined && columnsWidth[columnIndex]
        ? columnsWidth[columnIndex]
        : 200
    }px`,
    overflow: "hidden",
    ...props.style,
  };

  return (
    <div {...props} style={parentstyle}>
      {children}
    </div>
  );
};

export default Cell;
