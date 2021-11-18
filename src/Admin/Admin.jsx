import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import './Admin.css'
import Dasboard from './Dasboard'
import LoginAdmin from './LoginAdmin'

function Admin() {
    const [{ admin }] = useStateValue();

    return (
        <div className="admin-container">
            {admin ? <Dasboard /> : <LoginAdmin />}
        </div>
    )
}

export default Admin
