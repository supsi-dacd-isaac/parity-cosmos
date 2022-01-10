/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Dso } from "../pm/dso";
import { Aggregator } from "../pm/aggregator";
import { Player } from "../pm/player";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Lem } from "../pm/lem";
import { LemMeasure } from "../pm/lem_measure";
import { Sla } from "../pm/sla";
import { Kpi } from "../pm/kpi";
import { KpiMeasure } from "../pm/kpi_measure";
import { LemDataset } from "../pm/lem_dataset";
import { DefaultLemPars } from "../pm/default_lem_pars";
import { MarketOperator } from "../pm/market_operator";
import { GridState } from "../pm/grid_state";
export const protobufPackage = "supsidacdisaac.pm.pm";
const baseQueryGetDsoRequest = {};
export const QueryGetDsoRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDsoRequest };
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
    fromJSON(_) {
        const message = { ...baseQueryGetDsoRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryGetDsoRequest };
        return message;
    },
};
const baseQueryGetDsoResponse = {};
export const QueryGetDsoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Dso !== undefined) {
            Dso.encode(message.Dso, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDsoResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetDsoResponse };
        if (object.Dso !== undefined && object.Dso !== null) {
            message.Dso = Dso.fromJSON(object.Dso);
        }
        else {
            message.Dso = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Dso !== undefined &&
            (obj.Dso = message.Dso ? Dso.toJSON(message.Dso) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetDsoResponse };
        if (object.Dso !== undefined && object.Dso !== null) {
            message.Dso = Dso.fromPartial(object.Dso);
        }
        else {
            message.Dso = undefined;
        }
        return message;
    },
};
const baseQueryGetAggregatorRequest = {};
export const QueryGetAggregatorRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAggregatorRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetAggregatorRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetAggregatorRequest,
        };
        return message;
    },
};
const baseQueryGetAggregatorResponse = {};
export const QueryGetAggregatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Aggregator !== undefined) {
            Aggregator.encode(message.Aggregator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAggregatorResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetAggregatorResponse,
        };
        if (object.Aggregator !== undefined && object.Aggregator !== null) {
            message.Aggregator = Aggregator.fromJSON(object.Aggregator);
        }
        else {
            message.Aggregator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Aggregator !== undefined &&
            (obj.Aggregator = message.Aggregator
                ? Aggregator.toJSON(message.Aggregator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetAggregatorResponse,
        };
        if (object.Aggregator !== undefined && object.Aggregator !== null) {
            message.Aggregator = Aggregator.fromPartial(object.Aggregator);
        }
        else {
            message.Aggregator = undefined;
        }
        return message;
    },
};
const baseQueryGetPlayerRequest = { index: "" };
export const QueryGetPlayerRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlayerRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetPlayerRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlayerRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetPlayerResponse = {};
export const QueryGetPlayerResponse = {
    encode(message, writer = Writer.create()) {
        if (message.player !== undefined) {
            Player.encode(message.player, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPlayerResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetPlayerResponse };
        if (object.player !== undefined && object.player !== null) {
            message.player = Player.fromJSON(object.player);
        }
        else {
            message.player = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.player !== undefined &&
            (obj.player = message.player ? Player.toJSON(message.player) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPlayerResponse };
        if (object.player !== undefined && object.player !== null) {
            message.player = Player.fromPartial(object.player);
        }
        else {
            message.player = undefined;
        }
        return message;
    },
};
const baseQueryAllPlayerRequest = {};
export const QueryAllPlayerRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlayerRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPlayerRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPlayerRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPlayerResponse = {};
export const QueryAllPlayerResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.player) {
            Player.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPlayerResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllPlayerResponse };
        message.player = [];
        if (object.player !== undefined && object.player !== null) {
            for (const e of object.player) {
                message.player.push(Player.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.player) {
            obj.player = message.player.map((e) => e ? Player.toJSON(e) : undefined);
        }
        else {
            obj.player = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPlayerResponse };
        message.player = [];
        if (object.player !== undefined && object.player !== null) {
            for (const e of object.player) {
                message.player.push(Player.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetLemRequest = { index: "" };
export const QueryGetLemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetLemRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetLemRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetLemRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetLemResponse = {};
export const QueryGetLemResponse = {
    encode(message, writer = Writer.create()) {
        if (message.lem !== undefined) {
            Lem.encode(message.lem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetLemResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetLemResponse };
        if (object.lem !== undefined && object.lem !== null) {
            message.lem = Lem.fromJSON(object.lem);
        }
        else {
            message.lem = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lem !== undefined &&
            (obj.lem = message.lem ? Lem.toJSON(message.lem) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetLemResponse };
        if (object.lem !== undefined && object.lem !== null) {
            message.lem = Lem.fromPartial(object.lem);
        }
        else {
            message.lem = undefined;
        }
        return message;
    },
};
const baseQueryAllLemRequest = {};
export const QueryAllLemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllLemRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllLemRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllLemRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllLemResponse = {};
export const QueryAllLemResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.lem) {
            Lem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllLemResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllLemResponse };
        message.lem = [];
        if (object.lem !== undefined && object.lem !== null) {
            for (const e of object.lem) {
                message.lem.push(Lem.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.lem) {
            obj.lem = message.lem.map((e) => (e ? Lem.toJSON(e) : undefined));
        }
        else {
            obj.lem = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllLemResponse };
        message.lem = [];
        if (object.lem !== undefined && object.lem !== null) {
            for (const e of object.lem) {
                message.lem.push(Lem.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetLemMeasureRequest = { index: "" };
export const QueryGetLemMeasureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetLemMeasureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetLemMeasureRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetLemMeasureRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetLemMeasureResponse = {};
export const QueryGetLemMeasureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.lemMeasure !== undefined) {
            LemMeasure.encode(message.lemMeasure, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetLemMeasureResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetLemMeasureResponse,
        };
        if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
            message.lemMeasure = LemMeasure.fromJSON(object.lemMeasure);
        }
        else {
            message.lemMeasure = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lemMeasure !== undefined &&
            (obj.lemMeasure = message.lemMeasure
                ? LemMeasure.toJSON(message.lemMeasure)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetLemMeasureResponse,
        };
        if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
            message.lemMeasure = LemMeasure.fromPartial(object.lemMeasure);
        }
        else {
            message.lemMeasure = undefined;
        }
        return message;
    },
};
const baseQueryAllLemMeasureRequest = {};
export const QueryAllLemMeasureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllLemMeasureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllLemMeasureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllLemMeasureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllLemMeasureResponse = {};
export const QueryAllLemMeasureResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.lemMeasure) {
            LemMeasure.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllLemMeasureResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllLemMeasureResponse,
        };
        message.lemMeasure = [];
        if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
            for (const e of object.lemMeasure) {
                message.lemMeasure.push(LemMeasure.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.lemMeasure) {
            obj.lemMeasure = message.lemMeasure.map((e) => e ? LemMeasure.toJSON(e) : undefined);
        }
        else {
            obj.lemMeasure = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllLemMeasureResponse,
        };
        message.lemMeasure = [];
        if (object.lemMeasure !== undefined && object.lemMeasure !== null) {
            for (const e of object.lemMeasure) {
                message.lemMeasure.push(LemMeasure.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetSlaRequest = { index: "" };
export const QueryGetSlaRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSlaRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetSlaRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSlaRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetSlaResponse = {};
export const QueryGetSlaResponse = {
    encode(message, writer = Writer.create()) {
        if (message.sla !== undefined) {
            Sla.encode(message.sla, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSlaResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetSlaResponse };
        if (object.sla !== undefined && object.sla !== null) {
            message.sla = Sla.fromJSON(object.sla);
        }
        else {
            message.sla = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sla !== undefined &&
            (obj.sla = message.sla ? Sla.toJSON(message.sla) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSlaResponse };
        if (object.sla !== undefined && object.sla !== null) {
            message.sla = Sla.fromPartial(object.sla);
        }
        else {
            message.sla = undefined;
        }
        return message;
    },
};
const baseQueryAllSlaRequest = {};
export const QueryAllSlaRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSlaRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllSlaRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSlaRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSlaResponse = {};
export const QueryAllSlaResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sla) {
            Sla.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSlaResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllSlaResponse };
        message.sla = [];
        if (object.sla !== undefined && object.sla !== null) {
            for (const e of object.sla) {
                message.sla.push(Sla.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sla) {
            obj.sla = message.sla.map((e) => (e ? Sla.toJSON(e) : undefined));
        }
        else {
            obj.sla = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSlaResponse };
        message.sla = [];
        if (object.sla !== undefined && object.sla !== null) {
            for (const e of object.sla) {
                message.sla.push(Sla.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetKpiRequest = { index: "" };
export const QueryGetKpiRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetKpiRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetKpiRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetKpiRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetKpiResponse = {};
export const QueryGetKpiResponse = {
    encode(message, writer = Writer.create()) {
        if (message.kpi !== undefined) {
            Kpi.encode(message.kpi, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetKpiResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetKpiResponse };
        if (object.kpi !== undefined && object.kpi !== null) {
            message.kpi = Kpi.fromJSON(object.kpi);
        }
        else {
            message.kpi = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.kpi !== undefined &&
            (obj.kpi = message.kpi ? Kpi.toJSON(message.kpi) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetKpiResponse };
        if (object.kpi !== undefined && object.kpi !== null) {
            message.kpi = Kpi.fromPartial(object.kpi);
        }
        else {
            message.kpi = undefined;
        }
        return message;
    },
};
const baseQueryAllKpiRequest = {};
export const QueryAllKpiRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllKpiRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllKpiRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllKpiRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllKpiResponse = {};
export const QueryAllKpiResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.kpi) {
            Kpi.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllKpiResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllKpiResponse };
        message.kpi = [];
        if (object.kpi !== undefined && object.kpi !== null) {
            for (const e of object.kpi) {
                message.kpi.push(Kpi.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.kpi) {
            obj.kpi = message.kpi.map((e) => (e ? Kpi.toJSON(e) : undefined));
        }
        else {
            obj.kpi = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllKpiResponse };
        message.kpi = [];
        if (object.kpi !== undefined && object.kpi !== null) {
            for (const e of object.kpi) {
                message.kpi.push(Kpi.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetKpiMeasureRequest = { index: "" };
export const QueryGetKpiMeasureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetKpiMeasureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetKpiMeasureRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetKpiMeasureRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetKpiMeasureResponse = {};
export const QueryGetKpiMeasureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.kpiMeasure !== undefined) {
            KpiMeasure.encode(message.kpiMeasure, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetKpiMeasureResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetKpiMeasureResponse,
        };
        if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
            message.kpiMeasure = KpiMeasure.fromJSON(object.kpiMeasure);
        }
        else {
            message.kpiMeasure = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.kpiMeasure !== undefined &&
            (obj.kpiMeasure = message.kpiMeasure
                ? KpiMeasure.toJSON(message.kpiMeasure)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetKpiMeasureResponse,
        };
        if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
            message.kpiMeasure = KpiMeasure.fromPartial(object.kpiMeasure);
        }
        else {
            message.kpiMeasure = undefined;
        }
        return message;
    },
};
const baseQueryAllKpiMeasureRequest = {};
export const QueryAllKpiMeasureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllKpiMeasureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllKpiMeasureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllKpiMeasureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllKpiMeasureResponse = {};
export const QueryAllKpiMeasureResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.kpiMeasure) {
            KpiMeasure.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllKpiMeasureResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllKpiMeasureResponse,
        };
        message.kpiMeasure = [];
        if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
            for (const e of object.kpiMeasure) {
                message.kpiMeasure.push(KpiMeasure.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.kpiMeasure) {
            obj.kpiMeasure = message.kpiMeasure.map((e) => e ? KpiMeasure.toJSON(e) : undefined);
        }
        else {
            obj.kpiMeasure = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllKpiMeasureResponse,
        };
        message.kpiMeasure = [];
        if (object.kpiMeasure !== undefined && object.kpiMeasure !== null) {
            for (const e of object.kpiMeasure) {
                message.kpiMeasure.push(KpiMeasure.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetLemDatasetRequest = { index: "" };
export const QueryGetLemDatasetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetLemDatasetRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetLemDatasetRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetLemDatasetRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetLemDatasetResponse = {};
export const QueryGetLemDatasetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.lemDataset !== undefined) {
            LemDataset.encode(message.lemDataset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetLemDatasetResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetLemDatasetResponse,
        };
        if (object.lemDataset !== undefined && object.lemDataset !== null) {
            message.lemDataset = LemDataset.fromJSON(object.lemDataset);
        }
        else {
            message.lemDataset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.lemDataset !== undefined &&
            (obj.lemDataset = message.lemDataset
                ? LemDataset.toJSON(message.lemDataset)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetLemDatasetResponse,
        };
        if (object.lemDataset !== undefined && object.lemDataset !== null) {
            message.lemDataset = LemDataset.fromPartial(object.lemDataset);
        }
        else {
            message.lemDataset = undefined;
        }
        return message;
    },
};
const baseQueryAllLemDatasetRequest = {};
export const QueryAllLemDatasetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllLemDatasetRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllLemDatasetRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllLemDatasetRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllLemDatasetResponse = {};
export const QueryAllLemDatasetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.lemDataset) {
            LemDataset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllLemDatasetResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllLemDatasetResponse,
        };
        message.lemDataset = [];
        if (object.lemDataset !== undefined && object.lemDataset !== null) {
            for (const e of object.lemDataset) {
                message.lemDataset.push(LemDataset.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.lemDataset) {
            obj.lemDataset = message.lemDataset.map((e) => e ? LemDataset.toJSON(e) : undefined);
        }
        else {
            obj.lemDataset = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllLemDatasetResponse,
        };
        message.lemDataset = [];
        if (object.lemDataset !== undefined && object.lemDataset !== null) {
            for (const e of object.lemDataset) {
                message.lemDataset.push(LemDataset.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetDefaultLemParsRequest = { index: "" };
export const QueryGetDefaultLemParsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDefaultLemParsRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetDefaultLemParsRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDefaultLemParsRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetDefaultLemParsResponse = {};
export const QueryGetDefaultLemParsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.defaultLemPars !== undefined) {
            DefaultLemPars.encode(message.defaultLemPars, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDefaultLemParsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultLemPars = DefaultLemPars.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetDefaultLemParsResponse,
        };
        if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
            message.defaultLemPars = DefaultLemPars.fromJSON(object.defaultLemPars);
        }
        else {
            message.defaultLemPars = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultLemPars !== undefined &&
            (obj.defaultLemPars = message.defaultLemPars
                ? DefaultLemPars.toJSON(message.defaultLemPars)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDefaultLemParsResponse,
        };
        if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
            message.defaultLemPars = DefaultLemPars.fromPartial(object.defaultLemPars);
        }
        else {
            message.defaultLemPars = undefined;
        }
        return message;
    },
};
const baseQueryAllDefaultLemParsRequest = {};
export const QueryAllDefaultLemParsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDefaultLemParsRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllDefaultLemParsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDefaultLemParsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllDefaultLemParsResponse = {};
export const QueryAllDefaultLemParsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.defaultLemPars) {
            DefaultLemPars.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDefaultLemParsResponse,
        };
        message.defaultLemPars = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultLemPars.push(DefaultLemPars.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllDefaultLemParsResponse,
        };
        message.defaultLemPars = [];
        if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
            for (const e of object.defaultLemPars) {
                message.defaultLemPars.push(DefaultLemPars.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.defaultLemPars) {
            obj.defaultLemPars = message.defaultLemPars.map((e) => e ? DefaultLemPars.toJSON(e) : undefined);
        }
        else {
            obj.defaultLemPars = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDefaultLemParsResponse,
        };
        message.defaultLemPars = [];
        if (object.defaultLemPars !== undefined && object.defaultLemPars !== null) {
            for (const e of object.defaultLemPars) {
                message.defaultLemPars.push(DefaultLemPars.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetMarketOperatorRequest = {};
export const QueryGetMarketOperatorRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMarketOperatorRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetMarketOperatorRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetMarketOperatorRequest,
        };
        return message;
    },
};
const baseQueryGetMarketOperatorResponse = {};
export const QueryGetMarketOperatorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.MarketOperator !== undefined) {
            MarketOperator.encode(message.MarketOperator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMarketOperatorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.MarketOperator = MarketOperator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetMarketOperatorResponse,
        };
        if (object.MarketOperator !== undefined && object.MarketOperator !== null) {
            message.MarketOperator = MarketOperator.fromJSON(object.MarketOperator);
        }
        else {
            message.MarketOperator = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.MarketOperator !== undefined &&
            (obj.MarketOperator = message.MarketOperator
                ? MarketOperator.toJSON(message.MarketOperator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMarketOperatorResponse,
        };
        if (object.MarketOperator !== undefined && object.MarketOperator !== null) {
            message.MarketOperator = MarketOperator.fromPartial(object.MarketOperator);
        }
        else {
            message.MarketOperator = undefined;
        }
        return message;
    },
};
const baseQueryGetGridStateRequest = { index: "" };
export const QueryGetGridStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetGridStateRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetGridStateRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetGridStateRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetGridStateResponse = {};
export const QueryGetGridStateResponse = {
    encode(message, writer = Writer.create()) {
        if (message.gridState !== undefined) {
            GridState.encode(message.gridState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetGridStateResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gridState = GridState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetGridStateResponse,
        };
        if (object.gridState !== undefined && object.gridState !== null) {
            message.gridState = GridState.fromJSON(object.gridState);
        }
        else {
            message.gridState = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gridState !== undefined &&
            (obj.gridState = message.gridState
                ? GridState.toJSON(message.gridState)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetGridStateResponse,
        };
        if (object.gridState !== undefined && object.gridState !== null) {
            message.gridState = GridState.fromPartial(object.gridState);
        }
        else {
            message.gridState = undefined;
        }
        return message;
    },
};
const baseQueryAllGridStateRequest = {};
export const QueryAllGridStateRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllGridStateRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllGridStateRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllGridStateRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllGridStateResponse = {};
export const QueryAllGridStateResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.gridState) {
            GridState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllGridStateResponse,
        };
        message.gridState = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gridState.push(GridState.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllGridStateResponse,
        };
        message.gridState = [];
        if (object.gridState !== undefined && object.gridState !== null) {
            for (const e of object.gridState) {
                message.gridState.push(GridState.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.gridState) {
            obj.gridState = message.gridState.map((e) => e ? GridState.toJSON(e) : undefined);
        }
        else {
            obj.gridState = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllGridStateResponse,
        };
        message.gridState = [];
        if (object.gridState !== undefined && object.gridState !== null) {
            for (const e of object.gridState) {
                message.gridState.push(GridState.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Dso(request) {
        const data = QueryGetDsoRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Dso", data);
        return promise.then((data) => QueryGetDsoResponse.decode(new Reader(data)));
    }
    Aggregator(request) {
        const data = QueryGetAggregatorRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Aggregator", data);
        return promise.then((data) => QueryGetAggregatorResponse.decode(new Reader(data)));
    }
    Player(request) {
        const data = QueryGetPlayerRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Player", data);
        return promise.then((data) => QueryGetPlayerResponse.decode(new Reader(data)));
    }
    PlayerAll(request) {
        const data = QueryAllPlayerRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "PlayerAll", data);
        return promise.then((data) => QueryAllPlayerResponse.decode(new Reader(data)));
    }
    Lem(request) {
        const data = QueryGetLemRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Lem", data);
        return promise.then((data) => QueryGetLemResponse.decode(new Reader(data)));
    }
    LemAll(request) {
        const data = QueryAllLemRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "LemAll", data);
        return promise.then((data) => QueryAllLemResponse.decode(new Reader(data)));
    }
    LemMeasure(request) {
        const data = QueryGetLemMeasureRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "LemMeasure", data);
        return promise.then((data) => QueryGetLemMeasureResponse.decode(new Reader(data)));
    }
    LemMeasureAll(request) {
        const data = QueryAllLemMeasureRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "LemMeasureAll", data);
        return promise.then((data) => QueryAllLemMeasureResponse.decode(new Reader(data)));
    }
    Sla(request) {
        const data = QueryGetSlaRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Sla", data);
        return promise.then((data) => QueryGetSlaResponse.decode(new Reader(data)));
    }
    SlaAll(request) {
        const data = QueryAllSlaRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "SlaAll", data);
        return promise.then((data) => QueryAllSlaResponse.decode(new Reader(data)));
    }
    Kpi(request) {
        const data = QueryGetKpiRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "Kpi", data);
        return promise.then((data) => QueryGetKpiResponse.decode(new Reader(data)));
    }
    KpiAll(request) {
        const data = QueryAllKpiRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "KpiAll", data);
        return promise.then((data) => QueryAllKpiResponse.decode(new Reader(data)));
    }
    KpiMeasure(request) {
        const data = QueryGetKpiMeasureRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "KpiMeasure", data);
        return promise.then((data) => QueryGetKpiMeasureResponse.decode(new Reader(data)));
    }
    KpiMeasureAll(request) {
        const data = QueryAllKpiMeasureRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "KpiMeasureAll", data);
        return promise.then((data) => QueryAllKpiMeasureResponse.decode(new Reader(data)));
    }
    LemDataset(request) {
        const data = QueryGetLemDatasetRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "LemDataset", data);
        return promise.then((data) => QueryGetLemDatasetResponse.decode(new Reader(data)));
    }
    LemDatasetAll(request) {
        const data = QueryAllLemDatasetRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "LemDatasetAll", data);
        return promise.then((data) => QueryAllLemDatasetResponse.decode(new Reader(data)));
    }
    DefaultLemPars(request) {
        const data = QueryGetDefaultLemParsRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "DefaultLemPars", data);
        return promise.then((data) => QueryGetDefaultLemParsResponse.decode(new Reader(data)));
    }
    DefaultLemParsAll(request) {
        const data = QueryAllDefaultLemParsRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "DefaultLemParsAll", data);
        return promise.then((data) => QueryAllDefaultLemParsResponse.decode(new Reader(data)));
    }
    MarketOperator(request) {
        const data = QueryGetMarketOperatorRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "MarketOperator", data);
        return promise.then((data) => QueryGetMarketOperatorResponse.decode(new Reader(data)));
    }
    GridState(request) {
        const data = QueryGetGridStateRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "GridState", data);
        return promise.then((data) => QueryGetGridStateResponse.decode(new Reader(data)));
    }
    GridStateAll(request) {
        const data = QueryAllGridStateRequest.encode(request).finish();
        const promise = this.rpc.request("supsidacdisaac.pm.pm.Query", "GridStateAll", data);
        return promise.then((data) => QueryAllGridStateResponse.decode(new Reader(data)));
    }
}
