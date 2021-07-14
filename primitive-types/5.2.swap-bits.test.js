import {describe, it} from '@jest/globals';
import {swapBits} from './5.2.swap-bits';

describe('swapBits', () => {
    it('test 1', () => {
        expect(swapBits(0, 1, 2)).toEqual(0);
    })

    it('test 2', () => {
        expect(swapBits(10, 0, 1)).toEqual(9);
    })

    it('test 3', () => {
        expect(swapBits(16, 0, 4)).toEqual(1);
    })

    it('test 4', () => {
        expect(swapBits(7, 0, 1)).toEqual(7);
    })

    it('test 5', () => {
        expect(swapBits(1, 0, 1)).toEqual(2);
    })
})