import React, { FC } from "react";
import { TableProps } from "./Table.types";
import { DndContext, closestCenter } from "@dnd-kit/core";

export const Table: FC<TableProps> = ({ children, style, className, handleDragEnd }) => {
  return (
    <div style={style} className={className}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {children}
      </DndContext>
    </div>
  );
};
