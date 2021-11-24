import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface Aggregator {
    idx: string;
    address: string;
    creator: string;
}
export declare const Aggregator: {
    encode(message: Aggregator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Aggregator;
    fromJSON(object: any): Aggregator;
    toJSON(message: Aggregator): unknown;
    fromPartial(object: DeepPartial<Aggregator>): Aggregator;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
