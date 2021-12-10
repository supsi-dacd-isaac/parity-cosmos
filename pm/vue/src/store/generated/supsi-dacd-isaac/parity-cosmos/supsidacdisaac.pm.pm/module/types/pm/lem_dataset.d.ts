import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface LemDataset {
    index: string;
    player: string;
    timestamp: number;
    pconsMeasure: string;
    pprodMeasure: string;
    pconsForecast: string;
    pprodForecast: string;
    creator: string;
}
export declare const LemDataset: {
    encode(message: LemDataset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LemDataset;
    fromJSON(object: any): LemDataset;
    toJSON(message: LemDataset): unknown;
    fromPartial(object: DeepPartial<LemDataset>): LemDataset;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
