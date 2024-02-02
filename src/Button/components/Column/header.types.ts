export interface ColumnContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  columns: any;
  columnstyle: React.CSSProperties;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
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
