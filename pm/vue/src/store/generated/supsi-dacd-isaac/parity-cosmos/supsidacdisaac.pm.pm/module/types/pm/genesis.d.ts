import { Dso } from "../pm/dso";
import { Aggregator } from "../pm/aggregator";
import { Player } from "../pm/player";
import { Lem } from "../pm/lem";
import { LemMeasure } from "../pm/lem_measure";
import { Sla } from "../pm/sla";
import { Kpi } from "../pm/kpi";
import { KpiMeasure } from "../pm/kpi_measure";
import { LemDataset } from "../pm/lem_dataset";
import { DefaultLemPars } from "../pm/default_lem_pars";
import { MarketOperator } from "../pm/market_operator";
import { GridState } from "../pm/grid_state";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "supsidacdisaac.pm.pm";
/** GenesisState defines the pm module's genesis state. */
export interface GenesisState {
    dso: Dso | undefined;
    aggregator: Aggregator | undefined;
    playerList: Player[];
    lemList: Lem[];
    lemMeasureList: LemMeasure[];
    slaList: Sla[];
    kpiList: Kpi[];
    kpiMeasureList: KpiMeasure[];
    lemDatasetList: LemDataset[];
    defaultLemParsList: DefaultLemPars[];
    marketOperator: MarketOperator | undefined;
    /** this line is used by starport scaffolding # genesis/proto/state */
    gridStateList: GridState[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
