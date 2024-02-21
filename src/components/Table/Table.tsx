import { closestCenter, DndContext } from "@dnd-kit/core";
import React, { FC, HTMLAttributes, ReactElement } from "react";

interface TableProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  handleDragEnd?: (event: any) => void;
  title?: string;
}

const Table: FC<TableProps> = ({ children, handleDragEnd, title, ...props }) => {
  const [columnsNumber, setColumnsNumber] = React.useState<number>(children[0].props.children.length);
  const [arr, setArr] = React.useState<number[]>(Array.from({ length: columnsNumber }, () => 200));

  React.useEffect(() => {
    setColumnsNumber(children[0].props.children.length);
  }, [children]);

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
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #E7E7E7",
          padding: "10px 20px",

          fontFamily: "Monospace",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "15px",
          lineHeight: "15px",
          display: "flex",
          justifyContent: "flex-start",
          height: "2.5rem",
          alignItems: "center",
          color: "#5A5A5A",
        }}>
        {title}
      </div>
      <div
        style={{
          backgroundColor: "white",
          overflow: "scroll",
          whiteSpace: "nowrap",
          height: "100%",
        }}>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          {children &&
            children.length > 0 &&
            children.map((child) =>
              React.cloneElement(child, {
                columnsWidth: arr,
                setColumnsWidth: setArr,
              }),
            )}
        </DndContext>
      </div>
    </div>
  );
};

export default Table;
