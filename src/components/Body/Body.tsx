import React, { FC, HTMLAttributes, ReactElement } from "react";
import { VList } from "virtua";

interface BodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  columnsWidth?: number[];
}

const Body: FC<BodyProps> = ({ children, columnsWidth, ...props }) => {
  return (
    <VList
      className="vlist"
      style={{
        height: "100%",
        width: "100%",
      }}>
      {children &&
        children.length > 0 &&
        children.map((child, index) =>
          React.cloneElement(child, {
            columnsWidth,
            columnIndex: index,
          }),
        )}
    </VList>
  );
};

export default Body;
