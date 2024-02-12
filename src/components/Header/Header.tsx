import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columns: any;
}

const Header: FC<HeaderProps> = ({ children, columns, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        ...props.style, // Merge provided style with default styles
      }}
      {...props}>
      <SortableContext items={columns} strategy={horizontalListSortingStrategy}>
        {children}
      </SortableContext>
    </div>
  );
};

export default Header;
