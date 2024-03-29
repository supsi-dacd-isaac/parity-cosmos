import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
export interface MsgCreateDso {
    creator: string;
    idx: string;
    address: string;
}
export interface MsgCreateDsoResponse {
}
export interface MsgUpdateDso {
    creator: string;
    idx: string;
    address: string;
}
export interface MsgUpdateDsoResponse {
}
export interface MsgDeleteDso {
    creator: string;
}
export interface MsgDeleteDsoResponse {
}
export interface MsgCreateAggregator {
    creator: string;
    idx: string;
    address: string;
}
export interface MsgCreateAggregatorResponse {
}
export interface MsgUpdateAggregator {
    creator: string;
    idx: string;
    address: string;
}
export interface MsgUpdateAggregatorResponse {
}
export interface MsgDeleteAggregator {
    creator: string;
}
export interface MsgDeleteAggregatorResponse {
}
export interface MsgCreatePlayer {
    creator: string;
    index: string;
    idx: string;
    address: string;
    role: string;
}
export interface MsgCreatePlayerResponse {
}
export interface MsgUpdatePlayer {
    creator: string;
    index: string;
    idx: string;
    address: string;
    role: string;
}
export interface MsgUpdatePlayerResponse {
}
export interface MsgDeletePlayer {
    creator: string;
    index: string;
}
export interface MsgDeletePlayerResponse {
}
export interface MsgCreateLem {
    creator: string;
    index: string;
    start: number;
    end: number;
    params: string[];
    players: string[];
}
export interface MsgCreateLemResponse {
}
export interface MsgUpdateLem {
    creator: string;
    index: string;
    start: number;
    end: number;
    params: string[];
    players: string[];
}
export interface MsgUpdateLemResponse {
}
export interface MsgDeleteLem {
    creator: string;
    index: string;
}
export interface MsgDeleteLemResponse {
}
export interface MsgCreateLemMeasure {
    creator: string;
    index: string;
    player: string;
    signal: string;
    timestamp: number;
    value: string;
    mu: string;
}
export interface MsgCreateLemMeasureResponse {
}
export interface MsgUpdateLemMeasure {
    creator: string;
    index: string;
    player: string;
    signal: string;
    timestamp: number;
    value: string;
    mu: string;
}
export interface MsgUpdateLemMeasureResponse {
}
export interface MsgDeleteLemMeasure {
    creator: string;
    index: string;
}
export interface MsgDeleteLemMeasureResponse {
}
export interface MsgCreateSla {
    creator: string;
    index: string;
    start: number;
    end: number;
}
export interface MsgCreateSlaResponse {
}
export interface MsgUpdateSla {
    creator: string;
    index: string;
    start: number;
    end: number;
}
export interface MsgUpdateSlaResponse {
}
export interface MsgDeleteSla {
    creator: string;
    index: string;
}
export interface MsgDeleteSlaResponse {
}
export interface MsgCreateKpi {
    creator: string;
    index: string;
    sla: string;
    rule: string;
    limit: string;
    mu: string;
    penalty: number;
}
export interface MsgCreateKpiResponse {
}
export interface MsgUpdateKpi {
    creator: string;
    index: string;
    sla: string;
    rule: string;
    limit: string;
    mu: string;
    penalty: number;
}
export interface MsgUpdateKpiResponse {
}
export interface MsgDeleteKpi {
    creator: string;
    index: string;
}
export interface MsgDeleteKpiResponse {
}
export interface MsgCreateKpiMeasure {
    creator: string;
    index: string;
    kpi: string;
    player: string;
    timestamp: number;
    value: string;
    mu: string;
}
export interface MsgCreateKpiMeasureResponse {
}
export interface MsgUpdateKpiMeasure {
    creator: string;
    index: string;
    kpi: string;
    player: string;
    timestamp: number;
    value: string;
    mu: string;
}
export interface MsgUpdateKpiMeasureResponse {
}
export interface MsgDeleteKpiMeasure {
    creator: string;
    index: string;
}
export interface MsgDeleteKpiMeasureResponse {
}
export interface MsgCreateLemDataset {
    creator: string;
    index: string;
    player: string;
    timestamp: number;
    pconsMeasure: string;
    pprodMeasure: string;
    pconsForecast: string;
    pprodForecast: string;
}
export interface MsgCreateLemDatasetResponse {
}
export interface MsgUpdateLemDataset {
    creator: string;
    index: string;
    player: string;
    timestamp: number;
    pconsMeasure: string;
    pprodMeasure: string;
    pconsForecast: string;
    pprodForecast: string;
}
export interface MsgUpdateLemDatasetResponse {
}
export interface MsgDeleteLemDataset {
    creator: string;
    index: string;
}
export interface MsgDeleteLemDatasetResponse {
}
export interface MsgCreateDefaultLemPars {
    creator: string;
    index: string;
    pbBAU: string;
    psBAU: string;
    pbP2P: string;
    psP2P: string;
    beta: string;
}
export interface MsgCreateDefaultLemParsResponse {
}
export interface MsgUpdateDefaultLemPars {
    creator: string;
    index: string;
    pbBAU: string;
    psBAU: string;
    pbP2P: string;
    psP2P: string;
    beta: string;
}
export interface MsgUpdateDefaultLemParsResponse {
}
export interface MsgDeleteDefaultLemPars {
    creator: string;
    index: string;
}
export interface MsgDeleteDefaultLemParsResponse {
}
export interface MsgCreateMarketOperator {
    creator: string;
    idx: string;
    address: string;
}
export interface MsgCreateMarketOperatorResponse {
}
export interface MsgUpdateMarketOperator {
    creator: string;
    idx: string;
    address: string;
}
export interface MsgUpdateMarketOperatorResponse {
}
export interface MsgDeleteMarketOperator {
    creator: string;
}
export interface MsgDeleteMarketOperatorResponse {
}
export interface MsgCreateGridState {
    creator: string;
    index: string;
    grid: string;
    timestamp: number;
    state: string;
}
export interface MsgCreateGridStateResponse {
}
export interface MsgUpdateGridState {
    creator: string;
    index: string;
    grid: string;
    timestamp: number;
    state: string;
}
export interface MsgUpdateGridStateResponse {
}
export interface MsgDeleteGridState {
    creator: string;
    index: string;
}
export interface MsgDeleteGridStateResponse {
}
export interface MsgCreateKpiFeatures {
    creator: string;
    index: string;
    sla: string;
    rule: string;
    limit: string;
    mu: string;
    penalty: number;
    players: string[];
}
export interface MsgCreateKpiFeaturesResponse {
}
export interface MsgUpdateKpiFeatures {
    creator: string;
    index: string;
    sla: string;
    rule: string;
    limit: string;
    mu: string;
    penalty: number;
    players: string[];
}
export interface MsgUpdateKpiFeaturesResponse {
}
export interface MsgDeleteKpiFeatures {
    creator: string;
    index: string;
}
export interface MsgDeleteKpiFeaturesResponse {
}
export interface MsgCreateForecast {
    creator: string;
    index: string;
    ts: number;
    values: string[];
}
export interface MsgCreateForecastResponse {
}
export interface MsgUpdateForecast {
    creator: string;
    index: string;
    ts: number;
    values: string[];
}
export interface MsgUpdateForecastResponse {
}
export interface MsgDeleteForecast {
    creator: string;
    index: string;
}
export interface MsgDeleteForecastResponse {
}
export declare const MsgCreateDso: {
    encode(message: MsgCreateDso, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDso;
    fromJSON(object: any): MsgCreateDso;
    toJSON(message: MsgCreateDso): unknown;
    fromPartial(object: DeepPartial<MsgCreateDso>): MsgCreateDso;
};
export declare const MsgCreateDsoResponse: {
    encode(_: MsgCreateDsoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDsoResponse;
    fromJSON(_: any): MsgCreateDsoResponse;
    toJSON(_: MsgCreateDsoResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateDsoResponse>): MsgCreateDsoResponse;
};
export declare const MsgUpdateDso: {
    encode(message: MsgUpdateDso, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDso;
    fromJSON(object: any): MsgUpdateDso;
    toJSON(message: MsgUpdateDso): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDso>): MsgUpdateDso;
};
export declare const MsgUpdateDsoResponse: {
    encode(_: MsgUpdateDsoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDsoResponse;
    fromJSON(_: any): MsgUpdateDsoResponse;
    toJSON(_: MsgUpdateDsoResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDsoResponse>): MsgUpdateDsoResponse;
};
export declare const MsgDeleteDso: {
    encode(message: MsgDeleteDso, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDso;
    fromJSON(object: any): MsgDeleteDso;
    toJSON(message: MsgDeleteDso): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDso>): MsgDeleteDso;
};
export declare const MsgDeleteDsoResponse: {
    encode(_: MsgDeleteDsoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDsoResponse;
    fromJSON(_: any): MsgDeleteDsoResponse;
    toJSON(_: MsgDeleteDsoResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDsoResponse>): MsgDeleteDsoResponse;
};
export declare const MsgCreateAggregator: {
    encode(message: MsgCreateAggregator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAggregator;
    fromJSON(object: any): MsgCreateAggregator;
    toJSON(message: MsgCreateAggregator): unknown;
    fromPartial(object: DeepPartial<MsgCreateAggregator>): MsgCreateAggregator;
};
export declare const MsgCreateAggregatorResponse: {
    encode(_: MsgCreateAggregatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAggregatorResponse;
    fromJSON(_: any): MsgCreateAggregatorResponse;
    toJSON(_: MsgCreateAggregatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAggregatorResponse>): MsgCreateAggregatorResponse;
};
export declare const MsgUpdateAggregator: {
    encode(message: MsgUpdateAggregator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAggregator;
    fromJSON(object: any): MsgUpdateAggregator;
    toJSON(message: MsgUpdateAggregator): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAggregator>): MsgUpdateAggregator;
};
export declare const MsgUpdateAggregatorResponse: {
    encode(_: MsgUpdateAggregatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAggregatorResponse;
    fromJSON(_: any): MsgUpdateAggregatorResponse;
    toJSON(_: MsgUpdateAggregatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAggregatorResponse>): MsgUpdateAggregatorResponse;
};
export declare const MsgDeleteAggregator: {
    encode(message: MsgDeleteAggregator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAggregator;
    fromJSON(object: any): MsgDeleteAggregator;
    toJSON(message: MsgDeleteAggregator): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAggregator>): MsgDeleteAggregator;
};
export declare const MsgDeleteAggregatorResponse: {
    encode(_: MsgDeleteAggregatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAggregatorResponse;
    fromJSON(_: any): MsgDeleteAggregatorResponse;
    toJSON(_: MsgDeleteAggregatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAggregatorResponse>): MsgDeleteAggregatorResponse;
};
export declare const MsgCreatePlayer: {
    encode(message: MsgCreatePlayer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayer;
    fromJSON(object: any): MsgCreatePlayer;
    toJSON(message: MsgCreatePlayer): unknown;
    fromPartial(object: DeepPartial<MsgCreatePlayer>): MsgCreatePlayer;
};
export declare const MsgCreatePlayerResponse: {
    encode(_: MsgCreatePlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePlayerResponse;
    fromJSON(_: any): MsgCreatePlayerResponse;
    toJSON(_: MsgCreatePlayerResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePlayerResponse>): MsgCreatePlayerResponse;
};
export declare const MsgUpdatePlayer: {
    encode(message: MsgUpdatePlayer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayer;
    fromJSON(object: any): MsgUpdatePlayer;
    toJSON(message: MsgUpdatePlayer): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePlayer>): MsgUpdatePlayer;
};
export declare const MsgUpdatePlayerResponse: {
    encode(_: MsgUpdatePlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePlayerResponse;
    fromJSON(_: any): MsgUpdatePlayerResponse;
    toJSON(_: MsgUpdatePlayerResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePlayerResponse>): MsgUpdatePlayerResponse;
};
export declare const MsgDeletePlayer: {
    encode(message: MsgDeletePlayer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayer;
    fromJSON(object: any): MsgDeletePlayer;
    toJSON(message: MsgDeletePlayer): unknown;
    fromPartial(object: DeepPartial<MsgDeletePlayer>): MsgDeletePlayer;
};
export declare const MsgDeletePlayerResponse: {
    encode(_: MsgDeletePlayerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePlayerResponse;
    fromJSON(_: any): MsgDeletePlayerResponse;
    toJSON(_: MsgDeletePlayerResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePlayerResponse>): MsgDeletePlayerResponse;
};
export declare const MsgCreateLem: {
    encode(message: MsgCreateLem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLem;
    fromJSON(object: any): MsgCreateLem;
    toJSON(message: MsgCreateLem): unknown;
    fromPartial(object: DeepPartial<MsgCreateLem>): MsgCreateLem;
};
export declare const MsgCreateLemResponse: {
    encode(_: MsgCreateLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLemResponse;
    fromJSON(_: any): MsgCreateLemResponse;
    toJSON(_: MsgCreateLemResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateLemResponse>): MsgCreateLemResponse;
};
export declare const MsgUpdateLem: {
    encode(message: MsgUpdateLem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLem;
    fromJSON(object: any): MsgUpdateLem;
    toJSON(message: MsgUpdateLem): unknown;
    fromPartial(object: DeepPartial<MsgUpdateLem>): MsgUpdateLem;
};
export declare const MsgUpdateLemResponse: {
    encode(_: MsgUpdateLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemResponse;
    fromJSON(_: any): MsgUpdateLemResponse;
    toJSON(_: MsgUpdateLemResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateLemResponse>): MsgUpdateLemResponse;
};
export declare const MsgDeleteLem: {
    encode(message: MsgDeleteLem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLem;
    fromJSON(object: any): MsgDeleteLem;
    toJSON(message: MsgDeleteLem): unknown;
    fromPartial(object: DeepPartial<MsgDeleteLem>): MsgDeleteLem;
};
export declare const MsgDeleteLemResponse: {
    encode(_: MsgDeleteLemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemResponse;
    fromJSON(_: any): MsgDeleteLemResponse;
    toJSON(_: MsgDeleteLemResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteLemResponse>): MsgDeleteLemResponse;
};
export declare const MsgCreateLemMeasure: {
    encode(message: MsgCreateLemMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLemMeasure;
    fromJSON(object: any): MsgCreateLemMeasure;
    toJSON(message: MsgCreateLemMeasure): unknown;
    fromPartial(object: DeepPartial<MsgCreateLemMeasure>): MsgCreateLemMeasure;
};
export declare const MsgCreateLemMeasureResponse: {
    encode(_: MsgCreateLemMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLemMeasureResponse;
    fromJSON(_: any): MsgCreateLemMeasureResponse;
    toJSON(_: MsgCreateLemMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateLemMeasureResponse>): MsgCreateLemMeasureResponse;
};
export declare const MsgUpdateLemMeasure: {
    encode(message: MsgUpdateLemMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemMeasure;
    fromJSON(object: any): MsgUpdateLemMeasure;
    toJSON(message: MsgUpdateLemMeasure): unknown;
    fromPartial(object: DeepPartial<MsgUpdateLemMeasure>): MsgUpdateLemMeasure;
};
export declare const MsgUpdateLemMeasureResponse: {
    encode(_: MsgUpdateLemMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemMeasureResponse;
    fromJSON(_: any): MsgUpdateLemMeasureResponse;
    toJSON(_: MsgUpdateLemMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateLemMeasureResponse>): MsgUpdateLemMeasureResponse;
};
export declare const MsgDeleteLemMeasure: {
    encode(message: MsgDeleteLemMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemMeasure;
    fromJSON(object: any): MsgDeleteLemMeasure;
    toJSON(message: MsgDeleteLemMeasure): unknown;
    fromPartial(object: DeepPartial<MsgDeleteLemMeasure>): MsgDeleteLemMeasure;
};
export declare const MsgDeleteLemMeasureResponse: {
    encode(_: MsgDeleteLemMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemMeasureResponse;
    fromJSON(_: any): MsgDeleteLemMeasureResponse;
    toJSON(_: MsgDeleteLemMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteLemMeasureResponse>): MsgDeleteLemMeasureResponse;
};
export declare const MsgCreateSla: {
    encode(message: MsgCreateSla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSla;
    fromJSON(object: any): MsgCreateSla;
    toJSON(message: MsgCreateSla): unknown;
    fromPartial(object: DeepPartial<MsgCreateSla>): MsgCreateSla;
};
export declare const MsgCreateSlaResponse: {
    encode(_: MsgCreateSlaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSlaResponse;
    fromJSON(_: any): MsgCreateSlaResponse;
    toJSON(_: MsgCreateSlaResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateSlaResponse>): MsgCreateSlaResponse;
};
export declare const MsgUpdateSla: {
    encode(message: MsgUpdateSla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSla;
    fromJSON(object: any): MsgUpdateSla;
    toJSON(message: MsgUpdateSla): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSla>): MsgUpdateSla;
};
export declare const MsgUpdateSlaResponse: {
    encode(_: MsgUpdateSlaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSlaResponse;
    fromJSON(_: any): MsgUpdateSlaResponse;
    toJSON(_: MsgUpdateSlaResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSlaResponse>): MsgUpdateSlaResponse;
};
export declare const MsgDeleteSla: {
    encode(message: MsgDeleteSla, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSla;
    fromJSON(object: any): MsgDeleteSla;
    toJSON(message: MsgDeleteSla): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSla>): MsgDeleteSla;
};
export declare const MsgDeleteSlaResponse: {
    encode(_: MsgDeleteSlaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSlaResponse;
    fromJSON(_: any): MsgDeleteSlaResponse;
    toJSON(_: MsgDeleteSlaResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSlaResponse>): MsgDeleteSlaResponse;
};
export declare const MsgCreateKpi: {
    encode(message: MsgCreateKpi, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateKpi;
    fromJSON(object: any): MsgCreateKpi;
    toJSON(message: MsgCreateKpi): unknown;
    fromPartial(object: DeepPartial<MsgCreateKpi>): MsgCreateKpi;
};
export declare const MsgCreateKpiResponse: {
    encode(_: MsgCreateKpiResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateKpiResponse;
    fromJSON(_: any): MsgCreateKpiResponse;
    toJSON(_: MsgCreateKpiResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateKpiResponse>): MsgCreateKpiResponse;
};
export declare const MsgUpdateKpi: {
    encode(message: MsgUpdateKpi, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpi;
    fromJSON(object: any): MsgUpdateKpi;
    toJSON(message: MsgUpdateKpi): unknown;
    fromPartial(object: DeepPartial<MsgUpdateKpi>): MsgUpdateKpi;
};
export declare const MsgUpdateKpiResponse: {
    encode(_: MsgUpdateKpiResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpiResponse;
    fromJSON(_: any): MsgUpdateKpiResponse;
    toJSON(_: MsgUpdateKpiResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateKpiResponse>): MsgUpdateKpiResponse;
};
export declare const MsgDeleteKpi: {
    encode(message: MsgDeleteKpi, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpi;
    fromJSON(object: any): MsgDeleteKpi;
    toJSON(message: MsgDeleteKpi): unknown;
    fromPartial(object: DeepPartial<MsgDeleteKpi>): MsgDeleteKpi;
};
export declare const MsgDeleteKpiResponse: {
    encode(_: MsgDeleteKpiResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpiResponse;
    fromJSON(_: any): MsgDeleteKpiResponse;
    toJSON(_: MsgDeleteKpiResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteKpiResponse>): MsgDeleteKpiResponse;
};
export declare const MsgCreateKpiMeasure: {
    encode(message: MsgCreateKpiMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateKpiMeasure;
    fromJSON(object: any): MsgCreateKpiMeasure;
    toJSON(message: MsgCreateKpiMeasure): unknown;
    fromPartial(object: DeepPartial<MsgCreateKpiMeasure>): MsgCreateKpiMeasure;
};
export declare const MsgCreateKpiMeasureResponse: {
    encode(_: MsgCreateKpiMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateKpiMeasureResponse;
    fromJSON(_: any): MsgCreateKpiMeasureResponse;
    toJSON(_: MsgCreateKpiMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateKpiMeasureResponse>): MsgCreateKpiMeasureResponse;
};
export declare const MsgUpdateKpiMeasure: {
    encode(message: MsgUpdateKpiMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpiMeasure;
    fromJSON(object: any): MsgUpdateKpiMeasure;
    toJSON(message: MsgUpdateKpiMeasure): unknown;
    fromPartial(object: DeepPartial<MsgUpdateKpiMeasure>): MsgUpdateKpiMeasure;
};
export declare const MsgUpdateKpiMeasureResponse: {
    encode(_: MsgUpdateKpiMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpiMeasureResponse;
    fromJSON(_: any): MsgUpdateKpiMeasureResponse;
    toJSON(_: MsgUpdateKpiMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateKpiMeasureResponse>): MsgUpdateKpiMeasureResponse;
};
export declare const MsgDeleteKpiMeasure: {
    encode(message: MsgDeleteKpiMeasure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpiMeasure;
    fromJSON(object: any): MsgDeleteKpiMeasure;
    toJSON(message: MsgDeleteKpiMeasure): unknown;
    fromPartial(object: DeepPartial<MsgDeleteKpiMeasure>): MsgDeleteKpiMeasure;
};
export declare const MsgDeleteKpiMeasureResponse: {
    encode(_: MsgDeleteKpiMeasureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpiMeasureResponse;
    fromJSON(_: any): MsgDeleteKpiMeasureResponse;
    toJSON(_: MsgDeleteKpiMeasureResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteKpiMeasureResponse>): MsgDeleteKpiMeasureResponse;
};
export declare const MsgCreateLemDataset: {
    encode(message: MsgCreateLemDataset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLemDataset;
    fromJSON(object: any): MsgCreateLemDataset;
    toJSON(message: MsgCreateLemDataset): unknown;
    fromPartial(object: DeepPartial<MsgCreateLemDataset>): MsgCreateLemDataset;
};
export declare const MsgCreateLemDatasetResponse: {
    encode(_: MsgCreateLemDatasetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateLemDatasetResponse;
    fromJSON(_: any): MsgCreateLemDatasetResponse;
    toJSON(_: MsgCreateLemDatasetResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateLemDatasetResponse>): MsgCreateLemDatasetResponse;
};
export declare const MsgUpdateLemDataset: {
    encode(message: MsgUpdateLemDataset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemDataset;
    fromJSON(object: any): MsgUpdateLemDataset;
    toJSON(message: MsgUpdateLemDataset): unknown;
    fromPartial(object: DeepPartial<MsgUpdateLemDataset>): MsgUpdateLemDataset;
};
export declare const MsgUpdateLemDatasetResponse: {
    encode(_: MsgUpdateLemDatasetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateLemDatasetResponse;
    fromJSON(_: any): MsgUpdateLemDatasetResponse;
    toJSON(_: MsgUpdateLemDatasetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateLemDatasetResponse>): MsgUpdateLemDatasetResponse;
};
export declare const MsgDeleteLemDataset: {
    encode(message: MsgDeleteLemDataset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemDataset;
    fromJSON(object: any): MsgDeleteLemDataset;
    toJSON(message: MsgDeleteLemDataset): unknown;
    fromPartial(object: DeepPartial<MsgDeleteLemDataset>): MsgDeleteLemDataset;
};
export declare const MsgDeleteLemDatasetResponse: {
    encode(_: MsgDeleteLemDatasetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteLemDatasetResponse;
    fromJSON(_: any): MsgDeleteLemDatasetResponse;
    toJSON(_: MsgDeleteLemDatasetResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteLemDatasetResponse>): MsgDeleteLemDatasetResponse;
};
export declare const MsgCreateDefaultLemPars: {
    encode(message: MsgCreateDefaultLemPars, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDefaultLemPars;
    fromJSON(object: any): MsgCreateDefaultLemPars;
    toJSON(message: MsgCreateDefaultLemPars): unknown;
    fromPartial(object: DeepPartial<MsgCreateDefaultLemPars>): MsgCreateDefaultLemPars;
};
export declare const MsgCreateDefaultLemParsResponse: {
    encode(_: MsgCreateDefaultLemParsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDefaultLemParsResponse;
    fromJSON(_: any): MsgCreateDefaultLemParsResponse;
    toJSON(_: MsgCreateDefaultLemParsResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateDefaultLemParsResponse>): MsgCreateDefaultLemParsResponse;
};
export declare const MsgUpdateDefaultLemPars: {
    encode(message: MsgUpdateDefaultLemPars, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDefaultLemPars;
    fromJSON(object: any): MsgUpdateDefaultLemPars;
    toJSON(message: MsgUpdateDefaultLemPars): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDefaultLemPars>): MsgUpdateDefaultLemPars;
};
export declare const MsgUpdateDefaultLemParsResponse: {
    encode(_: MsgUpdateDefaultLemParsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDefaultLemParsResponse;
    fromJSON(_: any): MsgUpdateDefaultLemParsResponse;
    toJSON(_: MsgUpdateDefaultLemParsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDefaultLemParsResponse>): MsgUpdateDefaultLemParsResponse;
};
export declare const MsgDeleteDefaultLemPars: {
    encode(message: MsgDeleteDefaultLemPars, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDefaultLemPars;
    fromJSON(object: any): MsgDeleteDefaultLemPars;
    toJSON(message: MsgDeleteDefaultLemPars): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDefaultLemPars>): MsgDeleteDefaultLemPars;
};
export declare const MsgDeleteDefaultLemParsResponse: {
    encode(_: MsgDeleteDefaultLemParsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDefaultLemParsResponse;
    fromJSON(_: any): MsgDeleteDefaultLemParsResponse;
    toJSON(_: MsgDeleteDefaultLemParsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDefaultLemParsResponse>): MsgDeleteDefaultLemParsResponse;
};
export declare const MsgCreateMarketOperator: {
    encode(message: MsgCreateMarketOperator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMarketOperator;
    fromJSON(object: any): MsgCreateMarketOperator;
    toJSON(message: MsgCreateMarketOperator): unknown;
    fromPartial(object: DeepPartial<MsgCreateMarketOperator>): MsgCreateMarketOperator;
};
export declare const MsgCreateMarketOperatorResponse: {
    encode(_: MsgCreateMarketOperatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMarketOperatorResponse;
    fromJSON(_: any): MsgCreateMarketOperatorResponse;
    toJSON(_: MsgCreateMarketOperatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateMarketOperatorResponse>): MsgCreateMarketOperatorResponse;
};
export declare const MsgUpdateMarketOperator: {
    encode(message: MsgUpdateMarketOperator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMarketOperator;
    fromJSON(object: any): MsgUpdateMarketOperator;
    toJSON(message: MsgUpdateMarketOperator): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMarketOperator>): MsgUpdateMarketOperator;
};
export declare const MsgUpdateMarketOperatorResponse: {
    encode(_: MsgUpdateMarketOperatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMarketOperatorResponse;
    fromJSON(_: any): MsgUpdateMarketOperatorResponse;
    toJSON(_: MsgUpdateMarketOperatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMarketOperatorResponse>): MsgUpdateMarketOperatorResponse;
};
export declare const MsgDeleteMarketOperator: {
    encode(message: MsgDeleteMarketOperator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMarketOperator;
    fromJSON(object: any): MsgDeleteMarketOperator;
    toJSON(message: MsgDeleteMarketOperator): unknown;
    fromPartial(object: DeepPartial<MsgDeleteMarketOperator>): MsgDeleteMarketOperator;
};
export declare const MsgDeleteMarketOperatorResponse: {
    encode(_: MsgDeleteMarketOperatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMarketOperatorResponse;
    fromJSON(_: any): MsgDeleteMarketOperatorResponse;
    toJSON(_: MsgDeleteMarketOperatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteMarketOperatorResponse>): MsgDeleteMarketOperatorResponse;
};
export declare const MsgCreateGridState: {
    encode(message: MsgCreateGridState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGridState;
    fromJSON(object: any): MsgCreateGridState;
    toJSON(message: MsgCreateGridState): unknown;
    fromPartial(object: DeepPartial<MsgCreateGridState>): MsgCreateGridState;
};
export declare const MsgCreateGridStateResponse: {
    encode(_: MsgCreateGridStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGridStateResponse;
    fromJSON(_: any): MsgCreateGridStateResponse;
    toJSON(_: MsgCreateGridStateResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateGridStateResponse>): MsgCreateGridStateResponse;
};
export declare const MsgUpdateGridState: {
    encode(message: MsgUpdateGridState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateGridState;
    fromJSON(object: any): MsgUpdateGridState;
    toJSON(message: MsgUpdateGridState): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGridState>): MsgUpdateGridState;
};
export declare const MsgUpdateGridStateResponse: {
    encode(_: MsgUpdateGridStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateGridStateResponse;
    fromJSON(_: any): MsgUpdateGridStateResponse;
    toJSON(_: MsgUpdateGridStateResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGridStateResponse>): MsgUpdateGridStateResponse;
};
export declare const MsgDeleteGridState: {
    encode(message: MsgDeleteGridState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteGridState;
    fromJSON(object: any): MsgDeleteGridState;
    toJSON(message: MsgDeleteGridState): unknown;
    fromPartial(object: DeepPartial<MsgDeleteGridState>): MsgDeleteGridState;
};
export declare const MsgDeleteGridStateResponse: {
    encode(_: MsgDeleteGridStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteGridStateResponse;
    fromJSON(_: any): MsgDeleteGridStateResponse;
    toJSON(_: MsgDeleteGridStateResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteGridStateResponse>): MsgDeleteGridStateResponse;
};
export declare const MsgCreateKpiFeatures: {
    encode(message: MsgCreateKpiFeatures, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateKpiFeatures;
    fromJSON(object: any): MsgCreateKpiFeatures;
    toJSON(message: MsgCreateKpiFeatures): unknown;
    fromPartial(object: DeepPartial<MsgCreateKpiFeatures>): MsgCreateKpiFeatures;
};
export declare const MsgCreateKpiFeaturesResponse: {
    encode(_: MsgCreateKpiFeaturesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateKpiFeaturesResponse;
    fromJSON(_: any): MsgCreateKpiFeaturesResponse;
    toJSON(_: MsgCreateKpiFeaturesResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateKpiFeaturesResponse>): MsgCreateKpiFeaturesResponse;
};
export declare const MsgUpdateKpiFeatures: {
    encode(message: MsgUpdateKpiFeatures, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpiFeatures;
    fromJSON(object: any): MsgUpdateKpiFeatures;
    toJSON(message: MsgUpdateKpiFeatures): unknown;
    fromPartial(object: DeepPartial<MsgUpdateKpiFeatures>): MsgUpdateKpiFeatures;
};
export declare const MsgUpdateKpiFeaturesResponse: {
    encode(_: MsgUpdateKpiFeaturesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateKpiFeaturesResponse;
    fromJSON(_: any): MsgUpdateKpiFeaturesResponse;
    toJSON(_: MsgUpdateKpiFeaturesResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateKpiFeaturesResponse>): MsgUpdateKpiFeaturesResponse;
};
export declare const MsgDeleteKpiFeatures: {
    encode(message: MsgDeleteKpiFeatures, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpiFeatures;
    fromJSON(object: any): MsgDeleteKpiFeatures;
    toJSON(message: MsgDeleteKpiFeatures): unknown;
    fromPartial(object: DeepPartial<MsgDeleteKpiFeatures>): MsgDeleteKpiFeatures;
};
export declare const MsgDeleteKpiFeaturesResponse: {
    encode(_: MsgDeleteKpiFeaturesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteKpiFeaturesResponse;
    fromJSON(_: any): MsgDeleteKpiFeaturesResponse;
    toJSON(_: MsgDeleteKpiFeaturesResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteKpiFeaturesResponse>): MsgDeleteKpiFeaturesResponse;
};
export declare const MsgCreateForecast: {
    encode(message: MsgCreateForecast, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateForecast;
    fromJSON(object: any): MsgCreateForecast;
    toJSON(message: MsgCreateForecast): unknown;
    fromPartial(object: DeepPartial<MsgCreateForecast>): MsgCreateForecast;
};
export declare const MsgCreateForecastResponse: {
    encode(_: MsgCreateForecastResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateForecastResponse;
    fromJSON(_: any): MsgCreateForecastResponse;
    toJSON(_: MsgCreateForecastResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateForecastResponse>): MsgCreateForecastResponse;
};
export declare const MsgUpdateForecast: {
    encode(message: MsgUpdateForecast, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateForecast;
    fromJSON(object: any): MsgUpdateForecast;
    toJSON(message: MsgUpdateForecast): unknown;
    fromPartial(object: DeepPartial<MsgUpdateForecast>): MsgUpdateForecast;
};
export declare const MsgUpdateForecastResponse: {
    encode(_: MsgUpdateForecastResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateForecastResponse;
    fromJSON(_: any): MsgUpdateForecastResponse;
    toJSON(_: MsgUpdateForecastResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateForecastResponse>): MsgUpdateForecastResponse;
};
export declare const MsgDeleteForecast: {
    encode(message: MsgDeleteForecast, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteForecast;
    fromJSON(object: any): MsgDeleteForecast;
    toJSON(message: MsgDeleteForecast): unknown;
    fromPartial(object: DeepPartial<MsgDeleteForecast>): MsgDeleteForecast;
};
export declare const MsgDeleteForecastResponse: {
    encode(_: MsgDeleteForecastResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteForecastResponse;
    fromJSON(_: any): MsgDeleteForecastResponse;
    toJSON(_: MsgDeleteForecastResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteForecastResponse>): MsgDeleteForecastResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse>;
    UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse>;
    DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse>;
    CreateAggregator(request: MsgCreateAggregator): Promise<MsgCreateAggregatorResponse>;
    UpdateAggregator(request: MsgUpdateAggregator): Promise<MsgUpdateAggregatorResponse>;
    DeleteAggregator(request: MsgDeleteAggregator): Promise<MsgDeleteAggregatorResponse>;
    CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse>;
    UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse>;
    DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse>;
    CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse>;
    UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse>;
    DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse>;
    CreateLemMeasure(request: MsgCreateLemMeasure): Promise<MsgCreateLemMeasureResponse>;
    UpdateLemMeasure(request: MsgUpdateLemMeasure): Promise<MsgUpdateLemMeasureResponse>;
    DeleteLemMeasure(request: MsgDeleteLemMeasure): Promise<MsgDeleteLemMeasureResponse>;
    CreateSla(request: MsgCreateSla): Promise<MsgCreateSlaResponse>;
    UpdateSla(request: MsgUpdateSla): Promise<MsgUpdateSlaResponse>;
    DeleteSla(request: MsgDeleteSla): Promise<MsgDeleteSlaResponse>;
    CreateKpi(request: MsgCreateKpi): Promise<MsgCreateKpiResponse>;
    UpdateKpi(request: MsgUpdateKpi): Promise<MsgUpdateKpiResponse>;
    DeleteKpi(request: MsgDeleteKpi): Promise<MsgDeleteKpiResponse>;
    CreateKpiMeasure(request: MsgCreateKpiMeasure): Promise<MsgCreateKpiMeasureResponse>;
    UpdateKpiMeasure(request: MsgUpdateKpiMeasure): Promise<MsgUpdateKpiMeasureResponse>;
    DeleteKpiMeasure(request: MsgDeleteKpiMeasure): Promise<MsgDeleteKpiMeasureResponse>;
    CreateLemDataset(request: MsgCreateLemDataset): Promise<MsgCreateLemDatasetResponse>;
    UpdateLemDataset(request: MsgUpdateLemDataset): Promise<MsgUpdateLemDatasetResponse>;
    DeleteLemDataset(request: MsgDeleteLemDataset): Promise<MsgDeleteLemDatasetResponse>;
    CreateDefaultLemPars(request: MsgCreateDefaultLemPars): Promise<MsgCreateDefaultLemParsResponse>;
    UpdateDefaultLemPars(request: MsgUpdateDefaultLemPars): Promise<MsgUpdateDefaultLemParsResponse>;
    DeleteDefaultLemPars(request: MsgDeleteDefaultLemPars): Promise<MsgDeleteDefaultLemParsResponse>;
    CreateMarketOperator(request: MsgCreateMarketOperator): Promise<MsgCreateMarketOperatorResponse>;
    UpdateMarketOperator(request: MsgUpdateMarketOperator): Promise<MsgUpdateMarketOperatorResponse>;
    DeleteMarketOperator(request: MsgDeleteMarketOperator): Promise<MsgDeleteMarketOperatorResponse>;
    CreateGridState(request: MsgCreateGridState): Promise<MsgCreateGridStateResponse>;
    UpdateGridState(request: MsgUpdateGridState): Promise<MsgUpdateGridStateResponse>;
    DeleteGridState(request: MsgDeleteGridState): Promise<MsgDeleteGridStateResponse>;
    CreateKpiFeatures(request: MsgCreateKpiFeatures): Promise<MsgCreateKpiFeaturesResponse>;
    UpdateKpiFeatures(request: MsgUpdateKpiFeatures): Promise<MsgUpdateKpiFeaturesResponse>;
    DeleteKpiFeatures(request: MsgDeleteKpiFeatures): Promise<MsgDeleteKpiFeaturesResponse>;
    CreateForecast(request: MsgCreateForecast): Promise<MsgCreateForecastResponse>;
    UpdateForecast(request: MsgUpdateForecast): Promise<MsgUpdateForecastResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteForecast(request: MsgDeleteForecast): Promise<MsgDeleteForecastResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDso(request: MsgCreateDso): Promise<MsgCreateDsoResponse>;
    UpdateDso(request: MsgUpdateDso): Promise<MsgUpdateDsoResponse>;
    DeleteDso(request: MsgDeleteDso): Promise<MsgDeleteDsoResponse>;
    CreateAggregator(request: MsgCreateAggregator): Promise<MsgCreateAggregatorResponse>;
    UpdateAggregator(request: MsgUpdateAggregator): Promise<MsgUpdateAggregatorResponse>;
    DeleteAggregator(request: MsgDeleteAggregator): Promise<MsgDeleteAggregatorResponse>;
    CreatePlayer(request: MsgCreatePlayer): Promise<MsgCreatePlayerResponse>;
    UpdatePlayer(request: MsgUpdatePlayer): Promise<MsgUpdatePlayerResponse>;
    DeletePlayer(request: MsgDeletePlayer): Promise<MsgDeletePlayerResponse>;
    CreateLem(request: MsgCreateLem): Promise<MsgCreateLemResponse>;
    UpdateLem(request: MsgUpdateLem): Promise<MsgUpdateLemResponse>;
    DeleteLem(request: MsgDeleteLem): Promise<MsgDeleteLemResponse>;
    CreateLemMeasure(request: MsgCreateLemMeasure): Promise<MsgCreateLemMeasureResponse>;
    UpdateLemMeasure(request: MsgUpdateLemMeasure): Promise<MsgUpdateLemMeasureResponse>;
    DeleteLemMeasure(request: MsgDeleteLemMeasure): Promise<MsgDeleteLemMeasureResponse>;
    CreateSla(request: MsgCreateSla): Promise<MsgCreateSlaResponse>;
    UpdateSla(request: MsgUpdateSla): Promise<MsgUpdateSlaResponse>;
    DeleteSla(request: MsgDeleteSla): Promise<MsgDeleteSlaResponse>;
    CreateKpi(request: MsgCreateKpi): Promise<MsgCreateKpiResponse>;
    UpdateKpi(request: MsgUpdateKpi): Promise<MsgUpdateKpiResponse>;
    DeleteKpi(request: MsgDeleteKpi): Promise<MsgDeleteKpiResponse>;
    CreateKpiMeasure(request: MsgCreateKpiMeasure): Promise<MsgCreateKpiMeasureResponse>;
    UpdateKpiMeasure(request: MsgUpdateKpiMeasure): Promise<MsgUpdateKpiMeasureResponse>;
    DeleteKpiMeasure(request: MsgDeleteKpiMeasure): Promise<MsgDeleteKpiMeasureResponse>;
    CreateLemDataset(request: MsgCreateLemDataset): Promise<MsgCreateLemDatasetResponse>;
    UpdateLemDataset(request: MsgUpdateLemDataset): Promise<MsgUpdateLemDatasetResponse>;
    DeleteLemDataset(request: MsgDeleteLemDataset): Promise<MsgDeleteLemDatasetResponse>;
    CreateDefaultLemPars(request: MsgCreateDefaultLemPars): Promise<MsgCreateDefaultLemParsResponse>;
    UpdateDefaultLemPars(request: MsgUpdateDefaultLemPars): Promise<MsgUpdateDefaultLemParsResponse>;
    DeleteDefaultLemPars(request: MsgDeleteDefaultLemPars): Promise<MsgDeleteDefaultLemParsResponse>;
    CreateMarketOperator(request: MsgCreateMarketOperator): Promise<MsgCreateMarketOperatorResponse>;
    UpdateMarketOperator(request: MsgUpdateMarketOperator): Promise<MsgUpdateMarketOperatorResponse>;
    DeleteMarketOperator(request: MsgDeleteMarketOperator): Promise<MsgDeleteMarketOperatorResponse>;
    CreateGridState(request: MsgCreateGridState): Promise<MsgCreateGridStateResponse>;
    UpdateGridState(request: MsgUpdateGridState): Promise<MsgUpdateGridStateResponse>;
    DeleteGridState(request: MsgDeleteGridState): Promise<MsgDeleteGridStateResponse>;
    CreateKpiFeatures(request: MsgCreateKpiFeatures): Promise<MsgCreateKpiFeaturesResponse>;
    UpdateKpiFeatures(request: MsgUpdateKpiFeatures): Promise<MsgUpdateKpiFeaturesResponse>;
    DeleteKpiFeatures(request: MsgDeleteKpiFeatures): Promise<MsgDeleteKpiFeaturesResponse>;
    CreateForecast(request: MsgCreateForecast): Promise<MsgCreateForecastResponse>;
    UpdateForecast(request: MsgUpdateForecast): Promise<MsgUpdateForecastResponse>;
    DeleteForecast(request: MsgDeleteForecast): Promise<MsgDeleteForecastResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
