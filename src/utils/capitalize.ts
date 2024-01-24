export default function capitalize(str: string): string {
    const firstCapitalizedLetter = str[0].toUpperCase();
    const capitalizedStr = firstCapitalizedLetter + str.slice(1);
    return capitalizedStr;
}
