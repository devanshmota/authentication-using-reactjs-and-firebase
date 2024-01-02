import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './Firebase'


const Signup = () => {

    const [formInfo, setFormInfo] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsloading] = useState(false);

    const navigate = useNavigate()

    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }

    const Submit = (e) => {
        e.preventDefault()
        setIsloading(true)
        auth.createUserWithEmailAndPassword(formInfo.email, formInfo.password)
            .then((auth) => {
                navigate('/sign-in');
                setIsloading(false)
            })
            .catch(error => alert(error.message))
        
        setFormInfo({
            email: '',
            password: ''
        })
    }

    const handleChange = (e) => {
        e.preventDefault()
        let { name, value } = e.target
        setFormInfo((prevData) => ({ ...prevData, [name]: value }))
    }

    return (
        <>
            <h2>Signup</h2>
            <form onSubmit={Submit}>
                <input type="email" name='email' value={formInfo.email} onChange={handleChange} placeholder='Enter your email' required /> <br />
                <input type="password" name='password' value={formInfo.password} onChange={handleChange} placeholder='Enter your Password' required /> <br />
                <button type='submit'>Signup</button>
            </form>
            <p>
                Already have an account?
                <Link to="/sign-in">Sign in</Link>
            </p>
        </>
    )
}

export default Signup