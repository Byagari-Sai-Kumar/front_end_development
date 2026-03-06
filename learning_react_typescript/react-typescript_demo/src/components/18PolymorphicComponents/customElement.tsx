import React from "react"

type CustomElementProps<E extends React.ElementType> = {
    size: string
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}

type CustomElementOwnProps<E extends React.ElementType> = CustomElementProps<E> &
Omit<React.ComponentProps<E>, keyof CustomElementProps<E>>

export const CustomElement = <E extends React.ElementType = 'div'>({as,size,color,children}: CustomElementOwnProps<E>) => {
    const Component = as || 'div'
    return(
        <Component className={`class-with-${size}-${color}`}>
            {children}
        </Component>
    )
}