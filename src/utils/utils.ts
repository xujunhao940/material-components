export function getAbbreviation(str: string, maxLetters: number = 2, keepFirstLast: boolean = true) {
    const words = str.trim().split(/\s+/);
    if (keepFirstLast && words.length > 1) {
        const abbreviation: string = (words[0][0] + words[words.length - 1][0]).toUpperCase();
        return abbreviation;
    }
    const abbreviation: string = words.map(word => word[0].toUpperCase())
        .slice(0, maxLetters)
        .join('');
    return abbreviation;
}