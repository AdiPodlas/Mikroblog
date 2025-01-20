import { useEffect, useState } from "react";

export const usePopularWords = (count) => {
  const [popularWords, setPopularWords] = useState([]); // Stan na popularne słowa
  const [isLoading, setIsLoading] = useState(true); // Stan ładowania
  const [error, setError] = useState(null); // Stan błędów

  const fetchPopularWords = async () => {
    setIsLoading(true);
    setError(null); // Resetujemy błąd przed próbą pobrania
    try {
      const response = await fetch(`http://localhost:8080/popular-words?count=${count}`);
      if (!response.ok) {
        throw new Error(`Błąd podczas pobierania danych: ${response.statusText}`);
      }
      const responseBody = await response.json();
      setPopularWords(responseBody);
    } catch (error) {
      console.error("Error fetching popular words:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularWords();
  }, [count]); // Wysłanie zapytania, jeśli zmienia się liczba słów

  return {
    popularWords,
    isLoading,
    error,
  };
};

