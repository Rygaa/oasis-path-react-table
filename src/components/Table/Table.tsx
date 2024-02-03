import React, { FC } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { TableProps } from "./table.types";

export const Table: FC<TableProps> = ({ children, style, className, handleDragEnd }) => {
  return (
    <div style={style} className={className}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {children}
      </DndContext>
    </div>
  );
};

