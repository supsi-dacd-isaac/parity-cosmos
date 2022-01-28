import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface KpiFeatures {
    index: string;
    sla: string;
    rule: string;
    limit: string;
    mu: string;
    penalty: number;
    players: string[];
    creator: string;
}
export declare const KpiFeatures: {
    encode(message: KpiFeatures, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): KpiFeatures;
    fromJSON(object: any): KpiFeatures;
    toJSON(message: KpiFeatures): unknown;
    fromPartial(object: DeepPartial<KpiFeatures>): KpiFeatures;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
