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
import Compendium from './routes/Compendium'
import CompendiumHome from './routes/compendium/CompendiumHome'
import PlayingTheGame from './routes/compendium/PlayingTheGame'
import RulesGlossary from './routes/compendium/RulesGlossary'
import GameplayToolbox from './routes/compendium/GameplayToolbox'
import Monsters from './routes/compendium/Monsters'
import Animals from './routes/compendium/Animals';
import MagicItems from './routes/compendium/MagicItems';
import Classes from './routes/compendium/Classes';
import CreationGuide from './routes/compendium/CreationGuide';
import Equipment from './routes/compendium/Equipment';
/* Compendium/Rules Glossary sub routes */
import GlossaryConventions from './routes/compendium/glossary/GlossaryConventions'
import GlossaryTerm from './routes/compendium/glossary/GlossaryTerm'
/* Compendium/Monsters sub routes */
import MonstersOverview from './routes/compendium/monsters/MonstersOverview'
import MonsterDetails from './routes/compendium/monsters/MonsterDetails'
/* Compendium/Animals sub routes */
import AnimalsOverview from './routes/compendium/animals/AnimalsOverview';
import AnimalDetails from './routes/compendium/animals/AnimalDetails';
/* Compendium/Classes sub routes */
import ClassesOverview from './routes/compendium/classes/ClassesOverview';
import ClassDetails from './routes/compendium/classes/ClassDetails';
/* Compendium/CreationGuide sub routes */
import CreationOverview from './routes/compendium/creation/CreationOverview';
import CreateYourCharacter from './routes/compendium/creation/CreateYourCharacter';
import LevelAdvancement from './routes/compendium/creation/LevelAdvancement';
import StartingAtHigherLevels from './routes/compendium/creation/StartingAtHigherLevels';
import Multiclassing from './routes/compendium/creation/Multiclassing';
import Trinkets from './routes/compendium/creation/Trinkets';
/* Compendium/Equipment sub routes */
import Coins from './routes/compendium/equipment/Coins';
import AdventuringGear from './routes/compendium/equipment/AdventuringGear'
import Armor from './routes/compendium/equipment/Armor'
import BrewingPotions from './routes/compendium/equipment/BrewingPotions'
import CraftingNonmagicalItems from './routes/compendium/equipment/CraftingNonmagicalItems';
import FoodDrinkAndLodging from './routes/compendium/equipment/FoodDrinkAndLodging';
import Hirelings from './routes/compendium/equipment/Hirelings';
import LifestyleExpenses from './routes/compendium/equipment/LifestyleExpenses';
import MagicItemsEquipment from './routes/compendium/equipment/MagicItemsEquipment';
import MountsAndVehicles from './routes/compendium/equipment/MountsAndVehicles';
import ScribingSpellScrolls from './routes/compendium/equipment/ScribingSpellScrolls';
import SpellcastingForHire from './routes/compendium/equipment/SpellcastingForHire'
import Tools from './routes/compendium/equipment/Tools';
import Weapons from './routes/compendium/equipment/Weapons';
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
/* Compendium/Gameplay Toolbox sub routes */
import CombatEncounters from './routes/compendium/gameplaytoolbox/CombatEncounters'
import CreatingABackground from "./routes/compendium/gameplaytoolbox/CreatingABackground"
import CursesAndMagicalContagions from "./routes/compendium/gameplaytoolbox/CursesAndMagicalContagions"
import EnvironmentalEffects from "./routes/compendium/gameplaytoolbox/EnvironmentalEffects"
import FearAndMentalStress from "./routes/compendium/gameplaytoolbox/FearAndMentalStress"
import Poison from "./routes/compendium/gameplaytoolbox/Poison"
import Traps from "./routes/compendium/gameplaytoolbox/Traps"
import TravelPace from "./routes/compendium/gameplaytoolbox/TravelPace"
/* Compendium/Magic Items sub routes */
import MagicItemCategories from './routes/compendium/magic_items/MagicItemCategories';
import MagicItemRarity from './routes/compendium/magic_items/MagicItemRarity';
import ActivatingAMagicItem from './routes/compendium/magic_items/ActivatingAMagicItem';
import TheNextDawn from './routes/compendium/magic_items/TheNextDawn';
import CursedItems from './routes/compendium/magic_items/CursedItems';
import MagicItemResilience from './routes/compendium/magic_items/MagicItemResilience';
import CraftingMagicItems from './routes/compendium/magic_items/CraftingMagicItems';
import SentientMagicItems from './routes/compendium/magic_items/SentientMagicItems';

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
								<Route path="monsters" element={<Monsters />}>
									<Route index element={<MonstersOverview />}/>
									<Route path=":id" element={<MonsterDetails />}/>
								</Route>
								<Route path="animals" element={<Animals />}>
									<Route index element={<AnimalsOverview />}/>
									<Route path=":id" element={<AnimalDetails />}/>
								</Route>
								<Route path="classes" element={<Classes />}>
									<Route index element={<ClassesOverview />}/>
									<Route path=":id" element={<ClassDetails />}/>
								</Route>
								<Route path="creation_guide" element={<CreationGuide />}>
									<Route index element={<CreationOverview />}/>
									<Route path="create_your_character" element={<CreateYourCharacter />}/>
									<Route path="level_advancement" element={<LevelAdvancement />}/>
									<Route path="starting_at_higher_levels" element={<StartingAtHigherLevels />}/>
									<Route path="multiclassing" element={<Multiclassing />}/>
									<Route path="trinkets" element={<Trinkets />}/>
								</Route>
								<Route path="equipment" element={<Equipment />}>
									<Route index element={<AdventuringGear />}/>
									<Route path="coins" element={<Coins />}/>
									<Route path="armor" element={<Armor />}/>
									<Route path="brewing_potions" element={<BrewingPotions />}/>
									<Route path="crafting_nonmagical_items" element={<CraftingNonmagicalItems />}/>
									<Route path="food_drink_and_lodging" element={<FoodDrinkAndLodging />}/>
									<Route path="hirelings" element={<Hirelings />}/>
									<Route path="lifestyle_expenses" element={<LifestyleExpenses />}/>
									<Route path="magic_items" element={<MagicItemsEquipment />}/>
									<Route path="mounts_and_vehicles" element={<MountsAndVehicles />}/>
									<Route path="scribing_spell_scrolls" element={<ScribingSpellScrolls />}/>
									<Route path="spellcasting_for_hire" element={<SpellcastingForHire />}/>
									<Route path="tools" element={<Tools />}/>
									<Route path="weapons" element={<Weapons />}/>
								</Route>
								<Route path="magic_items" element={<MagicItems />}>
									<Route index element={<MagicItemCategories />}/>
									<Route path="magic_item_rarity" element={<MagicItemRarity />}/>
									<Route path="activating_a_magic_item" element={<ActivatingAMagicItem />}/>
									<Route path="the_next_dawn" element={<TheNextDawn />}/>
									<Route path="cursed_items" element={<CursedItems />}/>
									<Route path="magic_item_resilience" element={<MagicItemResilience />}/>
									<Route path="crafting_magic_items" element={<CraftingMagicItems />}/>
									<Route path="sentient_magic_items" element={<SentientMagicItems />}/>
								</Route>
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
