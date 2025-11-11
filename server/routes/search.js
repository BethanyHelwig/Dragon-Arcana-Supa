import express from 'express'
import { getAbilityScores, getSkills, getWeapons } from '../controllers/searchController.js'

export const searchRouter = express.Router()

searchRouter.get('/ability_score', getAbilityScores)
searchRouter.get('/skill', getSkills)
searchRouter.get('/weapon', getWeapons)