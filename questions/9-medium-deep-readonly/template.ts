type DeepReadonly<T> = keyof T extends never
    ? T
    : {
          readonly [P in keyof T]: DeepReadonly<T[P]>;
      };

type X = {
    a: () => 22;
    b: string;
    c: {
        d: boolean;
        e: {
            g: {
                h: {
                    i: true;
                    j: "string";
                };
                k: "hello";
            };
        };
    };
};

type B = DeepReadonly<X>;