import { ReactComponent as Logo } from '../../styles/images/LOGO-WDR.svg'
import { FiMenu } from 'react-icons/fi'

import styles from './Header.module.scss'

function Header({ isMenuOpen, setIsMenuOpen }) {
    function handleClick() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>
            <FiMenu className={styles['menu-icon']} onClick={handleClick} />
            <Logo />
        </header>
    )
}

export default Header