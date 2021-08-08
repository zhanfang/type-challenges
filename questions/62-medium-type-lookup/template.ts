type LookUp<U extends { type: string }, T extends string> = U extends {type: T}
    ? U
    : never;

interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
}
type D = LookUp<Cat | Dog, "dog">;
