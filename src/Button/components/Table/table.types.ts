export interface TableProps {
  className?: string;
  style?: React.CSSProperties;
  columnstyle?: React.CSSProperties;
  rowstyle?: React.CSSProperties;
  cellstyle?: React.CSSProperties;
  rows: any;
  columns: any;
  handleDrag: (...args: any[]) => void;
}
