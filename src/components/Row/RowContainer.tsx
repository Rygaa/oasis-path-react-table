import React, { FC, Key } from "react";
import { RowContainerProps } from "./row.types";
import { VList } from "virtua";
import styled from "styled-components";
import { Cell } from "../Cell";

const StyledHeaderContainer = styled.div<RowContainerProps>`
  display: flex;
  flex-direction: column;
`;

const TableBody: FC<RowContainerProps> = ({ rows, rowsstyle, cellstyle, className, style, ...props }) => {
  return (
    <StyledHeaderContainer
      className={className}
      style={style}
      {...props}
      rows={rows}
      rowsstyle={rowsstyle}
      cellstyle={cellstyle}>
      {rows.map((row: any, rowIndex: Key) => (
        <div style={{ ...rowsstyle, display: "flex" }} key={rowIndex}>
          {row.map((rowElement: any, cellIndex: Key) => (
            <div style={cellstyle} key={cellIndex}>
              <Cell content={rowElement} />
            </div>
          ))}
        </div>
      ))}
    </StyledHeaderContainer>
  );
};

export default TableBody;
