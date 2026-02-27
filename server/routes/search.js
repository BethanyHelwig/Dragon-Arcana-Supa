import express from 'express'
import { 
    getAbilityScores, 
    getSkills, 
    getWeapons, 
    getWeaponProperties, 
    getMastery,
    getClass,
    getSpell,
    getSchoolOfMagic,
    getAlignment,
    getLanguage,
    getSpecies,
    getLifestyle,
    getBackground
    } from '../controllers/searchController.js'

export const searchRouter = express.Router()

searchRouter.get('/ability_score', getAbilityScores)
searchRouter.get('/alignment', getAlignment)
searchRouter.get('/character_class', getClass)
searchRouter.get('/language', getLanguage)
searchRouter.get('/school_of_magic', getSchoolOfMagic)
searchRouter.get('/skill', getSkills)
searchRouter.get('/spell', getSpell)
searchRouter.get('/weapon', getWeapons)
searchRouter.get('/weapon_property', getWeaponProperties)
searchRouter.get('/weapon_mastery_property', getMastery)
searchRouter.get('/species', getSpecies)
searchRouter.get('/lifestyle', getLifestyle)
searchRouter.get('/background', getBackground)
