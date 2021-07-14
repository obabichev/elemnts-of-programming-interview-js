import {swapBits} from './5.2.swap-bits';

export const REVERSE_BITS_WORD_SIZE = 8;

const reverseBits = (number) => {
    for (let i = 0; i < REVERSE_BITS_WORD_SIZE / 2; i++) {
        number = swapBits(number, i, REVERSE_BITS_WORD_SIZE - i - 1);
    }
    return number;
}

const getDict = () => {
    const result = {};
    for (let i = 0; i < (1 << REVERSE_BITS_WORD_SIZE); i++) {
        result[i] = reverseBits(i);
    }
    return result;
}

export const REVERSE_BITS_DICT = getDict();