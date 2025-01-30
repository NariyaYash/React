import React, { useContext, useState } from 'react'
import UserContext from '../userContext';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext)

    const submitData = () => {
        setUser({ name, password })
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} type='text' />
                {'  '}
                <input placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} type='text' />
                <div>
                    <button type='button' onClick={() => submitData()}>Submit</button>
                </div>
            </div>

        </>
    )
}

export default Login