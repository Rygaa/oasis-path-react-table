import React, { FC ,ReactNode} from "react";
import { VList } from "virtua";

interface RowProps {
  children: ReactNode;
}

const Row: FC<RowProps> = ({ children }) => {
  return (
    <VList style={{ height: 60, overflow: "hidden" }} horizontal>
      {children}
    </VList>
  );
};
export default Row
