import React from "react";
import './style.css'
import styles from './styles.module.css'
import {ChildStyleComponent} from './childComponent'

//1) Using regular .css files to style
    //we can use single class name or multiple classNames using "" or ``
    //child elements even from the another files will inherit the classes from the parent component

//2) Using Inline styling
    //define all the styles in an object and use them using style attribute
    //cannot use in child components

//3) Uding .module.css file
    //define all your styles and use them using template literals in this file
    //cannot use in child components

const inlineStyling = {
    fontStyle: 'italic',
    fontSize: '24px'
}

export const ParentStylingComponent = () => {
    return(
        <>
            <h1 className="primary secondary">Hello React</h1>
            <ChildStyleComponent/>

            <h1 style={inlineStyling}>Hello Javascript</h1>
            <h1 className={`${styles.firstStyle} ${styles.secondStyle}`}>Hello CSS Modules</h1>
        </>
    )
}