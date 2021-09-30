function replaceItemInArray<T>(prevArray: Array<T>, index: number, value: T): Array<T> {
    const array = prevArray;

    if (index < prevArray.length && index >= 0) {
        array[index] = value;
    }

    return array;
}

export default replaceItemInArray;
