import React from 'react'
import styles from './Styling/Header.module.css';

export default function Header() {
    return (
       <div className={styles.headerBackground}> 
        <div className={ styles.container }>
            <div className={ styles.brand }> HELSINGIN SANOMAT</div>
                <div className={ styles.button }>
                    Etusivu
                    Uutiset
                    Lehdet
                    Asiakaspalvelu
                    Tilaa
                    Kirjaudu
                    Valikko
                </div>
            </div>
        </div>
    )
}
