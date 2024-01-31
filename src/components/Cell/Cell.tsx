import React, { FC } from 'react'
import { CellProps } from './cell.types'
const Cell:FC<CellProps> = ({
    children,
    className,
    style,
    ...props
}) => {
  return (
    <div
        className={className}
        style={style}
        {...props}
    >
        {children}
    </div>
  )
}

export default Cell