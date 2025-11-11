import React from "react"

const ThemeContext = React.createContext()

export default function ThemeProvider({children}) {

    const [ theme, setTheme ] = React.useState(localStorage.getItem('theme') || 'light')

    function toggleTheme(){
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
        console.log("toggle clicked!")
    }

    React.useEffect(()=> {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext }