import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  filteredNotes: [],
  favorites: []
};

const notesSlice= createSlice({
    name:"notes",
    initialState,
    reducers:{
        addNote:(state,action)=>{
            state.notes.push(action.payload);
            localStorage.setItem("notes",JSON.stringify(state.notes));

        },
        editNote:(state,action)=>{
            const index=state.notes.findIndex(note=>note.id===action.payload.id);
            if(index!==-1){
                state.notes[index]=action.payload;
                localStorage.setItem("notes",JSON.stringify(state.notes))

            }

        },
        deleteNote:(state,action)=>{
            state.notes=state.notes.filter((note)=>note.id!==action.payload);
            
            localStorage.setItem("notes",JSON.stringify(state.notes))
            
        },
        toggleFavorite:(state,action)=>{
            const note=state.notes.find(note=>note.id===action.payload);
            if(note){
                note.isFavorite=!note.isFavorite;

                localStorage.setItem("notes",JSON.stringify(state.notes));
            }

        }
    }
})
export const { addNote, editNote, deleteNote, toggleFavorite } = notesSlice.actions;

export default notesSlice.reducer;
