import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './Firebase';

const Signin = () => {
    const [formInfo, setFormInfo] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsloading] = useState(false);
    const navigate = useNavigate();

    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }

    const Submit = (e) => {
        e.preventDefault()
        setIsloading(true)
        auth.signInWithEmailAndPassword(formInfo.email, formInfo.password)
            .then(auth => {
                if (auth) {
                    navigate('/');
                }
                setIsloading(false)
            })
            .catch((error) => alert(error.message))
        
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
            <h2>Signin</h2>
            <form onSubmit={Submit}>
                <input type="email" name='email' value={formInfo.email} onChange={handleChange} placeholder='Enter your email' required /> <br />
                <input type="password" name='password' value={formInfo.password} onChange={handleChange} placeholder='Enter your Password' required /> <br />
                <button type='submit'>Signin</button>
            </form>
            <p>
                No account yet??
                <Link to="/sign-up">Sign up</Link>
            </p>
        </>
    )
}

export default Signin