import { useEffect } from 'react'
import styles from './Sidebar.module.scss'

function Sidebar() {
    return(
        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li><a href="#">Lorem Ipsum</a></li>
                    <li><a href="#" className={styles.active}>Utilizador</a></li>
                    <li><a href="#">Quantum solum</a></li>
                    <li><a href="#">Marcus Tremer</a></li>
                </ul>
            </nav>
            <div className={styles.footer}>
                <p>2019® <a href='https://premium-minds.com'>Premium-minds.com</a></p>
            </div>
        </div>
    )
}

export default Sidebar