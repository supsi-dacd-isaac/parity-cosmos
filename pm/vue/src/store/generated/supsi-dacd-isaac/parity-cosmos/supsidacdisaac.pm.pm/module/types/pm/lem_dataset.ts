/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

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

const baseLemDataset: object = {
  index: "",
  player: "",
  timestamp: 0,
  pconsMeasure: "",
  pprodMeasure: "",
  pconsForecast: "",
  pprodForecast: "",
  creator: "",
};

export const LemDataset = {
  encode(message: LemDataset, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.player !== "") {
      writer.uint32(18).string(message.player);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).int32(message.timestamp);
    }
    if (message.pconsMeasure !== "") {
      writer.uint32(34).string(message.pconsMeasure);
    }
    if (message.pprodMeasure !== "") {
      writer.uint32(42).string(message.pprodMeasure);
    }
    if (message.pconsForecast !== "") {
      writer.uint32(50).string(message.pconsForecast);
    }
    if (message.pprodForecast !== "") {
      writer.uint32(58).string(message.pprodForecast);
    }
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LemDataset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLemDataset } as LemDataset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.player = reader.string();
          break;
        case 3:
          message.timestamp = reader.int32();
          break;
        case 4:
          message.pconsMeasure = reader.string();
          break;
        case 5:
          message.pprodMeasure = reader.string();
          break;
        case 6:
          message.pconsForecast = reader.string();
          break;
        case 7:
          message.pprodForecast = reader.string();
          break;
        case 8:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LemDataset {
    const message = { ...baseLemDataset } as LemDataset;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = String(object.player);
    } else {
      message.player = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    } else {
      message.timestamp = 0;
    }
    if (object.pconsMeasure !== undefined && object.pconsMeasure !== null) {
      message.pconsMeasure = String(object.pconsMeasure);
    } else {
      message.pconsMeasure = "";
    }
    if (object.pprodMeasure !== undefined && object.pprodMeasure !== null) {
      message.pprodMeasure = String(object.pprodMeasure);
    } else {
      message.pprodMeasure = "";
    }
    if (object.pconsForecast !== undefined && object.pconsForecast !== null) {
      message.pconsForecast = String(object.pconsForecast);
    } else {
      message.pconsForecast = "";
    }
    if (object.pprodForecast !== undefined && object.pprodForecast !== null) {
      message.pprodForecast = String(object.pprodForecast);
    } else {
      message.pprodForecast = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: LemDataset): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.player !== undefined && (obj.player = message.player);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.pconsMeasure !== undefined &&
      (obj.pconsMeasure = message.pconsMeasure);
    message.pprodMeasure !== undefined &&
      (obj.pprodMeasure = message.pprodMeasure);
    message.pconsForecast !== undefined &&
      (obj.pconsForecast = message.pconsForecast);
    message.pprodForecast !== undefined &&
      (obj.pprodForecast = message.pprodForecast);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<LemDataset>): LemDataset {
    const message = { ...baseLemDataset } as LemDataset;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.player !== undefined && object.player !== null) {
      message.player = object.player;
    } else {
      message.player = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = 0;
    }
    if (object.pconsMeasure !== undefined && object.pconsMeasure !== null) {
      message.pconsMeasure = object.pconsMeasure;
    } else {
      message.pconsMeasure = "";
    }
    if (object.pprodMeasure !== undefined && object.pprodMeasure !== null) {
      message.pprodMeasure = object.pprodMeasure;
    } else {
      message.pprodMeasure = "";
    }
    if (object.pconsForecast !== undefined && object.pconsForecast !== null) {
      message.pconsForecast = object.pconsForecast;
    } else {
      message.pconsForecast = "";
    }
    if (object.pprodForecast !== undefined && object.pprodForecast !== null) {
      message.pprodForecast = object.pprodForecast;
    } else {
      message.pprodForecast = "";
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
