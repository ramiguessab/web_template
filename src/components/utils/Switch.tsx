import React, { ReactElement } from 'react'

interface SwitchProps {
    children: React.ReactNode
    on: string | number
}

export function Root({ children, on }: SwitchProps) {
    const childs = React.Children.toArray(children) as ReactElement[]

    return (
        childs.find((child) => (child.props as StatementProps).inCase === on) ||
        childs.find(
            (child) => (child.props as StatementProps).type === 'default'
        )
    )
}

interface CaseProps {
    type: 'case'
    inCase: number | string
    children: React.ReactNode
}

interface DefaultProps {
    type: 'default'
    inCase?: never
    children: React.ReactNode
}

type StatementProps = CaseProps | DefaultProps

/* eslint-disable-next-line  */
export function Case({ type, inCase, children }: StatementProps) {
    return children
}
