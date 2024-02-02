import React, { FC } from 'react'
import { RowProps } from './row.types'


const Row:FC<RowProps> = ({
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

export default Row