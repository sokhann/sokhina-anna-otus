export function onlyUnique<T>(arr: T[]): T[] {
    return arr.filter((value, index, array) => array.indexOf(value) === index);
}
