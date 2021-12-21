/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface DefaultLemPars {
  index: string;
  pbBAU: string;
  psBAU: string;
  pbP2P: string;
  psP2P: string;
  beta: string;
  creator: string;
}

const baseDefaultLemPars: object = {
  index: "",
  pbBAU: "",
  psBAU: "",
  pbP2P: "",
  psP2P: "",
  beta: "",
  creator: "",
};

export const DefaultLemPars = {
  encode(message: DefaultLemPars, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.pbBAU !== "") {
      writer.uint32(18).string(message.pbBAU);
    }
    if (message.psBAU !== "") {
      writer.uint32(26).string(message.psBAU);
    }
    if (message.pbP2P !== "") {
      writer.uint32(34).string(message.pbP2P);
    }
    if (message.psP2P !== "") {
      writer.uint32(42).string(message.psP2P);
    }
    if (message.beta !== "") {
      writer.uint32(50).string(message.beta);
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DefaultLemPars {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDefaultLemPars } as DefaultLemPars;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.pbBAU = reader.string();
          break;
        case 3:
          message.psBAU = reader.string();
          break;
        case 4:
          message.pbP2P = reader.string();
          break;
        case 5:
          message.psP2P = reader.string();
          break;
        case 6:
          message.beta = reader.string();
          break;
        case 7:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DefaultLemPars {
    const message = { ...baseDefaultLemPars } as DefaultLemPars;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.pbBAU !== undefined && object.pbBAU !== null) {
      message.pbBAU = String(object.pbBAU);
    } else {
      message.pbBAU = "";
    }
    if (object.psBAU !== undefined && object.psBAU !== null) {
      message.psBAU = String(object.psBAU);
    } else {
      message.psBAU = "";
    }
    if (object.pbP2P !== undefined && object.pbP2P !== null) {
      message.pbP2P = String(object.pbP2P);
    } else {
      message.pbP2P = "";
    }
    if (object.psP2P !== undefined && object.psP2P !== null) {
      message.psP2P = String(object.psP2P);
    } else {
      message.psP2P = "";
    }
    if (object.beta !== undefined && object.beta !== null) {
      message.beta = String(object.beta);
    } else {
      message.beta = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: DefaultLemPars): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.pbBAU !== undefined && (obj.pbBAU = message.pbBAU);
    message.psBAU !== undefined && (obj.psBAU = message.psBAU);
    message.pbP2P !== undefined && (obj.pbP2P = message.pbP2P);
    message.psP2P !== undefined && (obj.psP2P = message.psP2P);
    message.beta !== undefined && (obj.beta = message.beta);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<DefaultLemPars>): DefaultLemPars {
    const message = { ...baseDefaultLemPars } as DefaultLemPars;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.pbBAU !== undefined && object.pbBAU !== null) {
      message.pbBAU = object.pbBAU;
    } else {
      message.pbBAU = "";
    }
    if (object.psBAU !== undefined && object.psBAU !== null) {
      message.psBAU = object.psBAU;
    } else {
      message.psBAU = "";
    }
    if (object.pbP2P !== undefined && object.pbP2P !== null) {
      message.pbP2P = object.pbP2P;
    } else {
      message.pbP2P = "";
    }
    if (object.psP2P !== undefined && object.psP2P !== null) {
      message.psP2P = object.psP2P;
    } else {
      message.psP2P = "";
    }
    if (object.beta !== undefined && object.beta !== null) {
      message.beta = object.beta;
    } else {
      message.beta = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
