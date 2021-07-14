import {describe, it} from '@jest/globals';
import {closesIntSameWeight} from './5.4.closest-int-same-weight';

const bits = number => number.toString(2).split('').filter(x => x === '1').length;

describe('closesIntSameWeight', () => {
    it('test 1', () => {
        const number = 1;
        const closest = closesIntSameWeight(number);
        const diff = Math.abs(number - closest);
        expect(bits(number)).toEqual(bits(closest));
        expect(diff).toEqual(1);
    });

    it('test 2', () => {
        const number = 2;
        const closest = closesIntSameWeight(number);
        const diff = Math.abs(number - closest);
        expect(bits(number)).toEqual(bits(closest));
        expect(diff).toEqual(1);
    });

    it('test 3', () => {
        const number = 64;
        const closest = closesIntSameWeight(number);
        const diff = Math.abs(number - closest);
        expect(bits(number)).toEqual(bits(closest));
        expect(diff).toEqual(32);
    });
});