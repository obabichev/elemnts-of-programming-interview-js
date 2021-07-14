export const NUMBER_SIZE = 32;

export const numToBinStr = num => (num >>> 0).toString(2);

export const getBit = (number, i) => {
    return (number >> i) & 1;
}

export const inverseBit = (number, i) => {
    return number ^ (1 << i);
}