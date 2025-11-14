import React from "react"
import SearchResult from "/src/components/SearchResult"

export default function Search() {

    // State values
    const [ chosenCategory, setChosenCategory ] = React.useState("ability-scores")
    const [ searchResults, setSearchResults ] = React.useState([])
    const [ resultCount, setResultCount ] = React.useState("Results will display here.")

    const categories = [
        {value: "ability_score", name: "Ability Scores"},
        {value: "alignment", name: "Alignments"},
        // {value: "backgrounds", name: "Backgrounds"},
        {value: "character_class", name: "Classes"},
        // {value: "conditions", name: "Conditions"},
        // {value: "damage-types", name: "Damage Types"},
        // {value: "equipment", name: "Equipment"},
        // {value: "equipment-categories", name: "Equipment Categories"},
        // {value: "feats", name: "Feats"},
        // {value: "features", name: "Features"},
        {value: "language", name: "Languages"},
        // {value: "magic-items", name: "Magic Items"},
        // {value: "monsters", name: "Monsters"},
        // {value: "proficiencies", name: "Proficiencies"},
        // {value: "rule-sections", name: "Rule Sections"},
        // {value: "rules", name: "Rules"},
        {value: "school_of_magic", name: "Schools of Magic"},
        {value: "skill", name: "Skills"},
        {value: "spell", name: "Spells"},
        // {value: "subclasses", name: "Subclasses"},
        // {value: "subraces", name: "Subraces"},
        //{value: "traits", name: "Traits"},
        {value: "weapon", name: "Weapons"},
        {value: "weapon_mastery_property", name: "Weapon Mastery"},
        {value: "weapon_property", name: "Weapon Properties"}
    ]

    const categoryElements = categories.map((el) => <option key={el.value} value={el.value}>{el.name}</option>)

    function handleSelectionChange(event){
        setChosenCategory(event.target.value)
    }

    function search(formData){
        const data = Object.fromEntries(formData.entries())
        const { searchText, searchCategory, filter } = data

        let queryURL = `http://127.0.0.1:8080/api/search/${searchCategory}`

        if (searchText || filter){

            if (searchText && !filter) {
                queryURL += `?term=${searchText}`
            }
            else if (filter && !searchText) {
                queryURL += `?filter=${filter}`
            }
            else {
                queryURL += `?term=${searchText}&filter=${filter}`
            }
        }

        console.log(`Fetching: ${queryURL}`)

        fetch(queryURL)
            .then(res => res.json())
            .then(data => {                   
                setSearchResults(data.map(element => ({...element, searchCategory})))
                setResultCount(`${data.length} results found for "${searchText}". Click on a result to expand details.`)
            })
            .catch (err => console.error(err))
    }

    const searchResultsElements = searchResults.map(result => {
            return (
                <SearchResult 
                    key={result.index}
                    data={result}
                    searchCategory={result.searchCategory}
                />
            )
        })

    return (
        <>
            <main className="gradient-border">
                <h2 className="title-glow">World of D&D</h2>
                <form id="search-form" action={search}>
                    <label htmlFor="dnd-search">Search D&D Database:</label>
                    <input type="search" id="dnd-search" name="searchText" placeholder="What are you looking for?" pattern="[a-zA-Z\s0-9]+" />
                    <select name="searchCategory" id="searchCategory" onChange={handleSelectionChange} value={chosenCategory}>
                        {categoryElements}
                    </select>
                    {chosenCategory === "monsters" && <div id="search-filters">
                        <fieldset>
                            <legend>Filter by:</legend>
                            <div>
                                <input type="radio" value="name" id="filter-name" name="filter" defaultChecked />
                                <label htmlFor="filter-name">Name</label>
                            </div>

                            <div>
                                <input type="radio" value="challenge_rating" id="filter-challenge-rating" name="filter" />
                                <label htmlFor="filter-challenge-rating">Challenge Rating</label>
                            </div>
                        </fieldset>
                    </div>
                    }
                    <button type="submit">Go!</button>
                </form>
            </main>
            <section id="search-results" className="gradient-border">
                {resultCount}
                {searchResults.length > 0 && searchResultsElements}
            </section>
        </>
    )
}