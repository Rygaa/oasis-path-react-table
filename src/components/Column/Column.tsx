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
  // Received by parent 100%
  const { columnsWidth, columnIndex, setColumnsWidth } = props as any;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });

  const [width, setWidth] = React.useState(columnsWidth[columnIndex]);
  React.useEffect(() => {
    setWidth(columnsWidth[columnIndex]);
  }, [columnsWidth, columnIndex]);

  const handleResize = (initialWidth: any) => (e: any) => {
    if (columnsWidth && columnIndex !== undefined && columnsWidth[columnIndex]) {
      const startX = e.clientX;
      const moveHandler = (moveEvent: any) => {
        const currentX = moveEvent.clientX;
        let newWidth = Math.max(20, parseInt(initialWidth, 10) + (currentX - startX)); // Ensure newWidth is at least 20px

        // newWidth = Math.max(newWidth, columnsWidth[columnIndex]);
        setColumnsWidth((prevWidths: any) => {
          const updatedWidths = [...prevWidths];
          updatedWidths[columnIndex] = newWidth;
          return updatedWidths;
        });
      };

      const upHandler = () => {
        window.removeEventListener("mousemove", moveHandler);
        window.removeEventListener("mouseup", upHandler);
      };

      window.addEventListener("mousemove", moveHandler);
      window.addEventListener("mouseup", upHandler);
    }
  };

  const parentstyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: "inline-block",
    position: "relative",
    border: "1px solid black",
    cursor: "move",
    width: `${width}px`,
    overflow: "hidden",
    height: "100%",
    flex: "1",
    // ...props.style,
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
        {...listeners}
      >
        <HandleDrag />
      </div>
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          boxSizing: "border-box",
          // minWidth: 0,
          width: "100%",
        }}
      >
        {children}
      </div>
      <ResizeHandle onResize={handleResize(width)} />
    </div>
  );
};

const ResizeHandle = ({ onResize }: { onResize: any }) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "0",
        top: "50%",
        width: "10px",
        bottom: "0",
        transform: "translateY(-50%)",
        background: "red",
        cursor: "ew-resize",
      }}
      onMouseDown={onResize}
    ></div>
  );
};

export default Column;
