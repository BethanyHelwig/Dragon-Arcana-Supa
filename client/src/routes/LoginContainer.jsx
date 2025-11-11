import React from "react"

export default function LoginContainer() {
    // State values
    const [containerLoginState, setLoginContainerState] = React.useState(true)

    function switchContainer(){
        setLoginContainerState(prevState => !prevState)
    }

    return(
        <main>
            <section id={containerLoginState ? "login-container" : "register-container"}>
                <h2>{containerLoginState ? "Login, hero!" : "New here? Welcome, adventurer!"}</h2>
                <form id={containerLoginState ? "login-form" : "register-form"}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        required
                        id="email"
                        placeholder="adventurer@home.com"
                        name="login" />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        required
                        id="login-password" 
                        placeholder="M@gic1zcool"
                        name="login" />
                    <button type="submit">{containerLoginState ? "Log in" : "Create account"}</button>
                </form>
                <button type="button" onClick={switchContainer} className="btn-alt">
                    {containerLoginState ? "Need to register instead?" : "Already have an account?"}
                </button>
                <button className="btn-alt">
                    Continue as guest
                </button>
            </section>
        </main>
    )
}