import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import React, { FC, HTMLAttributes, ReactElement, ReactNode } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  setColumnsWidth?: any;
  columnsWidth?: number[];
  key?: "lol";
}

const Header: FC<HeaderProps> = ({ key = "lol", children, setColumnsWidth, columnsWidth, ...props }) => {
  const [unifiedChildren, setUnifiedChildren] = React.useState<React.ReactElement[]>(
    React.Children.toArray(children) as React.ReactElement[]
  );

  React.useEffect(() => {
    setUnifiedChildren(React.Children.toArray(children) as React.ReactElement[]);
  }, [children]);

  const [columnsId, setColumnsId] = React.useState<{ id: string }[]>([]);

  React.useEffect(() => {
    setColumnsId(unifiedChildren.map((child) => ({ id: child.props.id })));
  }, [unifiedChildren]);

  return (
    <div
      style={{
        width: "max-content",
        position: "sticky",
        top: 0,
        zIndex: 55,
        height: "min-content",
        display: "flex",
        borderBottom: "1px solid #E7E7E7",
        backgroundColor: "white",
      }}
      {...props}>
      <SortableContext items={columnsId} strategy={horizontalListSortingStrategy}>
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
