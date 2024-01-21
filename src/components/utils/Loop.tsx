import React from 'react'

interface LoopProps<T> {
    items: T[]
    /* eslint-disable-next-line no-unused-vars  */
    render: (item: T, index: number, array: T[]) => React.ReactNode
    /* eslint-disable-next-line no-unused-vars  */
    _key: (item: T) => string
}

export default function Loop<T>({ items, render, _key }: LoopProps<T>) {
    return items.map((item, index, array) => (
        <React.Fragment key={_key(item)}>
            {render(item, index, array)}
        </React.Fragment>
    ))
}
