type PlainObject = Record<string, unknown>;

const isPlainObject = (value: unknown): value is PlainObject =>
    typeof value === "object" && value !== null && !Array.isArray(value);

export const themeMerge = <T extends PlainObject>(
    base: T,
    override?: Partial<T>,
): T => {
    if (!override) return base;

    const result: PlainObject = { ...base };

    for (const key of Object.keys(override) as Array<keyof T>) {
        const overrideValue = override[key];
        const baseValue = base[key];

        if (overrideValue === undefined) continue;

        if (isPlainObject(overrideValue) && isPlainObject(baseValue)) {
            result[key as string] = themeMerge(
                baseValue as PlainObject,
                overrideValue as PlainObject,
            );
        } else {
            result[key as string] = overrideValue;
        }
    }

    return result as T;
};
