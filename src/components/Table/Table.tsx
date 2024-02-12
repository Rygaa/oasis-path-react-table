import { closestCenter, DndContext } from "@dnd-kit/core";
import React, { FC, ReactNode, HTMLAttributes } from "react";

interface TableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  handleDragEnd: (event: any) => void;
}

const Table: FC<TableProps> = ({ children, handleDragEnd, ...props }) => {
  return (
    <div {...props}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {children}
      </DndContext>
    </div>
  );
};

export default Table;
