
export interface ColumnContainerProps  extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>  {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    // isDragging: boolean;
    // isGroupedOver: boolean;
    // isLastChild: boolean;
    // isPlaceholder: boolean;
    // isSearchMatch: boolean;
    // isSearchFocus: boolean;
    // isSortable: boolean;
    // isStartChild: boolean;
    // isTreeData: boolean;
    // treeDepth?: number;
}