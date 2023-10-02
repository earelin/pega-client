import {partidoColor} from "./colors";

describe('Colors', () => {
    test.each([
        ['PARTIDO POPULAR', '#17589D'],
        ['PARTIDO SOCIALISTA OBRERO ESPAÑOL', '#F41913'],
    ])('partidoColor(%s) should return %s', (name, color) =>
        expect(partidoColor(name))
            .toBe(color)
    );
});
