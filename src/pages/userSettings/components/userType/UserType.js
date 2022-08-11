import { useEffect, useState } from 'react'
import styles from './UserType.module.scss'
import Checkbox from '../../../../components/inputs/checkbox/Checkbox'

import { useSelector, useDispatch } from 'react-redux'
import { toggle_type } from '../../js/userSettingsSlice'


function UserType() {
    const userTypes = [
        {
            id: "prjctmngr",
            name: "Project Manager",
        },
        {
            id: "dev",
            name: "Developer",
        },
        {
            id: "arch",
            name: "Architect",
        }
    ]

    const userType = useSelector((state) => state.userSettings.userType)
    const dispatch = useDispatch()

    function handleToggle(id, func) {
        dispatch(toggle_type({ id, func }))
    }

    return (
        <div className={styles.wrapper}>

            {
                userTypes.map(
                    (option, i) => (
                        <Checkbox
                            key={i}
                            option={userTypes[i]}
                            isActive={userType.indexOf(userTypes[i].id) !== -1 ? true : false}
                            dispatch={handleToggle}
                        />
                    )
                )
            }
        </div>
    )
}

export default UserType