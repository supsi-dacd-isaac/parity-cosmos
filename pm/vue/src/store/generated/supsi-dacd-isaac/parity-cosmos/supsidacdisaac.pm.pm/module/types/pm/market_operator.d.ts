import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface MarketOperator {
    idx: string;
    address: string;
    creator: string;
}
export declare const MarketOperator: {
    encode(message: MarketOperator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MarketOperator;
    fromJSON(object: any): MarketOperator;
    toJSON(message: MarketOperator): unknown;
    fromPartial(object: DeepPartial<MarketOperator>): MarketOperator;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
