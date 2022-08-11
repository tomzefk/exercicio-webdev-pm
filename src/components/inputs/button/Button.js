import styles from './Button.module.scss'

function Button({ button, dispatch }) {

    function handleClick() {
        dispatch()
    }

    return (
        <input className={`${styles.button} ${styles[button.type]}`} type={button.isSubmit ? "submit" : "button"} onClick={button.isSubmit == false ? handleClick : undefined} value={button.text} />
    )
}

export default Button