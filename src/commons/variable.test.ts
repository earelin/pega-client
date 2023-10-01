import {isNil} from "./variable";

describe('Variable', () => {
    test.each([
        [null, true],
        [undefined, true],
        [0, false]]
    )(`isNil(%s) should return %s`, (value, expected) =>
        expect(isNil(value)).toBe(expected)
    );
});
