import React, { FC } from "react";
import { RowProps } from "./row.types";
import styled from "styled-components";
import Cell from "../Cell/Cell";

const StyledRow = styled.div<RowProps>`
  display: flex;

`;
const Row: FC<RowProps> = ({ children, className, style, row, ...props }) => {
  console.log("row", Object.values(row));
  
  return (
    <StyledRow className={className} style={style} row={row} {...props}>
      {Object.values(row).map((value, index) => (
        <Cell key={index}>{value as React.ReactNode}</Cell>
      ))}
    </StyledRow>
  );
};

export default Row;
