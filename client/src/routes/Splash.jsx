import { useContext } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import { ThemeContext } from "../components/ThemeProvider"
import { motion } from "framer-motion"

export default function Splash(){

    const { theme } = useContext(ThemeContext)
    const { session } = useAuth()

    return (
        <main id="splash-page">
            <div className="flex-row">
                <div className="flex-column">
                    <h1>Play Dungeons & Dragons online</h1>
                    <p>Welcome, adventurer! This site uses the 5.5e (2024 revised) ruleset of Dungeons & Dragons.
                        If you're not sure where to start, check out the Compendium!
                    </p>
                    {session && <Link className="btn-lookalike" to="/dashboard">Go to your Dashboard</Link>}
                    {!session && 
                        <>
                            <Link className="btn-lookalike" to="/register">Sign up for free</Link>
                            <Link className="btn-lookalike" to="/login">Sign in</Link>
                        </>
                    }
                </div>
                <motion.img
                    src={theme === 'dark' ? "/src/assets/logo_dark_mode.png" : "/src/assets/logo_light_mode.png"}
                    width="300px"
                    height="100%"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                />
            </div>
            <h2>What's New</h2>
            <div className="whats-new-content">
                <h3>Welcome to Dragon Arcana!</h3>
                <em>11.20.2025</em>
                <p>Authentication is up!</p>
            </div>
        </main>
    )

        // // Container controls stagger timing
    // const container = {
    //     hidden: {},
    //     visible: {
    //         transition: {
    //             staggerChildren: 0.15
    //         }
    //     }
    // }

    // // Reusable animation for items
    // const item = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: { opacity: 1, y: 0 }
    // }

    // return (
    //     <motion.main
    //         id="splash-page"
    //         variants={container}
    //         initial="hidden"
    //         animate="visible"
    //     >
    //         <div className="flex-row">
    //             <motion.div className="flex-column" variants={item}>
    //                 <motion.h1 variants={item}>
    //                     Play Dungeons & Dragons online
    //                 </motion.h1>

    //                 {session && (
    //                     <motion.div variants={item}>
    //                         <Link className="btn-lookalike" to="/dashboard">
    //                             Go to your Dashboard
    //                         </Link>
    //                     </motion.div>
    //                 )}

    //                 {!session && (
    //                     <>
    //                         <motion.div variants={item}>
    //                             <Link className="btn-lookalike" to="/register">
    //                                 Sign up for free
    //                             </Link>
    //                         </motion.div>

    //                         <motion.div variants={item}>
    //                             <Link className="btn-lookalike" to="/login">
    //                                 Sign in
    //                             </Link>
    //                         </motion.div>
    //                     </>
    //                 )}

    //                 <motion.p variants={item}>
    //                     This site uses the 5.5e (2024 revised) ruleset of Dungeons & Dragons.
    //                 </motion.p>
    //             </motion.div>

    //             <motion.img
    //                 variants={item}
    //                 src={theme === 'dark' ? "/src/assets/logo_dark_mode.png" : "/src/assets/logo_light_mode.png"}
    //                 width="300px"
    //                 height="100%"
    //             />
    //         </div>

    //         <motion.h2 variants={item}>What's New</motion.h2>

    //         <motion.div className="whats-new-content" variants={item}>
    //             <h3>Welcome to Dragon Arcana!</h3>
    //             <em>11.20.2025</em>
    //             <p>Authentication is up!</p>
    //         </motion.div>
    //     </motion.main>
    // )
}