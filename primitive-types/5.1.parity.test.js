import {describe, it} from '@jest/globals';
import {parity} from './5.1.parity';

describe('parity', () => {
    it('test 1', () => {
        expect(parity(0)).toEqual(0);
    })

    it('test 2', () => {
        expect(parity(1)).toEqual(1);
    })

    it('test 3', () => {
        expect(parity(15)).toEqual(4);
    })

    it('test 4', () => {
        expect(parity(17)).toEqual(2);
    })
})