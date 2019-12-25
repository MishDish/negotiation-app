export default {
    methods: {
        isUndefinedOrZero: (input) => {
            return input === undefined || input === null || input === 0
        }
    }
}

export function isUndefinedOrZero(input) {
    return !input
}