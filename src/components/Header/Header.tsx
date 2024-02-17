import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import React, { FC, HTMLAttributes, ReactElement, ReactNode } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  setColumnsWidth?: any;
  columnsWidth?: number[];
  key?: "lol";
}

const Header: FC<HeaderProps> = ({ key = "lol", children, setColumnsWidth, columnsWidth, ...props }) => {
  const columns: { id: string }[] =
    children && children.length > 0 ? children.map((child) => ({ id: child.props.id })) : [];

  return (
    <div
      style={{
        width: "max-content",
        backgroundColor: "red",
        flex: 1,
        position: "sticky",
        top: 0,
        zIndex: 55,
        height: "min-content",
      }}
      {...props}
    >
      <SortableContext items={columns} strategy={horizontalListSortingStrategy}>
        {children &&
          children.length > 0 &&
          children.map((child, index) =>
            React.cloneElement(child, {
              columnsWidth,
              columnIndex: index,
              setColumnsWidth,
            })
          )}
      </SortableContext>
    </div>
  );
};

export default Header;
