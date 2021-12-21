import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface DefaultLemPars {
    index: string;
    pbBAU: string;
    psBAU: string;
    pbP2P: string;
    psP2P: string;
    beta: string;
    creator: string;
}
export declare const DefaultLemPars: {
    encode(message: DefaultLemPars, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DefaultLemPars;
    fromJSON(object: any): DefaultLemPars;
    toJSON(message: DefaultLemPars): unknown;
    fromPartial(object: DeepPartial<DefaultLemPars>): DefaultLemPars;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
