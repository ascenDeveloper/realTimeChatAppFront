import React from 'react'
import style from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

function Register() {


    const handleChange = (event) => {
        event.preventDefault()
        alert('form')
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        alert('form')
    }

    return (
        <>
            <FormContainer>
                <form onSubmit={event => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                        <h1>snappy</h1>
                    </div>
                    <input
                        type="text"
                        placeholder='Username'
                        name='username'
                        onChange={e => handleChange(e)}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name='email'
                        onChange={e => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        name='password'
                        onChange={e => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        onChange={e => handleChange(e)}
                    />
                    <button type='submit'>Create User</button>
                    <span>
                        Already have an account? <Link to='/login'>Login</Link>
                    </span>
                </form>

            </FormContainer>
        </>
    )
}

const FormContainer = style.div`
    height: 100vh;
    width: 100vw;
`

export default Register