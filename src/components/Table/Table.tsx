import React, { FC } from "react";
import { TableProps } from "./table.types";
import { ResizableBox } from "react-resizable";
import TableHeader from "../Column/ColumnContainer";
import TableBody from "../Row/RowContainer";
import Row from "../Row/Row";
import Column from "../Column/Column";
import Cell from "../Cell/Cell";

const Table: FC<TableProps> = ({ children, className, style, rows, columns, ...props }) => {
  return (
    <div>
      <TableHeader>
        {columns.map(
          (
            column: {
              label:
                | string
                | number
                | boolean
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            },
            index: React.Key | null | undefined
          ) => (
            <ResizableBox
              width={200}
              height={200}
              draggableOpts={{ grid: [25, 25] }}
              minConstraints={[100, 100]}
              maxConstraints={[300, 300]}>
              <Column key={index}>{column.label}</Column>
            </ResizableBox>
          )
        )}
      </TableHeader>

      <TableBody>
        {rows.map(
          (
            row: {
              label:
                | string
                | number
                | boolean
                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            },
            index: React.Key | null | undefined
          ) => (
            <ResizableBox
              width={200}
              height={200}
              draggableOpts={{ grid: [25, 25] }}
              minConstraints={[100, 100]}
              maxConstraints={[300, 300]}>
              <Row key={index}>
                <Cell>{row.label}</Cell>
              </Row>
            </ResizableBox>
          )
        )}
      </TableBody>
    </div>
  );
};

export default Table;
