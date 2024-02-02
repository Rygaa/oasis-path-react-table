import React, { FC, useState } from "react";
import { TableProps } from "./table.types";
import TableHeader from "../Column/HeaderContainer";
import TableBody from "../Row/RowContainer";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const Table: FC<TableProps> = ({
  className,
  style,
  rows,
  columns,
  columnstyle,
  rowstyle,
  cellstyle,
  handleDrag,
}) => {
  const [columnsData, setColumnsData] = useState(columns);
  const [rowsData, setRowsData] = useState(rows);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setColumnsData((items: any) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
      setRowsData((rows: any) => {
        const oldIndex = columnsData.indexOf(active.id);
        const newIndex = columnsData.indexOf(over.id);
        return rows.map((row: any) => {
          return arrayMove(row, oldIndex, newIndex);
        });
      });
      if (typeof handleDrag === "function") {
        handleDrag();
      }
    }
  };

  return (
    <div className={className} style={{ ...style }}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {/* Columns */}
        <TableHeader columns={columnsData} columnstyle={columnstyle || {}} />
        {/* Rows */}
        <TableBody rows={rowsData} rowsstyle={rowstyle || {}} cellstyle={cellstyle || {}} />
      </DndContext>
    </div>
  );
};

export default Table;
