import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface GridState {
    index: string;
    grid: string;
    timestamp: number;
    state: string;
    creator: string;
}
export declare const GridState: {
    encode(message: GridState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GridState;
    fromJSON(object: any): GridState;
    toJSON(message: GridState): unknown;
    fromPartial(object: DeepPartial<GridState>): GridState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
