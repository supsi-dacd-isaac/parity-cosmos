import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteLem } from "./types/pm/tx";
import { MsgDeleteLemMeasure } from "./types/pm/tx";
import { MsgUpdateDso } from "./types/pm/tx";
import { MsgCreatePlayer } from "./types/pm/tx";
import { MsgCreateSla } from "./types/pm/tx";
import { MsgCreateKpiMeasure } from "./types/pm/tx";
import { MsgUpdateLem } from "./types/pm/tx";
import { MsgDeleteKpi } from "./types/pm/tx";
import { MsgUpdateAggregator } from "./types/pm/tx";
import { MsgUpdatePlayer } from "./types/pm/tx";
import { MsgCreateKpi } from "./types/pm/tx";
import { MsgUpdateKpi } from "./types/pm/tx";
import { MsgDeleteSla } from "./types/pm/tx";
import { MsgDeleteLemDataset } from "./types/pm/tx";
import { MsgCreateAggregator } from "./types/pm/tx";
import { MsgCreateLemMeasure } from "./types/pm/tx";
import { MsgUpdateKpiMeasure } from "./types/pm/tx";
import { MsgUpdateLemDataset } from "./types/pm/tx";
import { MsgCreateDso } from "./types/pm/tx";
import { MsgDeleteDso } from "./types/pm/tx";
import { MsgDeletePlayer } from "./types/pm/tx";
import { MsgUpdateLemMeasure } from "./types/pm/tx";
import { MsgCreateLemDataset } from "./types/pm/tx";
import { MsgUpdateSla } from "./types/pm/tx";
import { MsgDeleteKpiMeasure } from "./types/pm/tx";
import { MsgCreateLem } from "./types/pm/tx";
import { MsgDeleteAggregator } from "./types/pm/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteLem: (data: MsgDeleteLem) => EncodeObject;
    msgDeleteLemMeasure: (data: MsgDeleteLemMeasure) => EncodeObject;
    msgUpdateDso: (data: MsgUpdateDso) => EncodeObject;
    msgCreatePlayer: (data: MsgCreatePlayer) => EncodeObject;
    msgCreateSla: (data: MsgCreateSla) => EncodeObject;
    msgCreateKpiMeasure: (data: MsgCreateKpiMeasure) => EncodeObject;
    msgUpdateLem: (data: MsgUpdateLem) => EncodeObject;
    msgDeleteKpi: (data: MsgDeleteKpi) => EncodeObject;
    msgUpdateAggregator: (data: MsgUpdateAggregator) => EncodeObject;
    msgUpdatePlayer: (data: MsgUpdatePlayer) => EncodeObject;
    msgCreateKpi: (data: MsgCreateKpi) => EncodeObject;
    msgUpdateKpi: (data: MsgUpdateKpi) => EncodeObject;
    msgDeleteSla: (data: MsgDeleteSla) => EncodeObject;
    msgDeleteLemDataset: (data: MsgDeleteLemDataset) => EncodeObject;
    msgCreateAggregator: (data: MsgCreateAggregator) => EncodeObject;
    msgCreateLemMeasure: (data: MsgCreateLemMeasure) => EncodeObject;
    msgUpdateKpiMeasure: (data: MsgUpdateKpiMeasure) => EncodeObject;
    msgUpdateLemDataset: (data: MsgUpdateLemDataset) => EncodeObject;
    msgCreateDso: (data: MsgCreateDso) => EncodeObject;
    msgDeleteDso: (data: MsgDeleteDso) => EncodeObject;
    msgDeletePlayer: (data: MsgDeletePlayer) => EncodeObject;
    msgUpdateLemMeasure: (data: MsgUpdateLemMeasure) => EncodeObject;
    msgCreateLemDataset: (data: MsgCreateLemDataset) => EncodeObject;
    msgUpdateSla: (data: MsgUpdateSla) => EncodeObject;
    msgDeleteKpiMeasure: (data: MsgDeleteKpiMeasure) => EncodeObject;
    msgCreateLem: (data: MsgCreateLem) => EncodeObject;
    msgDeleteAggregator: (data: MsgDeleteAggregator) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
