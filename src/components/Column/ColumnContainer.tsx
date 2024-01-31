import React, { FC } from "react";
import { ColumnContainerProps } from "./column.types";
import styled from "styled-components";

const StyledColumnContainer = styled.div<ColumnContainerProps>`
  display: flex;
  top: 0;
  position: sticky;
  background-color: #fff;
`;

const TableHeader: FC<ColumnContainerProps> = ({ children, className, style, ...props }) => {
  return (
    <StyledColumnContainer className={className} style={style} {...props}>
      {children}
    </StyledColumnContainer>
  );
};
export default TableHeader;
