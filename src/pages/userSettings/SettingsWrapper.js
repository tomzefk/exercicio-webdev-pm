import { useDispatch } from 'react-redux'
import { reset } from './js/userSettingsSlice'

import Accordion from '../../components/accordion'
import UserType from './components/userType'
import UserInfo from './components/userInfo'
import Button from '../../components/inputs/button'
import styles from './SettingsWrapper.module.scss'

function SettingsWrapper() {
    const dispatch = useDispatch()

    function resetForm() {
        dispatch(reset())
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.pageTitle}>Utilizador</h1>
            <form>
                <Accordion content={[{ title: "Tipo de utilizador", component: <UserType /> }, { title: "Contacto", component: <UserInfo /> }]} />
                <div className={styles.actionsWrapper}>
                    <Button
                        button={{
                            text: "Cancelar",
                            type: "secondary",
                            isSubmit: false,
                        }}
                        dispatch={resetForm}

                    />
                    <Button
                        button={{
                            text: "Guardar",
                            type: "primary",
                            isSubmit: true
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

export default SettingsWrapper