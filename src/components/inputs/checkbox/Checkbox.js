import { useEffect, useRef } from 'react'
import styles from './Checkbox.module.scss'

function Checkbox({option, isActive, dispatch}) {
    
    useEffect(() => {
        // console.log(option);
    }, [option])


    const checkbox = useRef(null)

    function handleSelect(e) {
        // console.log(e.target.name)
        dispatch(option.id, e.target.checked == true ? "active" : "inactive")
        // e.target.checked
    }

    return (
            <label className={styles.wrapper}>
                <input ref={checkbox} type="checkbox" name={option.id} onChange={handleSelect} checked={isActive}/>
                <span>{option.name}</span>
            </label>
    )
}

export default Checkbox