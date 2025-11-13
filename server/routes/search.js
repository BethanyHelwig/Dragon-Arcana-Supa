import express from 'express'
import { 
    getAbilityScores, 
    getSkills, 
    getWeapons, 
    getWeaponProperties, 
    getMastery 
    } from '../controllers/searchController.js'

export const searchRouter = express.Router()

searchRouter.get('/ability_score', getAbilityScores)
searchRouter.get('/skill', getSkills)
searchRouter.get('/weapon', getWeapons)
searchRouter.get('/weapon_property', getWeaponProperties)
searchRouter.get('/weapon_mastery_property', getMastery)