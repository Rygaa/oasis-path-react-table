import React,{ FC } from 'react';

interface CellProps {
  content: string | number;
}

export const Cell: FC<CellProps> = ({ content }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        border: 'solid 1px gray',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {content}
    </div>
  );
};
