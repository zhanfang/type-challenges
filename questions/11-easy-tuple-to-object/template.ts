type TupleToObject<T extends readonly (number | string | symbol)[]> = {
    [P in T[number]]: P
};
