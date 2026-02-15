import { useActionState, useState} from "react"
import { useNavigate, Link } from "react-router-dom"

import { useAuth } from "../context/AuthContext.jsx"

export default function Login() {

    const { signInUser } = useAuth()
    const navigate = useNavigate()
    const [ error, submitAction, isPending ] = useActionState(
        async(prevState, formData) => {
            const email = formData.get('email')
            const password = formData.get('password')

            const {
                success,
                data,
                error: signInError
            } = await signInUser(email, password)

            if (signInError) {
                return new Error(signInError)
            }
            if (success && data?.session){
                navigate('/dashboard')
                return null
            }
            return null
            
        }, null
    )

    // TODO: add in error message toast when something goes wrong
    
    return(
        <main>
            <section id="login-container">
                <h2>Login, hero!</h2>
                <form id="login-form" action={submitAction}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        required
                        id="email"
                        name="email"
                        placeholder="adventurer@home.com"
                         />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        required
                        id="password" 
                        placeholder="M@gic1zcool"
                        name="password" />
                    <button type="submit">
                        {isPending ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
                <Link to="/register">
                    Need to register instead?
                </Link>
            </section>
        </main>
    )
}