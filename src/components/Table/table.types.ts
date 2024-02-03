export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  handleDragEnd: () => void;
}
