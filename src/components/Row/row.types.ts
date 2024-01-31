
export interface RowContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
   
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement>{
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    row:any
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