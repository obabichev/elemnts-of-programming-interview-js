import {NUMBER_SIZE} from './utils';
import {REVERSE_BITS_DICT, REVERSE_BITS_WORD_SIZE} from './5.3.reverse-bits.dict';

export const reverseBits = (number) => {
    let result = 0;
    const mask = Math.pow(2, REVERSE_BITS_WORD_SIZE) - 1;
    for (let i = 0; i < NUMBER_SIZE / REVERSE_BITS_WORD_SIZE; i++) {
        const key = (number >>> (i * REVERSE_BITS_WORD_SIZE)) & mask;
        const part = REVERSE_BITS_DICT[key]
        result = (result << REVERSE_BITS_WORD_SIZE) | part;
    }
    return result;
}
