import { closestCenter, DndContext } from "@dnd-kit/core";
import React, { FC, HTMLAttributes, ReactElement } from "react";

interface TableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  columnsWidth?: number[];
  setColumnsWidth?: any;
  handleDragEnd: (event: any) => void;
}

const Table: FC<TableProps> = ({ children, handleDragEnd, setColumnsWidth, columnsWidth, ...props }) => {
  const columnsNumber = children[0].props.children.length;
  const [arr, setArr] = React.useState<number[]>(Array.from({ length: columnsNumber }, () => 200));

  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1000px",
        width: "100%",
        height: "400px",
      }}>
      <div>Title</div>
      <div
        style={{
          backgroundColor: "gray",
          overflow: "scroll",
          whiteSpace: "nowrap",
        }}>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          {children &&
            children.length > 0 &&
            children.map((child) =>
              React.cloneElement(child, {
                columnsWidth: arr,
                setColumnsWidth: setArr,
              })
            )}
        </DndContext>
      </div>
    </div>
  );
};

export default Table;
