import React, { FC, HTMLAttributes, ReactNode } from "react";

interface BodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Body: FC<BodyProps> = ({ children, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...props.style, // Merge provided style with default styles
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Body;
