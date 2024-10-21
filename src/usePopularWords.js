import { getEntries } from "./EntryRepository";
import _ from 'lodash';

export const usePopularWords = () => {
    const entries = getEntries();
    const texts = entries.map(entry => entry.text);
    const singleText = texts.join();
    const lowerCaseSingle = singleText.toLowerCase();
    const separateWords = lowerCaseSingle.split(/[ ,.\n]+/);

    const wordCounts = _.countBy(separateWords);
    const sortedWords = _.orderBy(
        Object.entries(wordCounts),
        ([, count]) => count,
        ['desc']
    );

    return sortedWords.slice(0, 10).map(([word, count]) => ({ word, count }));
};
