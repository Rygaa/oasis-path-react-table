import React, { FC, ReactElement } from "react";

interface RowProps {
  children: ReactElement[];
  columnsWidth?: number[];
  columnIndex?: number;
}

const Row: FC<RowProps> = ({ children, columnsWidth, columnIndex }) => {
  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      {children &&
        children.length > 0 &&
        children.map((child, index) =>
          React.cloneElement(child, {
            columnsWidth,
            columnIndex: index,
          })
        )}
    </div>
  );
};
export default Row;
