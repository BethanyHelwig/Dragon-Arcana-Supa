import { create } from "zustand"
import supabase from "../../supabase-client.js"
import { useAuth } from "../context/AuthContext.jsx"

export const useApiStore = create((set, get) => ({
    usersSavedCharacters: [],
    isSavedCharactersLoading: false,

    getSavedCharacters: async () => {
        set({ isSavedCharactersLoading: true })
        const { data: { user }, error } = await supabase.auth.getUser()

        try {
            const { data, error } = await supabase
                .from('user_saved_characters')
                .select()
                .eq('user_id', user.id)

            if (error) {
                throw error
            } else {
                set({ usersSavedCharacters: data })
            }
            
        }
        catch(err){
            console.log("Error retreiving user's saved characters: ", error)
        }
        finally {
            set({ isSavedCharactersLoading: false })
        }

    }


}))