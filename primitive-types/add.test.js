import {describe, it} from '@jest/globals';
import {add} from './add';

describe('add', () => {
    it('1', () => {
        expect(add(1, 2)).toEqual(3);
    })

    it('2', () => {
        expect(add(123, 456)).toEqual(579);
    })
});