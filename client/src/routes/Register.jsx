import { useActionState, useState} from "react"
import { useNavigate, Link } from "react-router-dom"

import { useAuth } from "../context/AuthContext.jsx"

export default function Register() {
    // State values
    const [ error, submitAction, isPending ] = useActionState(
        async(prevState, formData) => {
            const email = formData.get('email')
            const password = formData.get('password')

            
        }, null
    )

    return(
        <main>
            <section id="register-container">
                <h2>New here? Welcome, adventurer!</h2>
                <form id="register-form" action={submitAction}>
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
                        name="password"
                        placeholder="M@gic1zcool"
                         />
                    <button type="submit">Create account</button>
                </form>
                <Link to="/login">
                    Already have an account?
                </Link>
            </section>
        </main>
    )
}