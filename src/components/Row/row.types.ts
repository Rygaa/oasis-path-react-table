export interface RowContainerProps {
  className?: string;
  style?: React.CSSProperties;
  rows: any;
  rowsstyle: React.CSSProperties;
  cellstyle: React.CSSProperties;
}

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}
