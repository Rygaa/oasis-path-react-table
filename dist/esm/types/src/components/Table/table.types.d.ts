/// <reference types="react" />
export interface TableProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    rows: any;
    columns: any;
}
