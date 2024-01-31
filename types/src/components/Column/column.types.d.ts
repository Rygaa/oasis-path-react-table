/// <reference types="react" />
export interface ColumnContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
