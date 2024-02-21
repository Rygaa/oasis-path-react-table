
# Oasis-Path/React-Table

A React Table that follow the same way as HTML by rendering children instead of handling data sent by the user. The user will need to build the logic and send the Table children to render.





## Basic Usage

```javascript
import { Table, Body, Cell, Column, Header, Row } from "@oasis-path/react-table";

function Example() {
  const columns = [
    { id: "1", value: "Column 1" },
    { id: "2", value: "Column 2" },
    { id: "3", value: "Column 3" },
  ];

  const rows = [
    [
      { id: "1", value: "Row 1 Column 1" },
      { id: "2", value: "Row 1 Column 2" },
      { id: "3", value: "Row 1 Column 3" },
    ],
    [
      { id: "1", value: "Row 2 Column 1" },
      { id: "2", value: "Row 2 Column 2" },
      { id: "3", value: "Row 2 Column 3" },
    ],
    [
      { id: "1", value: "Row 3 Column 1" },
      { id: "2", value: "Row 3 Column 2" },
      { id: "3", value: "Row 3 Column 3" },
    ],
  ];

  return (
    <Table title="Table Title" style={{ height: "600px" }}>
      <Header>
        {columns.map((column) => (
          <Column key={column.id} id={column.id}>
            {column.value}
          </Column>
        ))}
      </Header>

      <Body>
        {rows.map((row, index: number) => (
          <Row key={index}>
            {row.map((cell) => (
              <Cell key={cell.id}>{cell.value}</Cell>
            ))}
          </Row>
        ))}
      </Body>
    </Table>
  );
}

export default Example;

```

## Reorder

```javascript
import { useState } from "react";
import { Table, Body, Cell, Column, Header, Row } from "@oasis-path/react-table";

function Example() {
  const [columns, setColumns] = useState([
    { id: "1", value: "Column 1" },
    { id: "2", value: "Column 2" },
    { id: "3", value: "Column 3" },
  ]);

  const [rows, setRows] = useState([
    [
      { id: "1", value: "Row 1 Column 1" },
      { id: "2", value: "Row 1 Column 2" },
      { id: "3", value: "Row 1 Column 3" },
    ],
    [
      { id: "1", value: "Row 2 Column 1" },
      { id: "2", value: "Row 2 Column 2" },
      { id: "3", value: "Row 2 Column 3" },
    ],
    [
      { id: "1", value: "Row 3 Column 1" },
      { id: "2", value: "Row 3 Column 2" },
      { id: "3", value: "Row 3 Column 3" },
    ],
  ]);

  return (
    <Table
      title="Table Title"
      handleDragEnd={({ active, over }) => {
        // Reorder Logic For Columns
        // Reorder Logic For Rows
        setColumns(...)
        setRows(...)
      }}
      style={{ height: "600px" }}>
      <Header>
        {columns.map((column) => (
          <Column
            dragElement={
              <button
                style={{
                  background: "transparent",
                  border: "none",
                }}>
                &#9776;
              </button>
            }
            key={column.id}
            id={column.id}>
            {column.value}
          </Column>
        ))}
      </Header>

      <Body>
        {rows.map((row: any, index: number) => (
          <Row key={index}>
            {row.map((cell: any) => (
              <Cell key={cell.id}>{cell.value}</Cell>
            ))}
          </Row>
        ))}
      </Body>
    </Table>
  );
}

export default Example;


```


