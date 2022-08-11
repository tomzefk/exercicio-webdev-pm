import { useEffect, useRef } from 'react'
import '../../../styles/_inputs.scss'
import styles from './Phone.module.scss'

function Phone({ value, dispatch }) {

    const inputRef = useRef(null)
    var errorMessage = inputRef.current?.nextElementSibling

    function handleChange(e) {
        // console.log(e.target.value)
        dispatch(e.target.name, e.target.value)
    }

    function handleBlur(e) {
        if (!e.target.checkValidity()) {
            errorMessage.innerHTML = e.target.validationMessage;
            methods.showError()
        } else {
            methods.hideError()
        }
    }

    const methods = {
        showError: () => {
            inputRef.current.classList.add('error')
            errorMessage.classList.remove('hidden')
        },
        hideError: () => {
            inputRef.current.classList.remove('error')
            errorMessage.classList.add('hidden')
        }
    }

    return (
        <div className='wrapper'>
            <label htmlFor="phone">Phone</label>
            <input
                ref={inputRef}
                id="phone"
                type="phone"
                name="phone"
                placeholder={"Insira o seu telefone"}
                minLength={9}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                required
            />
            <p className='error hidden'></p>
        </div>
    )
}

export default Phone
