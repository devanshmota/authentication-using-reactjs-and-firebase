import React, { useEffect, useState } from 'react'
import { auth } from './Firebase';
import { Link } from 'react-router-dom';

const Home = () => {

    const [username, setUsername] = useState()
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const updateChanegState = async() =>{
            setIsloading(true)
            await auth.onAuthStateChanged(user => {
                if (user) {
                    const email = user.email;
                    const username = email.substring(0, email.indexOf('@'));
                    setUsername(username);
                } else {
                     setUsername(null);
                }
                setIsloading(false)
            });
        }
        updateChanegState()
    }, []);
    const Signout = async() => {
        setIsloading(true)
        await auth.signOut();
        setIsloading(false)
    }
    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <>
            {
                username ?
                    (
                        <>
                            <h1>Welcome to the home {username}</h1>
                            <button onClick={Signout}>Signout</button>
                        </>
                    )
                    :
                    (
                        <>
                            <h1>Please Sign in first</h1>
                            <Link to='/sign-in'>Sign in</Link>
                        </>
                    )
            }
        </>
    )
}

export default Home