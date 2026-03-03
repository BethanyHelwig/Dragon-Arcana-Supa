/* Utility */
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'
import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";

/* Components */
import Layout from "/src/components/Layout"
import ThemeProvider from './components/ThemeProvider'

/* Routes */
import Login from './routes/Login'
import Search from "./routes/Search"
import Dashboard from "./routes/Dashboard"
import Profile from "./routes/Profile"
import Splash from "./routes/Splash"
import Characters from "./routes/Characters"
import Friends from "./routes/Friends"
import Games from "./routes/Games"
import Register from "./routes/Register"
import NotFound from "./routes/NotFound"
import CharacterSheet from "./routes/CharacterSheet"

/* Character Creation and sub routes */
import CharacterCreation from "./routes/CharacterCreation"
import Class from "./routes/character/Class"
import Species from "./routes/character/Species"
import Skills from "./routes/character/Skills"
import Background from "./routes/character/Background"
import About from "./routes/character/About"
import AbilityScores from "./routes/character/AbilityScores"
import Spells from "./routes/character/Spells"

function App() {

	return (
		<ThemeProvider>
			<AuthContextProvider>
				<Toaster containerStyle={{top: '30%'}} />
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<Splash />} />
							<Route path="search" element={<Search />} />
							<Route element={<ProtectedRoute/>}>
								<Route path="dashboard" element={<Dashboard />} />
								<Route path="profile" element={<Profile />} />
								<Route path="characters" element={<Characters />} />
								<Route path="characters/:id" element={<CharacterSheet />} />
								<Route path="character_creation" element={<CharacterCreation />} >
									<Route index element={<Class />} />
									<Route path="skills" element={<Skills />} />
									<Route path="ability_scores" element={<AbilityScores />} />
									<Route path="background" element={<Background />} />
									<Route path="about" element={<About />} />
									<Route path="species" element={<Species />} />
									<Route path="spells" element={<Spells />} />
								</Route>
								<Route path="friends" element={<Friends />} />
								<Route path="games" element={<Games />} />
							</Route>
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</AuthContextProvider>
		</ThemeProvider>
  	)
}

export default App
