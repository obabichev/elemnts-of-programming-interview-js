export const add = (a, b) => {
    let nextBit = 0;
    let result = 0;
    let shift = 1;
    while (b !== 0 || a !== 0 || nextBit !== 0) {
        const aa = a & 1;
        const bb = b & 1;
        result = result | ((nextBit ^ aa ^ bb) << shift);
        nextBit = (aa & bb) | (bb & nextBit) | (aa & nextBit);
        a >>>= 1;
        b >>>= 1;
    }
    return result;
}
