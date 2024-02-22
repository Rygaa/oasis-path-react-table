import React, { FC, HTMLAttributes, ReactElement } from "react";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  columnsWidth?: number[];
  columnIndex?: number;
  id?: string;
}

const Row: FC<RowProps> = ({ id, children, columnsWidth, ...props }) => {
  const [unifiedChildren, setUnifiedChildren] = React.useState<React.ReactElement[]>(
    React.Children.toArray(children) as React.ReactElement[]
  );

  React.useEffect(() => {
    setUnifiedChildren(React.Children.toArray(children) as React.ReactElement[]);
  }, [children]);

  return (
    <div style={{ display: "flex", ...props.style }}>
      {unifiedChildren &&
        unifiedChildren.length > 0 &&
        unifiedChildren.map((child, index) =>
          React.cloneElement(child, {
            columnsWidth,
            columnIndex: index,
          })
        )}
    </div>
  );
};
export default Row;
