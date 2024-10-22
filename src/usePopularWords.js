import { getEntries } from "./EntryRepository";
import _ from 'lodash';


export const usePopularWords = (maxWordCount) => {
    const forbiddenWords = ['vel', 'nec', 'non']

    const entries = getEntries();
    const texts = entries.map(entry => entry.text);
    const singleText = texts.join();
    const lowerCaseSingle = singleText.toLowerCase();
    const separateWords = lowerCaseSingle.split(/[ ,.\n]+/);
    const longWords = separateWords.filter(word => word.length > 2);
    const allowedWords = longWords.filter(word => ! forbiddenWords.includes(word));



    const wordCounts = _.countBy(allowedWords);
    const sortedWords = _.orderBy(
        Object.entries(wordCounts),
        ([, count]) => count,
        ['desc']
    );

    return sortedWords.slice(0, maxWordCount).map(([word, count]) => ({ word, count }));
};
