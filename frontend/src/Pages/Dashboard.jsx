import { useState } from 'react';
import { useAuth } from '../context/Authcontext';
import { auth } from '../services/firbase';
import { signOut } from 'firebase/auth';
import { NoteForm } from '../Components/NoteForm';
import { NotesList } from '../Components/NotesList';
import { SearchBar } from '../Components/SearchBar';
import '../App.css';

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [search, setSearch] = useState("");
  const [favOnly, setFavOnly] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("error logout", error);
    }
  };

  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <button className="add-btn" onClick={() => setIsFormOpen(true)}>+</button>
        
        <div className="user-section">
            <span>{currentUser?.email?.split('@')[0]}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>

      <div className="main-content">
        <SearchBar 
          search={search} 
          setSearch={setSearch} 
          favOnly={favOnly} 
          setFavOnly={setFavOnly} 
        />
        <NotesList search={search} favOnly={favOnly} />

        {isFormOpen && (
          <>
            <div className="modal-overlay" onClick={() => setIsFormOpen(false)} />
            <div className="modal-content">
              <NoteForm onClose={() => setIsFormOpen(false)} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}