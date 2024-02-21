import React, { FC, HTMLAttributes, ReactNode } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import HandleDrag from "../HandleDrag";

// @ts-ignore
interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string | number;
  defaultWidth?: number;
  dragElement?: ReactNode;
}

const Column: FC<ColumnProps> = ({ children, id, defaultWidth, dragElement, ...props }) => {
  // Received by parent 100%
  const { columnsWidth, columnIndex, setColumnsWidth } = props as any;
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });
  const [width, setWidth] = React.useState(defaultWidth || columnsWidth[columnIndex]);

  React.useEffect(() => {
    console.log("----");
    // console.log(`id: ${id}`);
  }, []);

  React.useEffect(() => {
    setWidth(columnsWidth[columnIndex]);
  }, [columnsWidth, columnIndex]);

  const handleResize = (initialWidth: any) => (e: any) => {
    if (columnsWidth && columnIndex !== undefined && columnsWidth[columnIndex]) {
      const startX = e.clientX;
      const moveHandler = (moveEvent: any) => {
        const currentX = moveEvent.clientX;
        let newWidth = Math.max(20, parseInt(initialWidth, 10) + (currentX - startX));
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
    // borderBottom: "1px solid #5A5A5A",
    padding: "12.5px 10px",
    cursor: "move",
    width: `calc(${width}px - 20px)`,
    overflow: "hidden",
    height: "100%",
    /* Scientificname */
    fontFamily: "Monospace",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "15px",
    alignItems: "center",
    color: "#5A5A5A",
    borderRight: "1px solid #F3F3F3",
    ...props.style,
  };

  return (
    <div ref={setNodeRef} {...props} style={parentstyle as React.CSSProperties}>
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          cursor: "move",
          transform: "translateY(-50%)",
          marginRight: "5px",
        }}
        {...attributes}
        {...listeners}>
        {dragElement}
      </div>
      <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          width: "100%",
        }}>
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
        // background: "red",
        cursor: "ew-resize",
      }}
      onMouseDown={onResize}></div>
  );
};

export default Column;
