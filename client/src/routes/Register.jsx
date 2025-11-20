import { useActionState, useState} from "react"
import { useNavigate, Link } from "react-router-dom"

import { useAuth } from "../context/AuthContext.jsx"

export default function Register() {

    const { registerUser, signInUser } = useAuth()
    const navigate = useNavigate()
    const [ error, submitAction, isPending ] = useActionState(
        async(prevState, formData) => {
            const email = formData.get('email')
            const password = formData.get('password')
            const username = formData.get('username')

            const {
                success,
                data,
                error: registerError
            } = await registerUser(email, password, username)

            if (registerError) {
                return new Error(registerError)
            }
            if (success && data?.session){
                navigate('/dashboard')
                return null
            }
            return null
        }, null
    )

    return(
        <main>
            <section id="register-container">
                <h2>New here? Welcome, adventurer!</h2>
                <form id="register-form" action={submitAction}>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        required
                        id="username"
                        name="username"
                        placeholder="MooTheMighty"
                        maxlength="40"
                        aria-required="true"
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error ? 'register-error' : undefined}
                        disabled={isPending}
                         />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        required
                        id="email"
                        name="email"
                        placeholder="adventurer@home.com"
                        aria-required="true"
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error ? 'register-error' : undefined}
                        disabled={isPending}
                         />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        required
                        id="password" 
                        name="password"
                        placeholder="M@gic1zcool"
                        aria-required="true"
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={error ? 'register-error' : undefined}
                        disabled={isPending}
                         />
                    <button 
                        type="submit"
                        disabled={isPending}
                        aria-busy={isPending}
                    >
                        {isPending ? "Registering... " : "Create account"}
                    </button>
                </form>
                {error && (
                    <div id="register-error" role="alert">
                        {error.message}
                    </div>
                )}
                <Link to="/login">
                    Already have an account?
                </Link>
            </section>
        </main>
    )
}