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

/* Compendium and sub routes */
import Compendium from './routes/Compendium';
import CompendiumHome from './routes/compendium/CompendiumHome'
import PlayingTheGame from './routes/compendium/PlayingTheGame'
import RulesGlossary from './routes/compendium/RulesGlossary'
import GameplayToolbox from './routes/compendium/GameplayToolbox';
/* Rules Glossary sub routes */
import GlossaryConventions from './routes/compendium/glossary/GlossaryConventions'
import GlossaryTerm from './routes/compendium/glossary/GlossaryTerm';
/* Compendium/PlayingTheGame sub routes */
import RhythmOfPlay from './routes/compendium/playingthegame/RhythmOfPlay'
import TheSixAbilities from './routes/compendium/playingthegame/TheSixAbilities'
import D20Tests from './routes/compendium/playingthegame/D20Tests'
import Proficiency from './routes/compendium/playingthegame/Proficiency'
import Actions from './routes/compendium/playingthegame/Actions'
import SocialInteraction from './routes/compendium/playingthegame/SocialInteraction'
import Exploration from './routes/compendium/playingthegame/Exploration'
import Combat from './routes/compendium/playingthegame/Combat'
import DamageAndHealing from './routes/compendium/playingthegame/DamageAndHealing'
/* Gameplay Toolbox sub routes */
import CombatEncounters from './routes/compendium/gameplaytoolbox/CombatEncounters'
import CreatingABackground from "./routes/compendium/gameplaytoolbox/CreatingABackground"
import CursesAndMagicalContagions from "./routes/compendium/gameplaytoolbox/CursesAndMagicalContagions"
import EnvironmentalEffects from "./routes/compendium/gameplaytoolbox/EnvironmentalEffects"
import FearAndMentalStress from "./routes/compendium/gameplaytoolbox/FearAndMentalStress"
import Poison from "./routes/compendium/gameplaytoolbox/Poison"
import Traps from "./routes/compendium/gameplaytoolbox/Traps"
import TravelPace from "./routes/compendium/gameplaytoolbox/TravelPace"

function App() {

	return (
		<ThemeProvider>
			<AuthContextProvider>
				<Toaster containerStyle={{top: '30%'}} />
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path="/" element={<Splash />} />
							<Route path="compendium" element={<Compendium />} >
								<Route index element={<CompendiumHome />} />
								<Route path="search" element={<Search />} />
								<Route path="gameplay_toolbox" element={<GameplayToolbox />}>
									<Route index element={<CombatEncounters/>}/>
									<Route path="creating_a_background" element={<CreatingABackground/>}/>
									<Route path="curses_and_magical_contagions" element={<CursesAndMagicalContagions/>}/>
									<Route path="environmental_effects" element={<EnvironmentalEffects/>}/>
									<Route path="fear_and_mental_stress" element={<FearAndMentalStress/>}/>
									<Route path="poison" element={<Poison/>}/>
									<Route path="traps" element={<Traps/>}/>
									<Route path="travel_pace" element={<TravelPace/>}/>
								</Route>
								<Route path="rules_glossary" element={<RulesGlossary />}>
									<Route index element={<GlossaryConventions />} />
									<Route path=":id" element={<GlossaryTerm />} />
								</Route>
								<Route path="playing_the_game" element={<PlayingTheGame />}>
									<Route index element={<RhythmOfPlay />} />
									<Route path="the_six_abilities" element={<TheSixAbilities />} />
									<Route path="d20_tests" element={<D20Tests />} />
									<Route path="proficiency" element={<Proficiency />} />
									<Route path="actions" element={<Actions />} />
									<Route path="social_interaction" element={<SocialInteraction />} />
									<Route path="exploration" element={<Exploration />} />
									<Route path="combat" element={<Combat />} />
									<Route path="damage_and_healing" element={<DamageAndHealing />} />
								</Route>
							</Route>
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
