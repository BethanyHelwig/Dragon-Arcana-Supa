import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "/src/components/Navbar"
import LoginContainer from './routes/LoginContainer'
import Layout from "/src/components/Layout"
import ThemeProvider from './components/ThemeProvider'
import Search from "./routes/Search"
import NotFound from "./routes/NotFound"

function App() {

	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<LoginContainer />} />
						<Route path="search" element={<Search />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
  	)
}

export default App
