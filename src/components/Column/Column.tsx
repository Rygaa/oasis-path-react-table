import React, { FC, HTMLAttributes, ReactNode } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import HandleDrag from "../HandleDrag";

// @ts-ignore
interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string | number;
}

const Column: FC<ColumnProps> = ({ children, id, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

  const parentstyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: "relative",
    ...props.style,
  };

  return (
    // @ts-ignore
    <div ref={setNodeRef} {...props} style={parentstyle}>
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          cursor: "move",
          transform: "translateY(-50%)",
        }}
        {...attributes}
        {...listeners}>
        <HandleDrag />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Column;
