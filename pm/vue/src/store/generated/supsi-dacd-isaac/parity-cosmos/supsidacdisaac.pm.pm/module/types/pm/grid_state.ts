/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface GridState {
  index: string;
  grid: string;
  timestamp: number;
  state: string;
  creator: string;
}

const baseGridState: object = {
  index: "",
  grid: "",
  timestamp: 0,
  state: "",
  creator: "",
};

export const GridState = {
  encode(message: GridState, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.grid !== "") {
      writer.uint32(18).string(message.grid);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int32(message.timestamp);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GridState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGridState } as GridState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.grid = reader.string();
          break;
        case 3:
          message.timestamp = reader.int32();
          break;
        case 4:
          message.state = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GridState {
    const message = { ...baseGridState } as GridState;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.grid !== undefined && object.grid !== null) {
      message.grid = String(object.grid);
    } else {
      message.grid = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: GridState): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.grid !== undefined && (obj.grid = message.grid);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.state !== undefined && (obj.state = message.state);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<GridState>): GridState {
    const message = { ...baseGridState } as GridState;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.grid !== undefined && object.grid !== null) {
      message.grid = object.grid;
    } else {
      message.grid = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
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
