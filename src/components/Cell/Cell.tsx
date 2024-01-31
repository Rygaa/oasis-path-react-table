import React, { FC } from "react";
import styled from "styled-components";
import { CellProps } from "./cell.types";

const StyledCell = styled.div`
  padding: 8px;
  border: 1px solid #ddd;
  width: 100%;
`;

const Cell: FC<CellProps> = ({ children }) => {
  return <StyledCell>{children}</StyledCell>;
};

export default Cell;