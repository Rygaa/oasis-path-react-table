import React, { FC, HTMLAttributes, ReactElement } from "react";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  columnsWidth?: number[];
  columnIndex?: number;
  id?: string;
}

const Row: FC<RowProps> = ({ id, children, columnsWidth, ...props }) => {
  return (
    <div style={{ display: "flex", ...props.style }}>
      {children &&
        children.length > 0 &&
        children.map((child, index) =>
          React.cloneElement(child, {
            columnsWidth,
            columnIndex: index,
          }),
        )}
    </div>
  );
};
export default Row;
