import React, { FC } from "react";
import { TableProps } from "./table.types";
import { ResizableBox } from "react-resizable";
import TableHeader from "../Column/ColumnContainer";
import TableBody from "../Row/RowContainer";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Cell from "../Cell/Cell";


type DataRow = Record<string, any>;
const Table: FC<TableProps> = ({ children, className, style, rows, columns, ...props }) => {
  columns = [ "First Name", "Last Name", "Age" ];

   rows = [
    { "First Name": "John", "Last Name": "Doe", "Age": 30 },
    { "First Name": "Jane", "Last Name": "Doe", "Age": 25 },
    { "First Name": "Alice", "Last Name": "Johnson", "Age": 35 },
    // Add more objects as needed
  ];

  return (
    <div>
      <TableHeader>
        {columns.map(
          (
            column:
              | string
              | number
              | boolean
              | React.ReactElement<any, string | React.JSXElementConstructor<any>>
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined,
            index: React.Key | null | undefined
          ) => (
            <ResizableBox
              width={200}
              height={60}
              draggableOpts={{ grid: [25, 25] }}
              minConstraints={[100, 100]}
              maxConstraints={[300, 300]}>
              <Column key={index}>{column}</Column>
            </ResizableBox>
          )
        )}
      </TableHeader>

      <TableBody>
        {rows.map(
          (
            row:
                | string
                | number
                | boolean
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined
            ,
            index: React.Key | null | undefined
          ) => (
            <ResizableBox
              width={200}
              height={60}
              draggableOpts={{ grid: [25, 25] }}
              minConstraints={[100, 100]}
              maxConstraints={[300, 300]}>
              <Row key={index} row={row} />
            </ResizableBox>
          )
        )}
      </TableBody>
    </div>
  );
};

export default Table;
