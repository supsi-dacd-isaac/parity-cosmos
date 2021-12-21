import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSla } from "./types/pm/tx";
import { MsgCreateDso } from "./types/pm/tx";
import { MsgDeleteAggregator } from "./types/pm/tx";
import { MsgCreateLem } from "./types/pm/tx";
import { MsgDeleteKpiMeasure } from "./types/pm/tx";
import { MsgUpdateDso } from "./types/pm/tx";
import { MsgCreateDefaultLemPars } from "./types/pm/tx";
import { MsgCreateKpi } from "./types/pm/tx";
import { MsgUpdateKpiMeasure } from "./types/pm/tx";
import { MsgDeleteLem } from "./types/pm/tx";
import { MsgDeleteDso } from "./types/pm/tx";
import { MsgUpdateLemDataset } from "./types/pm/tx";
import { MsgCreateKpiMeasure } from "./types/pm/tx";
import { MsgCreateLemMeasure } from "./types/pm/tx";
import { MsgUpdateAggregator } from "./types/pm/tx";
import { MsgDeleteSla } from "./types/pm/tx";
import { MsgDeleteDefaultLemPars } from "./types/pm/tx";
import { MsgCreatePlayer } from "./types/pm/tx";
import { MsgUpdatePlayer } from "./types/pm/tx";
import { MsgDeletePlayer } from "./types/pm/tx";
import { MsgDeleteLemMeasure } from "./types/pm/tx";
import { MsgCreateLemDataset } from "./types/pm/tx";
import { MsgUpdateKpi } from "./types/pm/tx";
import { MsgCreateAggregator } from "./types/pm/tx";
import { MsgUpdateSla } from "./types/pm/tx";
import { MsgUpdateDefaultLemPars } from "./types/pm/tx";
import { MsgDeleteKpi } from "./types/pm/tx";
import { MsgDeleteLemDataset } from "./types/pm/tx";
import { MsgUpdateLem } from "./types/pm/tx";
import { MsgUpdateLemMeasure } from "./types/pm/tx";
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
    msgCreateSla: (data: MsgCreateSla) => EncodeObject;
    msgCreateDso: (data: MsgCreateDso) => EncodeObject;
    msgDeleteAggregator: (data: MsgDeleteAggregator) => EncodeObject;
    msgCreateLem: (data: MsgCreateLem) => EncodeObject;
    msgDeleteKpiMeasure: (data: MsgDeleteKpiMeasure) => EncodeObject;
    msgUpdateDso: (data: MsgUpdateDso) => EncodeObject;
    msgCreateDefaultLemPars: (data: MsgCreateDefaultLemPars) => EncodeObject;
    msgCreateKpi: (data: MsgCreateKpi) => EncodeObject;
    msgUpdateKpiMeasure: (data: MsgUpdateKpiMeasure) => EncodeObject;
    msgDeleteLem: (data: MsgDeleteLem) => EncodeObject;
    msgDeleteDso: (data: MsgDeleteDso) => EncodeObject;
    msgUpdateLemDataset: (data: MsgUpdateLemDataset) => EncodeObject;
    msgCreateKpiMeasure: (data: MsgCreateKpiMeasure) => EncodeObject;
    msgCreateLemMeasure: (data: MsgCreateLemMeasure) => EncodeObject;
    msgUpdateAggregator: (data: MsgUpdateAggregator) => EncodeObject;
    msgDeleteSla: (data: MsgDeleteSla) => EncodeObject;
    msgDeleteDefaultLemPars: (data: MsgDeleteDefaultLemPars) => EncodeObject;
    msgCreatePlayer: (data: MsgCreatePlayer) => EncodeObject;
    msgUpdatePlayer: (data: MsgUpdatePlayer) => EncodeObject;
    msgDeletePlayer: (data: MsgDeletePlayer) => EncodeObject;
    msgDeleteLemMeasure: (data: MsgDeleteLemMeasure) => EncodeObject;
    msgCreateLemDataset: (data: MsgCreateLemDataset) => EncodeObject;
    msgUpdateKpi: (data: MsgUpdateKpi) => EncodeObject;
    msgCreateAggregator: (data: MsgCreateAggregator) => EncodeObject;
    msgUpdateSla: (data: MsgUpdateSla) => EncodeObject;
    msgUpdateDefaultLemPars: (data: MsgUpdateDefaultLemPars) => EncodeObject;
    msgDeleteKpi: (data: MsgDeleteKpi) => EncodeObject;
    msgDeleteLemDataset: (data: MsgDeleteLemDataset) => EncodeObject;
    msgUpdateLem: (data: MsgUpdateLem) => EncodeObject;
    msgUpdateLemMeasure: (data: MsgUpdateLemMeasure) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
