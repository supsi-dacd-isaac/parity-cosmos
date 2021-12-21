// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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


const types = [
  ["/supsidacdisaac.pm.pm.MsgCreateSla", MsgCreateSla],
  ["/supsidacdisaac.pm.pm.MsgCreateDso", MsgCreateDso],
  ["/supsidacdisaac.pm.pm.MsgDeleteAggregator", MsgDeleteAggregator],
  ["/supsidacdisaac.pm.pm.MsgCreateLem", MsgCreateLem],
  ["/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", MsgDeleteKpiMeasure],
  ["/supsidacdisaac.pm.pm.MsgUpdateDso", MsgUpdateDso],
  ["/supsidacdisaac.pm.pm.MsgCreateDefaultLemPars", MsgCreateDefaultLemPars],
  ["/supsidacdisaac.pm.pm.MsgCreateKpi", MsgCreateKpi],
  ["/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", MsgUpdateKpiMeasure],
  ["/supsidacdisaac.pm.pm.MsgDeleteLem", MsgDeleteLem],
  ["/supsidacdisaac.pm.pm.MsgDeleteDso", MsgDeleteDso],
  ["/supsidacdisaac.pm.pm.MsgUpdateLemDataset", MsgUpdateLemDataset],
  ["/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", MsgCreateKpiMeasure],
  ["/supsidacdisaac.pm.pm.MsgCreateLemMeasure", MsgCreateLemMeasure],
  ["/supsidacdisaac.pm.pm.MsgUpdateAggregator", MsgUpdateAggregator],
  ["/supsidacdisaac.pm.pm.MsgDeleteSla", MsgDeleteSla],
  ["/supsidacdisaac.pm.pm.MsgDeleteDefaultLemPars", MsgDeleteDefaultLemPars],
  ["/supsidacdisaac.pm.pm.MsgCreatePlayer", MsgCreatePlayer],
  ["/supsidacdisaac.pm.pm.MsgUpdatePlayer", MsgUpdatePlayer],
  ["/supsidacdisaac.pm.pm.MsgDeletePlayer", MsgDeletePlayer],
  ["/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", MsgDeleteLemMeasure],
  ["/supsidacdisaac.pm.pm.MsgCreateLemDataset", MsgCreateLemDataset],
  ["/supsidacdisaac.pm.pm.MsgUpdateKpi", MsgUpdateKpi],
  ["/supsidacdisaac.pm.pm.MsgCreateAggregator", MsgCreateAggregator],
  ["/supsidacdisaac.pm.pm.MsgUpdateSla", MsgUpdateSla],
  ["/supsidacdisaac.pm.pm.MsgUpdateDefaultLemPars", MsgUpdateDefaultLemPars],
  ["/supsidacdisaac.pm.pm.MsgDeleteKpi", MsgDeleteKpi],
  ["/supsidacdisaac.pm.pm.MsgDeleteLemDataset", MsgDeleteLemDataset],
  ["/supsidacdisaac.pm.pm.MsgUpdateLem", MsgUpdateLem],
  ["/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", MsgUpdateLemMeasure],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateSla: (data: MsgCreateSla): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateSla", value: data }),
    msgCreateDso: (data: MsgCreateDso): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateDso", value: data }),
    msgDeleteAggregator: (data: MsgDeleteAggregator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteAggregator", value: data }),
    msgCreateLem: (data: MsgCreateLem): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLem", value: data }),
    msgDeleteKpiMeasure: (data: MsgDeleteKpiMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", value: data }),
    msgUpdateDso: (data: MsgUpdateDso): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateDso", value: data }),
    msgCreateDefaultLemPars: (data: MsgCreateDefaultLemPars): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateDefaultLemPars", value: data }),
    msgCreateKpi: (data: MsgCreateKpi): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpi", value: data }),
    msgUpdateKpiMeasure: (data: MsgUpdateKpiMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", value: data }),
    msgDeleteLem: (data: MsgDeleteLem): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLem", value: data }),
    msgDeleteDso: (data: MsgDeleteDso): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteDso", value: data }),
    msgUpdateLemDataset: (data: MsgUpdateLemDataset): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemDataset", value: data }),
    msgCreateKpiMeasure: (data: MsgCreateKpiMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", value: data }),
    msgCreateLemMeasure: (data: MsgCreateLemMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemMeasure", value: data }),
    msgUpdateAggregator: (data: MsgUpdateAggregator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateAggregator", value: data }),
    msgDeleteSla: (data: MsgDeleteSla): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteSla", value: data }),
    msgDeleteDefaultLemPars: (data: MsgDeleteDefaultLemPars): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteDefaultLemPars", value: data }),
    msgCreatePlayer: (data: MsgCreatePlayer): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreatePlayer", value: data }),
    msgUpdatePlayer: (data: MsgUpdatePlayer): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdatePlayer", value: data }),
    msgDeletePlayer: (data: MsgDeletePlayer): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeletePlayer", value: data }),
    msgDeleteLemMeasure: (data: MsgDeleteLemMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", value: data }),
    msgCreateLemDataset: (data: MsgCreateLemDataset): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemDataset", value: data }),
    msgUpdateKpi: (data: MsgUpdateKpi): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpi", value: data }),
    msgCreateAggregator: (data: MsgCreateAggregator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateAggregator", value: data }),
    msgUpdateSla: (data: MsgUpdateSla): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateSla", value: data }),
    msgUpdateDefaultLemPars: (data: MsgUpdateDefaultLemPars): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateDefaultLemPars", value: data }),
    msgDeleteKpi: (data: MsgDeleteKpi): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpi", value: data }),
    msgDeleteLemDataset: (data: MsgDeleteLemDataset): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemDataset", value: data }),
    msgUpdateLem: (data: MsgUpdateLem): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLem", value: data }),
    msgUpdateLemMeasure: (data: MsgUpdateLemMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
