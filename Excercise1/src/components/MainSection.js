import React from 'react'
import styles from './Styling/MainSection.module.css';

export default function MainSection(props) {
    return (
        <div className={ styles.container }>
            <span className={ styles.title }> { props.title }: </span> { props.body }
            <div className={ styles.img }> {props.img }</div>
            <div className={ styles.time }> { props.topic } { props.time } </div>
        </div>
    )
}
