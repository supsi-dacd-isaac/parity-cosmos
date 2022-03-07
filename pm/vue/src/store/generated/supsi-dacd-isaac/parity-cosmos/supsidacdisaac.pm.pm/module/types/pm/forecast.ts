/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface Forecast {
  index: string;
  ts: number;
  values: string[];
  creator: string;
}

const baseForecast: object = { index: "", ts: 0, values: "", creator: "" };

export const Forecast = {
  encode(message: Forecast, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.ts !== 0) {
      writer.uint32(16).int32(message.ts);
    }
    for (const v of message.values) {
      writer.uint32(26).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Forecast {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseForecast } as Forecast;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.ts = reader.int32();
          break;
        case 3:
          message.values.push(reader.string());
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Forecast {
    const message = { ...baseForecast } as Forecast;
    message.values = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.ts !== undefined && object.ts !== null) {
      message.ts = Number(object.ts);
    } else {
      message.ts = 0;
    }
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(String(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Forecast): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.ts !== undefined && (obj.ts = message.ts);
    if (message.values) {
      obj.values = message.values.map((e) => e);
    } else {
      obj.values = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Forecast>): Forecast {
    const message = { ...baseForecast } as Forecast;
    message.values = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.ts !== undefined && object.ts !== null) {
      message.ts = object.ts;
    } else {
      message.ts = 0;
    }
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(e);
      }
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
