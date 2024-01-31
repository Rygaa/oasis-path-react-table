/// <reference types="react" />
export interface RowContainerProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
