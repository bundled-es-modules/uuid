interface V1Option {
  node?: number[] | undefined,
  clockseq?: number | undefined,
  msecs?: number | undefined,
  nsecs?: number | undefined
}

interface V4Option {
  random?: Uint8Array | number[] | undefined;
  rng?: (() => Uint8Array | number[]) | undefined,
  buf?: number[] | undefined,
  offset?: number | undefined
}

declare function uuidv1(
  options?: V1Option | undefined,
  buf?: number[] | undefined,
  offset?: number | undefined
): number[] | string;

declare function uuidv3(
  value: number[] | string,
  namespace: number[] | string, 
  buf?: number[] | undefined,
  offset?: number | undefined
): number[] | string;

declare function uuidv4(
  options?: V4Option | "binary" | undefined,
  buf?: number[] | undefined,
  offset?: number | undefined
): number[] | string;

declare function uuidv5(
  value: number[] | string,
  namespace: number[] | string, 
  buf?: number[] | undefined,
  offset?: number | undefined
): number[] | string;


export {
  uuidv1, uuidv3, uuidv4, uuidv5
};