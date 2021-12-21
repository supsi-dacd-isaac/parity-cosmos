/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Dso } from "../pm/dso";
import { Aggregator } from "../pm/aggregator";
import { Player } from "../pm/player";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Lem } from "../pm/lem";
import { LemMeasure } from "../pm/lem_measure";
import { Sla } from "../pm/sla";
import { Kpi } from "../pm/kpi";
import { KpiMeasure } from "../pm/kpi_measure";
import { LemDataset } from "../pm/lem_dataset";
import { DefaultLemPars } from "../pm/default_lem_pars";

export const protobufPackage = "supsidacdisaac.pm.pm";

export interface QueryGetDsoRequest {}

export interface QueryGetDsoResponse {
  Dso: Dso | undefined;
}

export interface QueryGetAggregatorRequest {}

export interface QueryGetAggregatorResponse {
  Aggregator: Aggregator | undefined;
}

export interface QueryGetPlayerRequest {
  index: string;
}

export interface QueryGetPlayerResponse {
  player: Player | undefined;
}

export interface QueryAllPlayerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPlayerResponse {
  player: Player[];
  pagination: PageResponse | undefined;
}

export interface QueryGetLemRequest {
  index: string;
}

export interface QueryGetLemResponse {
  lem: Lem | undefined;
}

export interface QueryAllLemRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLemResponse {
  lem: Lem[];
  pagination: PageResponse | undefined;
}

export interface QueryGetLemMeasureRequest {
  index: string;
}

export interface QueryGetLemMeasureResponse {
  lemMeasure: LemMeasure | undefined;
}

export interface QueryAllLemMeasureRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLemMeasureResponse {
  lemMeasure: LemMeasure[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSlaRequest {
  index: string;
}

export interface QueryGetSlaResponse {
  sla: Sla | undefined;
}

export interface QueryAllSlaRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSlaResponse {
  sla: Sla[];
  pagination: PageResponse | undefined;
}

export interface QueryGetKpiRequest {
  index: string;
}

export interface QueryGetKpiResponse {
  kpi: Kpi | undefined;
}

export interface QueryAllKpiRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllKpiResponse {
  kpi: Kpi[];
  pagination: PageResponse | undefined;
}

export interface QueryGetKpiMeasureRequest {
  index: string;
}

export interface QueryGetKpiMeasureResponse {
  kpiMeasure: KpiMeasure | undefined;
}

export interface QueryAllKpiMeasureRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllKpiMeasureResponse {
  kpiMeasure: KpiMeasure[];
  pagination: PageResponse | undefined;
}

export interface QueryGetLemDatasetRequest {
  index: string;
}

export interface QueryGetLemDatasetResponse {
  lemDataset: LemDataset | undefined;
}

export interface QueryAllLemDatasetRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllLemDatasetResponse {
  lemDataset: LemDataset[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDefaultLemParsRequest {
  index: string;
}

export interface QueryGetDefaultLemParsResponse {
  defaultLemPars: DefaultLemPars | undefined;
}

export interface QueryAllDefaultLemParsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDefaultLemParsResponse {
  defaultLemPars: DefaultLemPars[];
  pagination: PageResponse | undefined;
}

const baseQueryGetDsoRequest: object = {};

export const QueryGetDsoRequest = {
  encode(_: QueryGetDsoRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDsoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDsoRequest } as QueryGetDsoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetDsoRequest {
    const message = { ...baseQueryGetDsoRequest } as QueryGetDsoRequest;
    return message;
  },

  toJSON(_: QueryGetDsoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetDsoRequest>): QueryGetDsoRequest {
    const message = { ...baseQueryGetDsoRequest } as QueryGetDsoRequest;
    return message;
  },
};

const baseQueryGetDsoResponse: object = {};

export const QueryGetDsoResponse = {
  encode(
    message: QueryGetDsoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Dso !== undefined) {
      Dso.encode(message.Dso, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDsoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDsoResponse } as QueryGetDsoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Dso = Dso.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDsoResponse {
    const message = { ...baseQueryGetDsoResponse } as QueryGetDsoResponse;
    if (object.Dso !== undefined && object.Dso !== null) {
      message.Dso = Dso.fromJSON(object.Dso);
    } else {
      message.Dso = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDsoResponse): unknown {
    const obj: any = {};
    message.Dso !== undefined &&
      (obj.Dso = message.Dso ? Dso.toJSON(message.Dso) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetDsoResponse>): QueryGetDsoResponse {
    const message = { ...baseQueryGetDsoResponse } as QueryGetDsoResponse;
    if (object.Dso !== undefined && object.Dso !== null) {
      message.Dso = Dso.fromPartial(object.Dso);
    } else {
      message.Dso = undefined;
    }
    return message;
  },
};

const baseQueryGetAggregatorRequest: object = {};

export const QueryGetAggregatorRequest = {
  encode(
    _: QueryGetAggregatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAggregatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAggregatorRequest,
    } as QueryGetAggregatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetAggregatorRequest {
    const message = {
      ...baseQueryGetAggregatorRequest,
    } as QueryGetAggregatorRequest;
    return message;
  },

  toJSON(_: QueryGetAggregatorRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetAggregatorRequest>
  ): QueryGetAggregatorRequest {
    const message = {
      ...baseQueryGetAggregatorRequest,
    } as QueryGetAggregatorRequest;
    return message;
  },
};

const baseQueryGetAggregatorResponse: object = {};

export const QueryGetAggregatorResponse = {
  encode(
    message: QueryGetAggregatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Aggregator !== undefined) {
      Aggregator.encode(message.Aggregator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAggregatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAggregatorResponse,
    } as QueryGetAggregatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Aggregator = Aggregator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAggregatorResponse {
    const message = {
      ...baseQueryGetAggregatorResponse,
    } as QueryGetAggregatorResponse;
    if (object.Aggregator !== undefined && object.Aggregator !== null) {
      message.Aggregator = Aggregator.fromJSON(object.Aggregator);
    } else {
      message.Aggregator = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAggregatorResponse): unknown {
    const obj: any = {};
    message.Aggregator !== undefined &&
      (obj.Aggregator = message.Aggregator
        ? Aggregator.toJSON(message.Aggregator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAggregatorResponse>
  ): QueryGetAggregatorResponse {
    const message = {
      ...baseQueryGetAggregatorResponse,
    } as QueryGetAggregatorResponse;
    if (object.Aggregator !== undefined && object.Aggregator !== null) {
      message.Aggregator = Aggregator.fromPartial(object.Aggregator);
    } else {
      message.Aggregator = undefined;
    }
    return message;
  },
};

const baseQueryGetPlayerRequest: object = { index: "" };

export const QueryGetPlayerRequest = {
  encode(
    message: QueryGetPlayerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPlayerRequest } as QueryGetPlayerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlayerRequest {
    const message = { ...baseQueryGetPlayerRequest } as QueryGetPlayerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetPlayerRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlayerRequest>
  ): QueryGetPlayerRequest {
    const message = { ...baseQueryGetPlayerRequest } as QueryGetPlayerRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetPlayerResponse: object = {};

export const QueryGetPlayerResponse = {
  encode(
    message: QueryGetPlayerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.player !== undefined) {
      Player.encode(message.player, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPlayerResponse } as QueryGetPlayerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.player = Player.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPlayerResponse {
    const message = { ...baseQueryGetPlayerResponse } as QueryGetPlayerResponse;
    if (object.player !== undefined && object.player !== null) {
      message.player = Player.fromJSON(object.player);
    } else {
      message.player = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPlayerResponse): unknown {
    const obj: any = {};
    message.player !== undefined &&
      (obj.player = message.player ? Player.toJSON(message.player) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPlayerResponse>
  ): QueryGetPlayerResponse {
    const message = { ...baseQueryGetPlayerResponse } as QueryGetPlayerResponse;
    if (object.player !== undefined && object.player !== null) {
      message.player = Player.fromPartial(object.player);
    } else {
      message.player = undefined;
    }
    return message;
  },
};

const baseQueryAllPlayerRequest: object = {};

export const QueryAllPlayerRequest = {
  encode(
    message: QueryAllPlayerRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPlayerRequest } as QueryAllPlayerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlayerRequest {
    const message = { ...baseQueryAllPlayerRequest } as QueryAllPlayerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPlayerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlayerRequest>
  ): QueryAllPlayerRequest {
    const message = { ...baseQueryAllPlayerRequest } as QueryAllPlayerRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPlayerResponse: object = {};

export const QueryAllPlayerResponse = {
  encode(
    message: QueryAllPlayerResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.player) {
      Player.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPlayerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPlayerResponse } as QueryAllPlayerResponse;
    message.player = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.player.push(Player.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPlayerResponse {
    const message = { ...baseQueryAllPlayerResponse } as QueryAllPlayerResponse;
    message.player = [];
    if (object.player !== undefined && object.player !== null) {
      for (const e of object.player) {
        message.player.push(Player.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPlayerResponse): unknown {
    const obj: any = {};
    if (message.player) {
      obj.player = message.player.map((e) =>
        e ? Player.toJSON(e) : undefined
      );
    } else {
      obj.player = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPlayerResponse>
  ): QueryAllPlayerResponse {
    const message = { ...baseQueryAllPlayerResponse } as QueryAllPlayerResponse;
    message.player = [];
    if (object.player !== undefined && object.player !== null) {
      for (const e of object.player) {
        message.player.push(Player.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetLemRequest: object = { index: "" };

export const QueryGetLemRequest = {
  encode(
    message: QueryGetLemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLemRequest } as QueryGetLemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLemRequest {
    const message = { ...baseQueryGetLemRequest } as QueryGetLemRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetLemRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetLemRequest>): QueryGetLemRequest {
    const message = { ...baseQueryGetLemRequest } as QueryGetLemRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetLemResponse: object = {};

export const QueryGetLemResponse = {
  encode(
    message: QueryGetLemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lem !== undefined) {
      Lem.encode(message.lem, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetLemResponse } as QueryGetLemResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lem = Lem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLemResponse {
    const message = { ...baseQueryGetLemResponse } as QueryGetLemResponse;
    if (object.lem !== undefined && object.lem !== null) {
      message.lem = Lem.fromJSON(object.lem);
    } else {
      message.lem = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLemResponse): unknown {
    const obj: any = {};
    message.lem !== undefined &&
      (obj.lem = message.lem ? Lem.toJSON(message.lem) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetLemResponse>): QueryGetLemResponse {
    const message = { ...baseQueryGetLemResponse } as QueryGetLemResponse;
    if (object.lem !== undefined && object.lem !== null) {
      message.lem = Lem.fromPartial(object.lem);
    } else {
      message.lem = undefined;
    }
    return message;
  },
};

const baseQueryAllLemRequest: object = {};

export const QueryAllLemRequest = {
  encode(
    message: QueryAllLemRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLemRequest } as QueryAllLemRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLemRequest {
    const message = { ...baseQueryAllLemRequest } as QueryAllLemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLemRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllLemRequest>): QueryAllLemRequest {
    const message = { ...baseQueryAllLemRequest } as QueryAllLemRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLemResponse: object = {};

export const QueryAllLemResponse = {
  encode(
    message: QueryAllLemResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.lem) {
      Lem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllLemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllLemResponse } as QueryAllLemResponse;
    message.lem = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lem.push(Lem.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLemResponse {
    const message = { ...baseQueryAllLemResponse } as QueryAllLemResponse;
    message.lem = [];
    if (object.lem !== undefined && object.lem !== null) {
      for (const e of object.lem) {
        message.lem.push(Lem.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLemResponse): unknown {
    const obj: any = {};
    if (message.lem) {
      obj.lem = message.lem.map((e) => (e ? Lem.toJSON(e) : undefined));
    } else {
      obj.lem = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllLemResponse>): QueryAllLemResponse {
    const message = { ...baseQueryAllLemResponse } as QueryAllLemResponse;
    message.lem = [];
    if (object.lem !== undefined && object.lem !== null) {
      for (const e of object.lem) {
        message.lem.push(Lem.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetLemMeasureRequest: object = { index: "" };

export const QueryGetLemMeasureRequest = {
  encode(
    message: QueryGetLemMeasureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLemMeasureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLemMeasureRequest,
    } as QueryGetLemMeasureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLemMeasureRequest {
    const message = {
      ...baseQueryGetLemMeasureRequest,
    } as QueryGetLemMeasureRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetLemMeasureRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLemMeasureRequest>
  ): QueryGetLemMeasureRequest {
    const message = {
      ...baseQueryGetLemMeasureRequest,
    } as QueryGetLemMeasureRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetLemMeasureResponse: object = {};

export const QueryGetLemMeasureResponse = {
  encode(
    message: QueryGetLemMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lemMeasure !== undefined) {
      LemMeasure.encode(message.lemMeasure, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLemMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLemMeasureResponse,
    } as QueryGetLemMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lemMeasure = LemMeasure.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLemMeasureResponse {
    const message = {
      ...baseQueryGetLemMeasureResponse,
    } as QueryGetLemMeasureResponse;
    if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
      message.lemMeasure = LemMeasure.fromJSON(object.lemMeasure);
    } else {
      message.lemMeasure = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLemMeasureResponse): unknown {
    const obj: any = {};
    message.lemMeasure !== undefined &&
      (obj.lemMeasure = message.lemMeasure
        ? LemMeasure.toJSON(message.lemMeasure)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLemMeasureResponse>
  ): QueryGetLemMeasureResponse {
    const message = {
      ...baseQueryGetLemMeasureResponse,
    } as QueryGetLemMeasureResponse;
    if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
      message.lemMeasure = LemMeasure.fromPartial(object.lemMeasure);
    } else {
      message.lemMeasure = undefined;
    }
    return message;
  },
};

const baseQueryAllLemMeasureRequest: object = {};

export const QueryAllLemMeasureRequest = {
  encode(
    message: QueryAllLemMeasureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLemMeasureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLemMeasureRequest,
    } as QueryAllLemMeasureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLemMeasureRequest {
    const message = {
      ...baseQueryAllLemMeasureRequest,
    } as QueryAllLemMeasureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLemMeasureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLemMeasureRequest>
  ): QueryAllLemMeasureRequest {
    const message = {
      ...baseQueryAllLemMeasureRequest,
    } as QueryAllLemMeasureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLemMeasureResponse: object = {};

export const QueryAllLemMeasureResponse = {
  encode(
    message: QueryAllLemMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.lemMeasure) {
      LemMeasure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLemMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLemMeasureResponse,
    } as QueryAllLemMeasureResponse;
    message.lemMeasure = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lemMeasure.push(LemMeasure.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLemMeasureResponse {
    const message = {
      ...baseQueryAllLemMeasureResponse,
    } as QueryAllLemMeasureResponse;
    message.lemMeasure = [];
    if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
      for (const e of object.lemMeasure) {
        message.lemMeasure.push(LemMeasure.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLemMeasureResponse): unknown {
    const obj: any = {};
    if (message.lemMeasure) {
      obj.lemMeasure = message.lemMeasure.map((e) =>
        e ? LemMeasure.toJSON(e) : undefined
      );
    } else {
      obj.lemMeasure = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLemMeasureResponse>
  ): QueryAllLemMeasureResponse {
    const message = {
      ...baseQueryAllLemMeasureResponse,
    } as QueryAllLemMeasureResponse;
    message.lemMeasure = [];
    if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
      for (const e of object.lemMeasure) {
        message.lemMeasure.push(LemMeasure.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSlaRequest: object = { index: "" };

export const QueryGetSlaRequest = {
  encode(
    message: QueryGetSlaRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSlaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSlaRequest } as QueryGetSlaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSlaRequest {
    const message = { ...baseQueryGetSlaRequest } as QueryGetSlaRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetSlaRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetSlaRequest>): QueryGetSlaRequest {
    const message = { ...baseQueryGetSlaRequest } as QueryGetSlaRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetSlaResponse: object = {};

export const QueryGetSlaResponse = {
  encode(
    message: QueryGetSlaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sla !== undefined) {
      Sla.encode(message.sla, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSlaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetSlaResponse } as QueryGetSlaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sla = Sla.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSlaResponse {
    const message = { ...baseQueryGetSlaResponse } as QueryGetSlaResponse;
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = Sla.fromJSON(object.sla);
    } else {
      message.sla = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSlaResponse): unknown {
    const obj: any = {};
    message.sla !== undefined &&
      (obj.sla = message.sla ? Sla.toJSON(message.sla) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetSlaResponse>): QueryGetSlaResponse {
    const message = { ...baseQueryGetSlaResponse } as QueryGetSlaResponse;
    if (object.sla !== undefined && object.sla !== null) {
      message.sla = Sla.fromPartial(object.sla);
    } else {
      message.sla = undefined;
    }
    return message;
  },
};

const baseQueryAllSlaRequest: object = {};

export const QueryAllSlaRequest = {
  encode(
    message: QueryAllSlaRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSlaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSlaRequest } as QueryAllSlaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSlaRequest {
    const message = { ...baseQueryAllSlaRequest } as QueryAllSlaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSlaRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllSlaRequest>): QueryAllSlaRequest {
    const message = { ...baseQueryAllSlaRequest } as QueryAllSlaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSlaResponse: object = {};

export const QueryAllSlaResponse = {
  encode(
    message: QueryAllSlaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.sla) {
      Sla.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSlaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllSlaResponse } as QueryAllSlaResponse;
    message.sla = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sla.push(Sla.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSlaResponse {
    const message = { ...baseQueryAllSlaResponse } as QueryAllSlaResponse;
    message.sla = [];
    if (object.sla !== undefined && object.sla !== null) {
      for (const e of object.sla) {
        message.sla.push(Sla.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSlaResponse): unknown {
    const obj: any = {};
    if (message.sla) {
      obj.sla = message.sla.map((e) => (e ? Sla.toJSON(e) : undefined));
    } else {
      obj.sla = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllSlaResponse>): QueryAllSlaResponse {
    const message = { ...baseQueryAllSlaResponse } as QueryAllSlaResponse;
    message.sla = [];
    if (object.sla !== undefined && object.sla !== null) {
      for (const e of object.sla) {
        message.sla.push(Sla.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetKpiRequest: object = { index: "" };

export const QueryGetKpiRequest = {
  encode(
    message: QueryGetKpiRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetKpiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetKpiRequest } as QueryGetKpiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKpiRequest {
    const message = { ...baseQueryGetKpiRequest } as QueryGetKpiRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetKpiRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetKpiRequest>): QueryGetKpiRequest {
    const message = { ...baseQueryGetKpiRequest } as QueryGetKpiRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetKpiResponse: object = {};

export const QueryGetKpiResponse = {
  encode(
    message: QueryGetKpiResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.kpi !== undefined) {
      Kpi.encode(message.kpi, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetKpiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetKpiResponse } as QueryGetKpiResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kpi = Kpi.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKpiResponse {
    const message = { ...baseQueryGetKpiResponse } as QueryGetKpiResponse;
    if (object.kpi !== undefined && object.kpi !== null) {
      message.kpi = Kpi.fromJSON(object.kpi);
    } else {
      message.kpi = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetKpiResponse): unknown {
    const obj: any = {};
    message.kpi !== undefined &&
      (obj.kpi = message.kpi ? Kpi.toJSON(message.kpi) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetKpiResponse>): QueryGetKpiResponse {
    const message = { ...baseQueryGetKpiResponse } as QueryGetKpiResponse;
    if (object.kpi !== undefined && object.kpi !== null) {
      message.kpi = Kpi.fromPartial(object.kpi);
    } else {
      message.kpi = undefined;
    }
    return message;
  },
};

const baseQueryAllKpiRequest: object = {};

export const QueryAllKpiRequest = {
  encode(
    message: QueryAllKpiRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllKpiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllKpiRequest } as QueryAllKpiRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKpiRequest {
    const message = { ...baseQueryAllKpiRequest } as QueryAllKpiRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKpiRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllKpiRequest>): QueryAllKpiRequest {
    const message = { ...baseQueryAllKpiRequest } as QueryAllKpiRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllKpiResponse: object = {};

export const QueryAllKpiResponse = {
  encode(
    message: QueryAllKpiResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.kpi) {
      Kpi.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllKpiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllKpiResponse } as QueryAllKpiResponse;
    message.kpi = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kpi.push(Kpi.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKpiResponse {
    const message = { ...baseQueryAllKpiResponse } as QueryAllKpiResponse;
    message.kpi = [];
    if (object.kpi !== undefined && object.kpi !== null) {
      for (const e of object.kpi) {
        message.kpi.push(Kpi.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKpiResponse): unknown {
    const obj: any = {};
    if (message.kpi) {
      obj.kpi = message.kpi.map((e) => (e ? Kpi.toJSON(e) : undefined));
    } else {
      obj.kpi = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllKpiResponse>): QueryAllKpiResponse {
    const message = { ...baseQueryAllKpiResponse } as QueryAllKpiResponse;
    message.kpi = [];
    if (object.kpi !== undefined && object.kpi !== null) {
      for (const e of object.kpi) {
        message.kpi.push(Kpi.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetKpiMeasureRequest: object = { index: "" };

export const QueryGetKpiMeasureRequest = {
  encode(
    message: QueryGetKpiMeasureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetKpiMeasureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetKpiMeasureRequest,
    } as QueryGetKpiMeasureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKpiMeasureRequest {
    const message = {
      ...baseQueryGetKpiMeasureRequest,
    } as QueryGetKpiMeasureRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetKpiMeasureRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetKpiMeasureRequest>
  ): QueryGetKpiMeasureRequest {
    const message = {
      ...baseQueryGetKpiMeasureRequest,
    } as QueryGetKpiMeasureRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetKpiMeasureResponse: object = {};

export const QueryGetKpiMeasureResponse = {
  encode(
    message: QueryGetKpiMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.kpiMeasure !== undefined) {
      KpiMeasure.encode(message.kpiMeasure, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetKpiMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetKpiMeasureResponse,
    } as QueryGetKpiMeasureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kpiMeasure = KpiMeasure.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetKpiMeasureResponse {
    const message = {
      ...baseQueryGetKpiMeasureResponse,
    } as QueryGetKpiMeasureResponse;
    if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
      message.kpiMeasure = KpiMeasure.fromJSON(object.kpiMeasure);
    } else {
      message.kpiMeasure = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetKpiMeasureResponse): unknown {
    const obj: any = {};
    message.kpiMeasure !== undefined &&
      (obj.kpiMeasure = message.kpiMeasure
        ? KpiMeasure.toJSON(message.kpiMeasure)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetKpiMeasureResponse>
  ): QueryGetKpiMeasureResponse {
    const message = {
      ...baseQueryGetKpiMeasureResponse,
    } as QueryGetKpiMeasureResponse;
    if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
      message.kpiMeasure = KpiMeasure.fromPartial(object.kpiMeasure);
    } else {
      message.kpiMeasure = undefined;
    }
    return message;
  },
};

const baseQueryAllKpiMeasureRequest: object = {};

export const QueryAllKpiMeasureRequest = {
  encode(
    message: QueryAllKpiMeasureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllKpiMeasureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllKpiMeasureRequest,
    } as QueryAllKpiMeasureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKpiMeasureRequest {
    const message = {
      ...baseQueryAllKpiMeasureRequest,
    } as QueryAllKpiMeasureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKpiMeasureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllKpiMeasureRequest>
  ): QueryAllKpiMeasureRequest {
    const message = {
      ...baseQueryAllKpiMeasureRequest,
    } as QueryAllKpiMeasureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllKpiMeasureResponse: object = {};

export const QueryAllKpiMeasureResponse = {
  encode(
    message: QueryAllKpiMeasureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.kpiMeasure) {
      KpiMeasure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllKpiMeasureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllKpiMeasureResponse,
    } as QueryAllKpiMeasureResponse;
    message.kpiMeasure = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kpiMeasure.push(KpiMeasure.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllKpiMeasureResponse {
    const message = {
      ...baseQueryAllKpiMeasureResponse,
    } as QueryAllKpiMeasureResponse;
    message.kpiMeasure = [];
    if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
      for (const e of object.kpiMeasure) {
        message.kpiMeasure.push(KpiMeasure.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllKpiMeasureResponse): unknown {
    const obj: any = {};
    if (message.kpiMeasure) {
      obj.kpiMeasure = message.kpiMeasure.map((e) =>
        e ? KpiMeasure.toJSON(e) : undefined
      );
    } else {
      obj.kpiMeasure = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllKpiMeasureResponse>
  ): QueryAllKpiMeasureResponse {
    const message = {
      ...baseQueryAllKpiMeasureResponse,
    } as QueryAllKpiMeasureResponse;
    message.kpiMeasure = [];
    if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
      for (const e of object.kpiMeasure) {
        message.kpiMeasure.push(KpiMeasure.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetLemDatasetRequest: object = { index: "" };

export const QueryGetLemDatasetRequest = {
  encode(
    message: QueryGetLemDatasetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLemDatasetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLemDatasetRequest,
    } as QueryGetLemDatasetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLemDatasetRequest {
    const message = {
      ...baseQueryGetLemDatasetRequest,
    } as QueryGetLemDatasetRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetLemDatasetRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLemDatasetRequest>
  ): QueryGetLemDatasetRequest {
    const message = {
      ...baseQueryGetLemDatasetRequest,
    } as QueryGetLemDatasetRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetLemDatasetResponse: object = {};

export const QueryGetLemDatasetResponse = {
  encode(
    message: QueryGetLemDatasetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lemDataset !== undefined) {
      LemDataset.encode(message.lemDataset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLemDatasetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLemDatasetResponse,
    } as QueryGetLemDatasetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lemDataset = LemDataset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLemDatasetResponse {
    const message = {
      ...baseQueryGetLemDatasetResponse,
    } as QueryGetLemDatasetResponse;
    if (object.lemDataset !== undefined && object.lemDataset !== null) {
      message.lemDataset = LemDataset.fromJSON(object.lemDataset);
    } else {
      message.lemDataset = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLemDatasetResponse): unknown {
    const obj: any = {};
    message.lemDataset !== undefined &&
      (obj.lemDataset = message.lemDataset
        ? LemDataset.toJSON(message.lemDataset)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLemDatasetResponse>
  ): QueryGetLemDatasetResponse {
    const message = {
      ...baseQueryGetLemDatasetResponse,
    } as QueryGetLemDatasetResponse;
    if (object.lemDataset !== undefined && object.lemDataset !== null) {
      message.lemDataset = LemDataset.fromPartial(object.lemDataset);
    } else {
      message.lemDataset = undefined;
    }
    return message;
  },
};

const baseQueryAllLemDatasetRequest: object = {};

export const QueryAllLemDatasetRequest = {
  encode(
    message: QueryAllLemDatasetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLemDatasetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLemDatasetRequest,
    } as QueryAllLemDatasetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLemDatasetRequest {
    const message = {
      ...baseQueryAllLemDatasetRequest,
    } as QueryAllLemDatasetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLemDatasetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLemDatasetRequest>
  ): QueryAllLemDatasetRequest {
    const message = {
      ...baseQueryAllLemDatasetRequest,
    } as QueryAllLemDatasetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLemDatasetResponse: object = {};

export const QueryAllLemDatasetResponse = {
  encode(
    message: QueryAllLemDatasetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.lemDataset) {
      LemDataset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLemDatasetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLemDatasetResponse,
    } as QueryAllLemDatasetResponse;
    message.lemDataset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lemDataset.push(LemDataset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLemDatasetResponse {
    const message = {
      ...baseQueryAllLemDatasetResponse,
    } as QueryAllLemDatasetResponse;
    message.lemDataset = [];
    if (object.lemDataset !== undefined && object.lemDataset !== null) {
      for (const e of object.lemDataset) {
        message.lemDataset.push(LemDataset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLemDatasetResponse): unknown {
    const obj: any = {};
    if (message.lemDataset) {
      obj.lemDataset = message.lemDataset.map((e) =>
        e ? LemDataset.toJSON(e) : undefined
      );
    } else {
      obj.lemDataset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLemDatasetResponse>
  ): QueryAllLemDatasetResponse {
    const message = {
      ...baseQueryAllLemDatasetResponse,
    } as QueryAllLemDatasetResponse;
    message.lemDataset = [];
    if (object.lemDataset !== undefined && object.lemDataset !== null) {
      for (const e of object.lemDataset) {
        message.lemDataset.push(LemDataset.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDefaultLemParsRequest: object = { index: "" };

export const QueryGetDefaultLemParsRequest = {
  encode(
    message: QueryGetDefaultLemParsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDefaultLemParsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDefaultLemParsRequest,
    } as QueryGetDefaultLemParsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDefaultLemParsRequest {
    const message = {
      ...baseQueryGetDefaultLemParsRequest,
    } as QueryGetDefaultLemParsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetDefaultLemParsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDefaultLemParsRequest>
  ): QueryGetDefaultLemParsRequest {
    const message = {
      ...baseQueryGetDefaultLemParsRequest,
    } as QueryGetDefaultLemParsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetDefaultLemParsResponse: object = {};

export const QueryGetDefaultLemParsResponse = {
  encode(
    message: QueryGetDefaultLemParsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.defaultLemPars !== undefined) {
      DefaultLemPars.encode(
        message.defaultLemPars,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDefaultLemParsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDefaultLemParsResponse,
    } as QueryGetDefaultLemParsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultLemPars = DefaultLemPars.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDefaultLemParsResponse {
    const message = {
      ...baseQueryGetDefaultLemParsResponse,
    } as QueryGetDefaultLemParsResponse;
    if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
      message.defaultLemPars = DefaultLemPars.fromJSON(object.defaultLemPars);
    } else {
      message.defaultLemPars = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDefaultLemParsResponse): unknown {
    const obj: any = {};
    message.defaultLemPars !== undefined &&
      (obj.defaultLemPars = message.defaultLemPars
        ? DefaultLemPars.toJSON(message.defaultLemPars)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDefaultLemParsResponse>
  ): QueryGetDefaultLemParsResponse {
    const message = {
      ...baseQueryGetDefaultLemParsResponse,
    } as QueryGetDefaultLemParsResponse;
    if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
      message.defaultLemPars = DefaultLemPars.fromPartial(
        object.defaultLemPars
      );
    } else {
      message.defaultLemPars = undefined;
    }
    return message;
  },
};

const baseQueryAllDefaultLemParsRequest: object = {};

export const QueryAllDefaultLemParsRequest = {
  encode(
    message: QueryAllDefaultLemParsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDefaultLemParsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDefaultLemParsRequest,
    } as QueryAllDefaultLemParsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDefaultLemParsRequest {
    const message = {
      ...baseQueryAllDefaultLemParsRequest,
    } as QueryAllDefaultLemParsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDefaultLemParsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDefaultLemParsRequest>
  ): QueryAllDefaultLemParsRequest {
    const message = {
      ...baseQueryAllDefaultLemParsRequest,
    } as QueryAllDefaultLemParsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDefaultLemParsResponse: object = {};

export const QueryAllDefaultLemParsResponse = {
  encode(
    message: QueryAllDefaultLemParsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.defaultLemPars) {
      DefaultLemPars.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDefaultLemParsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDefaultLemParsResponse,
    } as QueryAllDefaultLemParsResponse;
    message.defaultLemPars = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultLemPars.push(
            DefaultLemPars.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDefaultLemParsResponse {
    const message = {
      ...baseQueryAllDefaultLemParsResponse,
    } as QueryAllDefaultLemParsResponse;
    message.defaultLemPars = [];
    if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
      for (const e of object.defaultLemPars) {
        message.defaultLemPars.push(DefaultLemPars.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDefaultLemParsResponse): unknown {
    const obj: any = {};
    if (message.defaultLemPars) {
      obj.defaultLemPars = message.defaultLemPars.map((e) =>
        e ? DefaultLemPars.toJSON(e) : undefined
      );
    } else {
      obj.defaultLemPars = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDefaultLemParsResponse>
  ): QueryAllDefaultLemParsResponse {
    const message = {
      ...baseQueryAllDefaultLemParsResponse,
    } as QueryAllDefaultLemParsResponse;
    message.defaultLemPars = [];
    if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
      for (const e of object.defaultLemPars) {
        message.defaultLemPars.push(DefaultLemPars.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a dso by index. */
  Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse>;
  /** Queries a aggregator by index. */
  Aggregator(
    request: QueryGetAggregatorRequest
  ): Promise<QueryGetAggregatorResponse>;
  /** Queries a player by index. */
  Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse>;
  /** Queries a list of player items. */
  PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse>;
  /** Queries a lem by index. */
  Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse>;
  /** Queries a list of lem items. */
  LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse>;
  /** Queries a lemMeasure by index. */
  LemMeasure(
    request: QueryGetLemMeasureRequest
  ): Promise<QueryGetLemMeasureResponse>;
  /** Queries a list of lemMeasure items. */
  LemMeasureAll(
    request: QueryAllLemMeasureRequest
  ): Promise<QueryAllLemMeasureResponse>;
  /** Queries a sla by index. */
  Sla(request: QueryGetSlaRequest): Promise<QueryGetSlaResponse>;
  /** Queries a list of sla items. */
  SlaAll(request: QueryAllSlaRequest): Promise<QueryAllSlaResponse>;
  /** Queries a kpi by index. */
  Kpi(request: QueryGetKpiRequest): Promise<QueryGetKpiResponse>;
  /** Queries a list of kpi items. */
  KpiAll(request: QueryAllKpiRequest): Promise<QueryAllKpiResponse>;
  /** Queries a kpiMeasure by index. */
  KpiMeasure(
    request: QueryGetKpiMeasureRequest
  ): Promise<QueryGetKpiMeasureResponse>;
  /** Queries a list of kpiMeasure items. */
  KpiMeasureAll(
    request: QueryAllKpiMeasureRequest
  ): Promise<QueryAllKpiMeasureResponse>;
  /** Queries a lemDataset by index. */
  LemDataset(
    request: QueryGetLemDatasetRequest
  ): Promise<QueryGetLemDatasetResponse>;
  /** Queries a list of lemDataset items. */
  LemDatasetAll(
    request: QueryAllLemDatasetRequest
  ): Promise<QueryAllLemDatasetResponse>;
  /** Queries a defaultLemPars by index. */
  DefaultLemPars(
    request: QueryGetDefaultLemParsRequest
  ): Promise<QueryGetDefaultLemParsResponse>;
  /** Queries a list of defaultLemPars items. */
  DefaultLemParsAll(
    request: QueryAllDefaultLemParsRequest
  ): Promise<QueryAllDefaultLemParsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Dso(request: QueryGetDsoRequest): Promise<QueryGetDsoResponse> {
    const data = QueryGetDsoRequest.encode(request).finish();
    const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Dso", data);
    return promise.then((data) => QueryGetDsoResponse.decode(new Reader(data)));
  }

  Aggregator(
    request: QueryGetAggregatorRequest
  ): Promise<QueryGetAggregatorResponse> {
    const data = QueryGetAggregatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "Aggregator",
      data
    );
    return promise.then((data) =>
      QueryGetAggregatorResponse.decode(new Reader(data))
    );
  }

  Player(request: QueryGetPlayerRequest): Promise<QueryGetPlayerResponse> {
    const data = QueryGetPlayerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "Player",
      data
    );
    return promise.then((data) =>
      QueryGetPlayerResponse.decode(new Reader(data))
    );
  }

  PlayerAll(request: QueryAllPlayerRequest): Promise<QueryAllPlayerResponse> {
    const data = QueryAllPlayerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "PlayerAll",
      data
    );
    return promise.then((data) =>
      QueryAllPlayerResponse.decode(new Reader(data))
    );
  }

  Lem(request: QueryGetLemRequest): Promise<QueryGetLemResponse> {
    const data = QueryGetLemRequest.encode(request).finish();
    const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Lem", data);
    return promise.then((data) => QueryGetLemResponse.decode(new Reader(data)));
  }

  LemAll(request: QueryAllLemRequest): Promise<QueryAllLemResponse> {
    const data = QueryAllLemRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "LemAll",
      data
    );
    return promise.then((data) => QueryAllLemResponse.decode(new Reader(data)));
  }

  LemMeasure(
    request: QueryGetLemMeasureRequest
  ): Promise<QueryGetLemMeasureResponse> {
    const data = QueryGetLemMeasureRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "LemMeasure",
      data
    );
    return promise.then((data) =>
      QueryGetLemMeasureResponse.decode(new Reader(data))
    );
  }

  LemMeasureAll(
    request: QueryAllLemMeasureRequest
  ): Promise<QueryAllLemMeasureResponse> {
    const data = QueryAllLemMeasureRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "LemMeasureAll",
      data
    );
    return promise.then((data) =>
      QueryAllLemMeasureResponse.decode(new Reader(data))
    );
  }

  Sla(request: QueryGetSlaRequest): Promise<QueryGetSlaResponse> {
    const data = QueryGetSlaRequest.encode(request).finish();
    const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Sla", data);
    return promise.then((data) => QueryGetSlaResponse.decode(new Reader(data)));
  }

  SlaAll(request: QueryAllSlaRequest): Promise<QueryAllSlaResponse> {
    const data = QueryAllSlaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "SlaAll",
      data
    );
    return promise.then((data) => QueryAllSlaResponse.decode(new Reader(data)));
  }

  Kpi(request: QueryGetKpiRequest): Promise<QueryGetKpiResponse> {
    const data = QueryGetKpiRequest.encode(request).finish();
    const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Kpi", data);
    return promise.then((data) => QueryGetKpiResponse.decode(new Reader(data)));
  }

  KpiAll(request: QueryAllKpiRequest): Promise<QueryAllKpiResponse> {
    const data = QueryAllKpiRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "KpiAll",
      data
    );
    return promise.then((data) => QueryAllKpiResponse.decode(new Reader(data)));
  }

  KpiMeasure(
    request: QueryGetKpiMeasureRequest
  ): Promise<QueryGetKpiMeasureResponse> {
    const data = QueryGetKpiMeasureRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "KpiMeasure",
      data
    );
    return promise.then((data) =>
      QueryGetKpiMeasureResponse.decode(new Reader(data))
    );
  }

  KpiMeasureAll(
    request: QueryAllKpiMeasureRequest
  ): Promise<QueryAllKpiMeasureResponse> {
    const data = QueryAllKpiMeasureRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "KpiMeasureAll",
      data
    );
    return promise.then((data) =>
      QueryAllKpiMeasureResponse.decode(new Reader(data))
    );
  }

  LemDataset(
    request: QueryGetLemDatasetRequest
  ): Promise<QueryGetLemDatasetResponse> {
    const data = QueryGetLemDatasetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "LemDataset",
      data
    );
    return promise.then((data) =>
      QueryGetLemDatasetResponse.decode(new Reader(data))
    );
  }

  LemDatasetAll(
    request: QueryAllLemDatasetRequest
  ): Promise<QueryAllLemDatasetResponse> {
    const data = QueryAllLemDatasetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "LemDatasetAll",
      data
    );
    return promise.then((data) =>
      QueryAllLemDatasetResponse.decode(new Reader(data))
    );
  }

  DefaultLemPars(
    request: QueryGetDefaultLemParsRequest
  ): Promise<QueryGetDefaultLemParsResponse> {
    const data = QueryGetDefaultLemParsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "DefaultLemPars",
      data
    );
    return promise.then((data) =>
      QueryGetDefaultLemParsResponse.decode(new Reader(data))
    );
  }

  DefaultLemParsAll(
    request: QueryAllDefaultLemParsRequest
  ): Promise<QueryAllDefaultLemParsResponse> {
    const data = QueryAllDefaultLemParsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "supsidacdisaac.pm.pm.Query",
      "DefaultLemParsAll",
      data
    );
    return promise.then((data) =>
      QueryAllDefaultLemParsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
