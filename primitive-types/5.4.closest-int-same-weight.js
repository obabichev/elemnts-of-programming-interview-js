import {numToBinStr} from './utils';

export const closesIntSameWeight = (number) => {
    const lowestOne = number & ~(number - 1)
    const lowestZero = ~number & (number + 1);
    if (lowestOne > lowestZero) {
        return number ^ lowestOne ^ (lowestOne >> 1);
    } else {
        return number ^ lowestZero ^ (lowestZero >> 1);
    }
}
