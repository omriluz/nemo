import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import leftHero from '../assets/svg/leftHero.svg'
import rightHero from '../assets/svg/rightHero.svg'

export const LoginSignup = () => {

    const params = useParams()
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(false)

    useEffect(() => {

        onIsSignup()

    }, [isSignup])


    const onIsSignup = () => {
        const { signup } = params
        // console.log(signup);
        if (signup) setIsSignup(true)
        else setIsSignup(false)

    }

    return (
        <section className="login-page flex column">
            <header><h1>Nemo</h1> </header>
            <div className="login-signup-container">
                <form className="flex column align-center" >
                    {isSignup ? <> <h1>Sign up for your account</h1>
                        <input type="text" id="fullname" name="fullname" placeholder="Enter full name" />
                        <br /> </> : <h1>Login to Nemo</h1>}
                    <input type="text" id="username" name="username" placeholder="Enter username"
                    />
                    <br />
                    <input type="password" id="password" name="password" placeholder="Enter password"
                    />
                    <button className={`logbtn ${isSignup ? 'signup' : 'login'}`}>{isSignup ? 'Signup' : 'Log in'}</button>
                    <h3>OR</h3>
                </form>
                <div className="more-opt flex column align-center ">
                    <button><p>Continue as Guest</p> </button>
                    <button><p>Continue with Google</p> </button>
                </div>
                <hr />
                <button>Back Home</button> <button></button>
            </div>
            <img className="left-hero" src={leftHero} />
            <img className="right-hero" src={rightHero} />
        </section>
    )
}