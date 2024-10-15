import { getEntries } from "./EntryRepository";

export const usePopularWords = () => {
   
    const entries = (getEntries());
    console.log ("entries" , entries)
    const texts = entries.map(entry => entry.text);
    console.log ("teksts", texts)
    const singleText = texts.join();        //Join łączy tablicę w jednego stringa i domyślnie rodziela przecinkiem (można zaminieć "$separator" na coś innego np. spacje)
    console.log ("single Text", singleText)
    const lowerCaseSingle = singleText.toLowerCase();
    const separateWords = lowerCaseSingle.split(/[ ,.\n]+/);  //Ustalamy separator do wyciągnięcia pojedyńczych słów, w tym przypadku podzieli nam tekst po " spacji . , \n(nowa linijka) + na końcu nam mówi, że mogą występować obok siebie jako jeden separator, żeby nam nie zrobił kilku sparatorów czy coś"
    console.log ("separate", separateWords)
    

    

   
   
    return         ["Słówka"]
    
}
