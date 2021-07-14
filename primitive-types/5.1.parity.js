export function parity(value) {
    let result = 0;
    while (value !== 0) {
        result++;
        value = value & (value - 1);
    }
    return result;
}
