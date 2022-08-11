import { useEffect, useState } from 'react'
import styles from './UserInfo.module.scss'

import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../js/userSettingsSlice'

import Email from '../../../../components/inputs/email'
import Password from '../../../../components/inputs/password'
import Phone from '../../../../components/inputs/phone'

function UserInfo() {
    const userInfo = useSelector((state) => state.userSettings.userInfo)
    const dispatch = useDispatch()

    function handleChange(id, value) {
        dispatch(update({ id, value }))
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <Email value={userInfo.email} dispatch={handleChange} />
                <Phone value={userInfo.phone} dispatch={handleChange} />
            </div>
            <Password value={userInfo.password} dispatch={handleChange} />
        </div>
    )
}

export default UserInfo