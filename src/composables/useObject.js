export function useObject() {
    const cloneObject = function (source, target) {
        Object.keys((source)).forEach((key) => target[key] = source[key])
        return target
    }

    return { cloneObject }
}