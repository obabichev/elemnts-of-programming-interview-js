import {getBit} from './utils';

export const swapBits = (number, i, j) => {
    if (getBit(number, i) === getBit(number, j)) {
        return number;
    }
    return number ^ (1 << i) ^ (1 << j);
}

swapBits(10, 0, 1)