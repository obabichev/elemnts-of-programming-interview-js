import {describe, it} from '@jest/globals';
import {reverseBits} from './5.3.reverse-bits';
import {numToBinStr} from './utils';

describe('reverseBits', () => {
    it('test 1', () => {
        expect(numToBinStr(1)).toEqual('1');
        expect(numToBinStr(reverseBits(1)))
            .toEqual('10000000000000000000000000000000')
    });

    it('test 2', () => {
        expect(numToBinStr(123)).toEqual('1111011');
        expect(numToBinStr(reverseBits(123)))
            .toEqual('11011110000000000000000000000000')
    });

    it('test 3', () => {
        expect(numToBinStr(12345678)).toEqual('101111000110000101001110');
        expect(numToBinStr(reverseBits(12345678)))
            .toEqual('1110010100001100011110100000000')
    });

    it('test 4', () => {
        expect(numToBinStr(-100)).toEqual('11111111111111111111111110011100');
        expect(numToBinStr(reverseBits(-100)))
            .toEqual('111001111111111111111111111111')
    });
});
