import React, { FC } from "react";
import { RowContainerProps } from "./row.types";
import { VList } from "virtua";
import styled from "styled-components";


const StyledRowContainer = styled.div<RowContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;


const TableBody: FC<RowContainerProps> = ({ children, className, style, ...props }) => {
  return (
    <StyledRowContainer
        className={className}
        style={style}
        {...props}
    >
        {children}
    </StyledRowContainer>
  );
};

export default TableBody;
