import React, { FC } from "react";
import { ColumnContainerProps } from "./header.types";
import styled from "styled-components";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./Header";

const StyledHeaderContainer = styled.div<ColumnContainerProps>`
  display: flex;
  top: 0;
  position: sticky;
  background-color: #fff;
`;

const TableHeader: FC<ColumnContainerProps> = ({ columns, className, style, columnstyle, ...props }) => {
  return (
    <StyledHeaderContainer
      className={className}
      style={style}
      {...props}
      columns={columns}
      columnstyle={columnstyle}>
      <SortableContext items={columns} strategy={horizontalListSortingStrategy}>
        {columns.map((column: any) => (
          <SortableItem key={column} id={column} style={columnstyle} />
        ))}
      </SortableContext>
    </StyledHeaderContainer>
  );
};
export default TableHeader;
