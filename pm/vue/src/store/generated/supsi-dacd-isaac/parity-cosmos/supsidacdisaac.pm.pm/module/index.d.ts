import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateLemMeasure } from "./types/pm/tx";
import { MsgCreateKpi } from "./types/pm/tx";
import { MsgDeleteKpi } from "./types/pm/tx";
import { MsgUpdatePlayer } from "./types/pm/tx";
import { MsgCreateAggregator } from "./types/pm/tx";
import { MsgCreateDso } from "./types/pm/tx";
import { MsgUpdateKpi } from "./types/pm/tx";
import { MsgUpdateSla } from "./types/pm/tx";
import { MsgCreateLem } from "./types/pm/tx";
import { MsgUpdateLemMeasure } from "./types/pm/tx";
import { MsgCreateKpiMeasure } from "./types/pm/tx";
import { MsgDeletePlayer } from "./types/pm/tx";
import { MsgDeleteLemMeasure } from "./types/pm/tx";
import { MsgDeleteDso } from "./types/pm/tx";
import { MsgUpdateDso } from "./types/pm/tx";
import { MsgDeleteKpiMeasure } from "./types/pm/tx";
import { MsgCreateSla } from "./types/pm/tx";
import { MsgDeleteLem } from "./types/pm/tx";
import { MsgDeleteAggregator } from "./types/pm/tx";
import { MsgUpdateKpiMeasure } from "./types/pm/tx";
import { MsgDeleteSla } from "./types/pm/tx";
import { MsgUpdateAggregator } from "./types/pm/tx";
import { MsgCreatePlayer } from "./types/pm/tx";
import { MsgUpdateLem } from "./types/pm/tx";
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
    msgCreateLemMeasure: (data: MsgCreateLemMeasure) => EncodeObject;
    msgCreateKpi: (data: MsgCreateKpi) => EncodeObject;
    msgDeleteKpi: (data: MsgDeleteKpi) => EncodeObject;
    msgUpdatePlayer: (data: MsgUpdatePlayer) => EncodeObject;
    msgCreateAggregator: (data: MsgCreateAggregator) => EncodeObject;
    msgCreateDso: (data: MsgCreateDso) => EncodeObject;
    msgUpdateKpi: (data: MsgUpdateKpi) => EncodeObject;
    msgUpdateSla: (data: MsgUpdateSla) => EncodeObject;
    msgCreateLem: (data: MsgCreateLem) => EncodeObject;
    msgUpdateLemMeasure: (data: MsgUpdateLemMeasure) => EncodeObject;
    msgCreateKpiMeasure: (data: MsgCreateKpiMeasure) => EncodeObject;
    msgDeletePlayer: (data: MsgDeletePlayer) => EncodeObject;
    msgDeleteLemMeasure: (data: MsgDeleteLemMeasure) => EncodeObject;
    msgDeleteDso: (data: MsgDeleteDso) => EncodeObject;
    msgUpdateDso: (data: MsgUpdateDso) => EncodeObject;
    msgDeleteKpiMeasure: (data: MsgDeleteKpiMeasure) => EncodeObject;
    msgCreateSla: (data: MsgCreateSla) => EncodeObject;
    msgDeleteLem: (data: MsgDeleteLem) => EncodeObject;
    msgDeleteAggregator: (data: MsgDeleteAggregator) => EncodeObject;
    msgUpdateKpiMeasure: (data: MsgUpdateKpiMeasure) => EncodeObject;
    msgDeleteSla: (data: MsgDeleteSla) => EncodeObject;
    msgUpdateAggregator: (data: MsgUpdateAggregator) => EncodeObject;
    msgCreatePlayer: (data: MsgCreatePlayer) => EncodeObject;
    msgUpdateLem: (data: MsgUpdateLem) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
