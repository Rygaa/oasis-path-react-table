import React, { FC } from "react";
import { ColumnProps } from "./Column.types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Column: FC<ColumnProps> = ({ children, id, style }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

  const parentstyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={parentstyle} {...attributes} {...listeners}>
      <div style={style}>
        {children}
      </div>
    </div>
  );
};


