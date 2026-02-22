import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useApiStore } from '../store/useApiStore'

export default function CharacterSheet(){

    const { id } = useParams()
    const { getSelectedCharacter, isSelectedCharacterLoading, selectedCharacter } = useApiStore()

    useEffect(() => {
        getSelectedCharacter(id)
    }, [])

    return (
        <main id="character-sheet-main">
            {isSelectedCharacterLoading && <i className="fa-solid fa-spinner spinning-icon"></i>}
            {selectedCharacter &&    
            <>
                <div className="character-sheet gradient-border width-80">
                    <div className="character-sheet-header">
                        <h1 className="title-glow">{selectedCharacter[0].name}</h1><i className="fa-solid fa-pen-to-square"></i> 
                    </div>
                    <h2>{id}</h2>
                </div>
            </>
            }
        </main>
    )
}