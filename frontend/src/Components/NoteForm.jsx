import {useState} from "react";
import {useDispatch} from "react-redux"
import { addNote } from "../Redux/notesSlice";

export function NoteForm({ onClose }){
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");

    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();    

        if(!title.trim()||!content.trim()) return;

        const newNote={
            id:Date.now().toString(),
            title,
            content,
            isFavorite:false,
            createdAt:new Date().toISOString(),
        };
        dispatch(addNote(newNote));
        setTitle("");
        setContent("");
        if (onClose) onClose();
    }
    
    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h3>New Note</h3>
                {onClose && (
                    <button type="button" onClick={onClose} className="close-btn">×</button>
                )}
            </div>
            
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    placeholder="Enter title" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                    required
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea 
                    placeholder="Enter content" 
                    value={content}
                    onChange={(e)=>setContent(e.target.value)} 
                    required
                    className="form-input edit-textarea"
                />
            </div>

            <div className="form-actions">
                {onClose && <button type="button" onClick={onClose} className="btn-cancel">Cancel</button>}
                <button type="submit" className="btn-submit">Add Note</button>
            </div>
        </form>
    )
}