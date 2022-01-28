/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "supsidacdisaac.pm.pm";

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

const baseKpiFeatures: object = {
  index: "",
  sla: "",
  rule: "",
  limit: "",
  mu: "",
  penalty: 0,
  players: "",
  creator: "",
};

export const KpiFeatures = {
  encode(message: KpiFeatures, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.sla !== "") {
      writer.uint32(18).string(message.sla);
    }
    if (message.rule !== "") {
      writer.uint32(26).string(message.rule);
    }
    if (message.limit !== "") {
      writer.uint32(34).string(message.limit);
    }
    if (message.mu !== "") {
      writer.uint32(42).string(message.mu);
    }
    if (message.penalty !== 0) {
      writer.uint32(48).int32(message.penalty);
    }
    for (const v of message.players) {
      writer.uint32(58).string(v!);
    }
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): KpiFeatures {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKpiFeatures } as KpiFeatures;
    message.players = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.sla = reader.string();
          break;
        case 3:
          message.rule = reader.string();
          break;
        case 4:
          message.limit = reader.string();
          break;
        case 5:
          message.mu = reader.string();
          break;
        case 6:
          message.penalty = reader.int32();
          break;
        case 7:
          message.players.push(reader.string());
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

  fromJSON(object: any): KpiFeatures {
    const message = { ...baseKpiFeatures } as KpiFeatures;
    message.players = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = String(object.sla);
    } else {
      message.sla = "";
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = String(object.rule);
    } else {
      message.rule = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = String(object.limit);
    } else {
      message.limit = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = String(object.mu);
    } else {
      message.mu = "";
    }
    if (object.penalty !== undefined && object.penalty !== null) {
      message.penalty = Number(object.penalty);
    } else {
      message.penalty = 0;
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(String(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: KpiFeatures): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.sla !== undefined && (obj.sla = message.sla);
    message.rule !== undefined && (obj.rule = message.rule);
    message.limit !== undefined && (obj.limit = message.limit);
    message.mu !== undefined && (obj.mu = message.mu);
    message.penalty !== undefined && (obj.penalty = message.penalty);
    if (message.players) {
      obj.players = message.players.map((e) => e);
    } else {
      obj.players = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<KpiFeatures>): KpiFeatures {
    const message = { ...baseKpiFeatures } as KpiFeatures;
    message.players = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = object.sla;
    } else {
      message.sla = "";
    }
    if (object.rule !== undefined && object.rule !== null) {
      message.rule = object.rule;
    } else {
      message.rule = "";
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = "";
    }
    if (object.mu !== undefined && object.mu !== null) {
      message.mu = object.mu;
    } else {
      message.mu = "";
    }
    if (object.penalty !== undefined && object.penalty !== null) {
      message.penalty = object.penalty;
    } else {
      message.penalty = 0;
    }
    if (object.players !== undefined && object.players !== null) {
      for (const e of object.players) {
        message.players.push(e);
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
