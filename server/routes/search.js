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
    getBackground,
    getClassFeatures,
    getFeats,
    getRulesGlossary,
    getMonsters,
    getMetamagicOptions,
    getEldritchInvocationOptions,
    getBarbarianFeatures,
    getBardFeatures,
    getClericFeatures,
    getDruidFeatures,
    getFighterFeatures,
    getMonkFeatures,
    getPaladinFeatures,
    getRangerFeatures,
    getRogueFeatures,
    getSorcererFeatures,
    getWarlockFeatures,
    getWizardFeatures,
    getAnimals,
    getTrinket,
    getAdventuringGear,
    getMounts,
    getTackHarnessVehicles,
    getAirborneWaterborneVehicles,
    getFoodDrinkLodging,
    getHirelings,
    getSpellCastingService,
    getMulticlassSpellcaster,
    getTools,
    getArmor
    } from '../controllers/searchController.js'

export const searchRouter = express.Router()

searchRouter.get('/ability_score', getAbilityScores)
searchRouter.get('/adventuring_gear', getAdventuringGear)
searchRouter.get('/airborne_waterborne_vehicles', getAirborneWaterborneVehicles)
searchRouter.get('/alignment', getAlignment)
searchRouter.get('/animals', getAnimals)
searchRouter.get('/armor', getArmor)
searchRouter.get('/background', getBackground)
searchRouter.get('/character_class', getClass)
searchRouter.get('/class_features', getClassFeatures)
searchRouter.get('/feat', getFeats)
searchRouter.get('/food_drink_lodging', getFoodDrinkLodging)
searchRouter.get('/hirelings', getHirelings)
searchRouter.get('/language', getLanguage)
searchRouter.get('/lifestyle', getLifestyle)
searchRouter.get('/monsters', getMonsters)
searchRouter.get('/mounts', getMounts)
searchRouter.get('/multiclass_spellcaster', getMulticlassSpellcaster)
searchRouter.get('/rules_glossary', getRulesGlossary)
searchRouter.get('/school_of_magic', getSchoolOfMagic)
searchRouter.get('/skill', getSkills)
searchRouter.get('/species', getSpecies)
searchRouter.get('/spell', getSpell)
searchRouter.get('/spellcasting_service', getSpellCastingService)
searchRouter.get('/tack_harness_vehicles', getTackHarnessVehicles)
searchRouter.get('/tools', getTools)
searchRouter.get('/trinket', getTrinket)
searchRouter.get('/weapon', getWeapons)
searchRouter.get('/weapon_mastery_property', getMastery)
searchRouter.get('/weapon_property', getWeaponProperties)

// ** special class options **
searchRouter.get('/metamagic_options', getMetamagicOptions)
searchRouter.get('/eldritch_invocation_options', getEldritchInvocationOptions)

// ** CLASS SPECIFIC FEATURES **
searchRouter.get('/features/barbarian', getBarbarianFeatures)
searchRouter.get('/features/bard', getBardFeatures)
searchRouter.get('/features/cleric', getClericFeatures)
searchRouter.get('/features/druid', getDruidFeatures)
searchRouter.get('/features/fighter', getFighterFeatures)
searchRouter.get('/features/monk', getMonkFeatures)
searchRouter.get('/features/paladin', getPaladinFeatures)
searchRouter.get('/features/ranger', getRangerFeatures)
searchRouter.get('/features/rogue', getRogueFeatures)
searchRouter.get('/features/sorcerer', getSorcererFeatures)
searchRouter.get('/features/warlock', getWarlockFeatures)
searchRouter.get('/features/wizard', getWizardFeatures)