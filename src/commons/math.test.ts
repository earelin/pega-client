import {sum} from "./math";

describe('Math', () => {
    test.each([
        [[], 0],
        [[undefined, undefined], 0],
        [[null, null], 0],
        [[3], 3],
        [[1, 5, 7], 13]
    ])('sum(%s) should return %s', (args: (number | undefined | null)[], result: number) =>
        expect(sum(...args)).toBe(result)
    );
});
