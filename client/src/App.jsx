import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "/src/components/Navbar"
import Login from './routes/Login'
import Layout from "/src/components/Layout"
import ThemeProvider from './components/ThemeProvider'
import Search from "./routes/Search"
import Dashboard from "./routes/Dashboard"
import NotFound from "./routes/NotFound"
import Register from "./routes/Register"
import RootRedirect from './routes/RootRedirect'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContextProvider } from './context/AuthContext'

function App() {

	return (
		<ThemeProvider>
			<AuthContextProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<RootRedirect />} />
							<Route path="search" element={<Search />} />
							<Route element={<ProtectedRoute/>}>
								<Route path="dashboard" element={<Dashboard />} />
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
