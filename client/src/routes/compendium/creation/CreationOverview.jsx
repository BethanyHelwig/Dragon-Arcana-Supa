import { Link } from 'react-router-dom'

export default function CreationOverview(){
    return(
        <div>
            <h2>Choose a Character Sheet</h2>
            <p>You’ll record the main details of your character on
                a character sheet. Throughout this chapter, we use
                the term “character sheet” to mean whatever you
                use to track your character’s details, whether it’s a
                printed character sheet, a digital character sheet, or
                plain paper. Choose whichever style of sheet works
                for you, and then embark on creating a character!</p>
            <h3>Sections of Creation:</h3>
            <ul>
                <li><Link to="create_your_character">Create Your Character</Link></li>
                <li><Link to="level_advancement">Level Advancement</Link></li>
                <li><Link to="starting_at_higher_levels">Starting at Higher Levels</Link></li>
                <li><Link to="multiclassing">Multiclassing</Link></li>
                <li><Link to="trinkets">Trinkets</Link></li>
            </ul>
        </div>
    )
}