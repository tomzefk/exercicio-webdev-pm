import { useEffect, useRef } from 'react'
import '../../../styles/_inputs.scss'
import styles from './Password.module.scss'

function Password({ value, dispatch }) {

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
            <label htmlFor="password">Password</label>
            <input
                ref={inputRef}
                id="password"
                type="password"
                name="password"
                placeholder={"Insira a sua password"}
                minLength={8}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                required
            />
            <p className='error hidden'></p>
        </div>
    )
}

export default Password
