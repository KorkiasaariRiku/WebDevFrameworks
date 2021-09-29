import React from 'react'
import styles from './Styling/SideSection.module.css'

export default function SideSection(props) {
    return (
        <div>
        <div className={ styles.container }>
           <span className={ styles.header }>{ props.title } |</span> { props.body }
        </div>
        </div>
    )
}
