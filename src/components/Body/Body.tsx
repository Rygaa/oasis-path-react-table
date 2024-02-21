import React, { FC, HTMLAttributes, ReactElement } from "react";

interface BodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  columnsWidth?: number[];
}

const Body: FC<BodyProps> = ({ children, columnsWidth, ...props }) => {
  return (
    <div style={{ ...props.style }}>
      {children &&
        children.length > 0 &&
        children.map((child, index) =>
          React.cloneElement(child, {
            key: child.props.id,
            columnsWidth,
            columnIndex: index,
          }),
        )}
    </div>
  );
};

export default Body;
