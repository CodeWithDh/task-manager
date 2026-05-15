import { useSelector } from "react-redux";
import { NoteCard } from "./NoteCard";

export function NotesList({ search, favOnly }) {
    const notes = useSelector((state) => state.notes.notes);

    let filterNotes = notes;

    if (favOnly) {
        filterNotes = filterNotes.filter(n => n.isFavorite === true);
    }

    if (search) {
        filterNotes = filterNotes.filter(n => 
            n.title.toLowerCase().includes(search.toLowerCase()) || 
            n.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    return (
        <div className="notes-list">
            {filterNotes.length === 0 ? <p>no notes</p> : null}
            {filterNotes.map((n) => (
                <NoteCard key={n.id} note={n} />
            ))}
        </div>
    );
}
