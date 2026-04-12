// import supabase from '../supabase-client.js'

// export async function retrieveSavedCharacters(req, res){
//     const { } = req

//     const dataIn = req.get('Data')
//     console.log(dataIn)
//     const { data: { user }, error } = await supabase.auth.getUser()
//     console.log(user)

//     try {
//         const { data, error } = await supabase
//             .from('user_saved_characters')
//             .select()
//             .eq('user_id', user.id)

//         if (error) {
//             throw error
//         }
//         res.status(200).json(data)
        
//     }
//     catch(err){
//         res.status(500).json({error: 'Failed to fetch saved characters: ', details: err.message})
//     }
// }

// export async function saveNewCharacter(req, res) {
//     try {
//         const { data, error } = await supabase.from("user_saved_characters").insert(req.body)

//         if (error) {
//             throw error
//         }
//         res.status(201).json(data)

//     } catch (error) {
//         res.status(500).json({error: 'Failed to save character: ', details: err.message})
//     }
// }

// export async function updateCharacter(req, res) {
//     try {
//         const { data, error } = await supabase
//             .from("user_saved_characters")
//             .update(
//                 //ternary operators for each field that can be updated
//             )
//             .eq('id', req.params.id)

//         if (error) {
//             throw error
//         }
//         res.status(200).json(data)

//     } catch (error) {
//         res.status(500).json({error: 'Failed to update character: ', details: err.message})
//     }
// }

// export async function deleteCharacter(req, res) {
//     try {
//         const { data, error } = await supabase
//             .from('user_saved_characters')
//             .delete()
//             .eq('id', req.params.id)

//                 if (error) {
//             throw error
//         }
//         res.status(200).json(data)

//     } catch (error) {
        
//     }
// }