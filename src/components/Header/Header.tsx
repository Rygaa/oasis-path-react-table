import React, { FC } from "react";
import { HeaderProps } from "./Header.types";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";

export const Header: FC<HeaderProps> = ({ children, columns }) => {
  return (
    <div
      style={{
        display: "flex",
      }}>
      <SortableContext items={columns} strategy={horizontalListSortingStrategy}>
        {children}
      </SortableContext>
    </div>
  );
};

