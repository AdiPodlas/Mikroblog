import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEntries } from './EntryRepository'; // Zakładamy, że ta funkcja zwraca wszystkie wpisy

const EntryPage = () => {
  const { id } = useParams(); // Pobranie ID z parametrów URL
  const [entry, setEntry] = useState(null); // Stan dla konkretnego wpisu
  const [error, setError] = useState(null); // Stan dla błędów

 /* useEffect(() => {
    const entries = getEntries(); // Pobierz wszystkie wpisy
    const foundEntry = entries.find((entry) => entry.id === parseInt(id, 10)); // Znajdź wpis po ID

    if (foundEntry) {
      setEntry(foundEntry);
    } else {
      setError('Nie ma takiego wpisu.'); // Ustaw komunikat o błędzie
    }
  }, [id]); */

  const  fetchEntry = async() => {
    const response = await fetch("http://localhost:8080/entry/" + id)
    const responseBody = await response.json()
    setEntry (responseBody)
   }
   
   useEffect(() => {
    fetchEntry()
   }, [])

  if (error) {
    return <div>{error}</div>; // Wyświetl komunikat o błędzie
  }

  if (!entry) {
    return <div>Ładowanie...</div>; // Komunikat ładowania
  }

  return (
    <div>
      <h2>{entry.title}</h2>
      <p>{entry.text}</p>
      <p><strong>Autor:</strong> {entry.author}</p>
      <p><strong>Data:</strong> {entry.date}</p>
      <p><strong>Liczba polubień:</strong> {entry.likes}</p>
      <p>{entry.id}</p>
    </div>
  );
};

export default EntryPage;
