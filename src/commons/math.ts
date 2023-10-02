import {isNil} from "./variable";

export function sum(...args: (number | undefined | null)[] ) {
    return args.reduce((acc, value) => {
        if (!isNil(value)) {
            return value! + acc!
        }
        return acc
    }, 0)
}
