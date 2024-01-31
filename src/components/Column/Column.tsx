import React, { FC } from "react";
import { ColumnProps } from "./column.types";
import styled from "styled-components";

const StyledColumn = styled.button<ColumnProps>`
  display: flex;
`;

const Column: FC<ColumnProps> = ({ children, className, style, ...props }) => {
  return (
    <StyledColumn className={className} style={style} {...props}>
      {children}
    </StyledColumn>
  );
};

export default Column;
