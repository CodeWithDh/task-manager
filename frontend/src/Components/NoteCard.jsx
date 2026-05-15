import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, toggleFavorite, editNote } from "../Redux/notesSlice";

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="blue">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const DeleteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="red">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const StarIcon = ({ isFavorite }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={isFavorite ? "gold" : "grey"}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export function NoteCard({ note }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const saveEdit = () => {
    dispatch(editNote({
      ...note,
      title: editTitle,
      content: editContent
    }));
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <div className="edit-form">
          <input 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} 
            className="edit-input"
          />
          <textarea 
            value={editContent} 
            onChange={(e) => setEditContent(e.target.value)} 
            className="edit-textarea"
          />
          <div className="edit-actions">
            <button onClick={saveEdit} className="btn-save">Save</button>
            <button onClick={() => setIsEditing(false)} className="btn-cancel-edit">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="note-card-header">
            <h3 className="note-card-title">{note.title}</h3>
            <p className="note-card-content">{note.content}</p>
          </div>
          <div className="note-actions">
            <button className="icon-btn" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </button>
            <button className="icon-btn" onClick={() => dispatch(deleteNote(note.id))}>
              <DeleteIcon />
            </button>
            <button className="icon-btn" onClick={() => dispatch(toggleFavorite(note.id))}>
              <StarIcon isFavorite={note.isFavorite} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}