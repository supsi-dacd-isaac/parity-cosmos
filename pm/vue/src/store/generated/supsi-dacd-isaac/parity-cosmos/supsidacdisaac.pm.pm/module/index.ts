// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateGridState } from "./types/pm/tx";
import { MsgCreateDefaultLemPars } from "./types/pm/tx";
import { MsgUpdateSla } from "./types/pm/tx";
import { MsgUpdateForecast } from "./types/pm/tx";
import { MsgCreatePlayer } from "./types/pm/tx";
import { MsgUpdateLemMeasure } from "./types/pm/tx";
import { MsgCreateKpiFeatures } from "./types/pm/tx";
import { MsgDeleteAggregator } from "./types/pm/tx";
import { MsgDeleteMarketOperator } from "./types/pm/tx";
import { MsgDeleteLemMeasure } from "./types/pm/tx";
import { MsgDeletePlayer } from "./types/pm/tx";
import { MsgUpdateMarketOperator } from "./types/pm/tx";
import { MsgDeleteSla } from "./types/pm/tx";
import { MsgCreateLemMeasure } from "./types/pm/tx";
import { MsgCreateDso } from "./types/pm/tx";
import { MsgCreateMarketOperator } from "./types/pm/tx";
import { MsgDeleteDefaultLemPars } from "./types/pm/tx";
import { MsgCreateLem } from "./types/pm/tx";
import { MsgUpdateGridState } from "./types/pm/tx";
import { MsgCreateForecast } from "./types/pm/tx";
import { MsgDeleteLem } from "./types/pm/tx";
import { MsgCreateSla } from "./types/pm/tx";
import { MsgCreateKpi } from "./types/pm/tx";
import { MsgCreateKpiMeasure } from "./types/pm/tx";
import { MsgUpdateDefaultLemPars } from "./types/pm/tx";
import { MsgUpdateDso } from "./types/pm/tx";
import { MsgDeleteDso } from "./types/pm/tx";
import { MsgUpdateKpiFeatures } from "./types/pm/tx";
import { MsgUpdateKpiMeasure } from "./types/pm/tx";
import { MsgDeleteGridState } from "./types/pm/tx";
import { MsgUpdateKpi } from "./types/pm/tx";
import { MsgCreateLemDataset } from "./types/pm/tx";
import { MsgCreateAggregator } from "./types/pm/tx";
import { MsgUpdateAggregator } from "./types/pm/tx";
import { MsgDeleteLemDataset } from "./types/pm/tx";
import { MsgUpdatePlayer } from "./types/pm/tx";
import { MsgDeleteKpi } from "./types/pm/tx";
import { MsgDeleteKpiFeatures } from "./types/pm/tx";
import { MsgUpdateLem } from "./types/pm/tx";
import { MsgDeleteForecast } from "./types/pm/tx";
import { MsgDeleteKpiMeasure } from "./types/pm/tx";
import { MsgUpdateLemDataset } from "./types/pm/tx";


const types = [
  ["/supsidacdisaac.pm.pm.MsgCreateGridState", MsgCreateGridState],
  ["/supsidacdisaac.pm.pm.MsgCreateDefaultLemPars", MsgCreateDefaultLemPars],
  ["/supsidacdisaac.pm.pm.MsgUpdateSla", MsgUpdateSla],
  ["/supsidacdisaac.pm.pm.MsgUpdateForecast", MsgUpdateForecast],
  ["/supsidacdisaac.pm.pm.MsgCreatePlayer", MsgCreatePlayer],
  ["/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", MsgUpdateLemMeasure],
  ["/supsidacdisaac.pm.pm.MsgCreateKpiFeatures", MsgCreateKpiFeatures],
  ["/supsidacdisaac.pm.pm.MsgDeleteAggregator", MsgDeleteAggregator],
  ["/supsidacdisaac.pm.pm.MsgDeleteMarketOperator", MsgDeleteMarketOperator],
  ["/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", MsgDeleteLemMeasure],
  ["/supsidacdisaac.pm.pm.MsgDeletePlayer", MsgDeletePlayer],
  ["/supsidacdisaac.pm.pm.MsgUpdateMarketOperator", MsgUpdateMarketOperator],
  ["/supsidacdisaac.pm.pm.MsgDeleteSla", MsgDeleteSla],
  ["/supsidacdisaac.pm.pm.MsgCreateLemMeasure", MsgCreateLemMeasure],
  ["/supsidacdisaac.pm.pm.MsgCreateDso", MsgCreateDso],
  ["/supsidacdisaac.pm.pm.MsgCreateMarketOperator", MsgCreateMarketOperator],
  ["/supsidacdisaac.pm.pm.MsgDeleteDefaultLemPars", MsgDeleteDefaultLemPars],
  ["/supsidacdisaac.pm.pm.MsgCreateLem", MsgCreateLem],
  ["/supsidacdisaac.pm.pm.MsgUpdateGridState", MsgUpdateGridState],
  ["/supsidacdisaac.pm.pm.MsgCreateForecast", MsgCreateForecast],
  ["/supsidacdisaac.pm.pm.MsgDeleteLem", MsgDeleteLem],
  ["/supsidacdisaac.pm.pm.MsgCreateSla", MsgCreateSla],
  ["/supsidacdisaac.pm.pm.MsgCreateKpi", MsgCreateKpi],
  ["/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", MsgCreateKpiMeasure],
  ["/supsidacdisaac.pm.pm.MsgUpdateDefaultLemPars", MsgUpdateDefaultLemPars],
  ["/supsidacdisaac.pm.pm.MsgUpdateDso", MsgUpdateDso],
  ["/supsidacdisaac.pm.pm.MsgDeleteDso", MsgDeleteDso],
  ["/supsidacdisaac.pm.pm.MsgUpdateKpiFeatures", MsgUpdateKpiFeatures],
  ["/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", MsgUpdateKpiMeasure],
  ["/supsidacdisaac.pm.pm.MsgDeleteGridState", MsgDeleteGridState],
  ["/supsidacdisaac.pm.pm.MsgUpdateKpi", MsgUpdateKpi],
  ["/supsidacdisaac.pm.pm.MsgCreateLemDataset", MsgCreateLemDataset],
  ["/supsidacdisaac.pm.pm.MsgCreateAggregator", MsgCreateAggregator],
  ["/supsidacdisaac.pm.pm.MsgUpdateAggregator", MsgUpdateAggregator],
  ["/supsidacdisaac.pm.pm.MsgDeleteLemDataset", MsgDeleteLemDataset],
  ["/supsidacdisaac.pm.pm.MsgUpdatePlayer", MsgUpdatePlayer],
  ["/supsidacdisaac.pm.pm.MsgDeleteKpi", MsgDeleteKpi],
  ["/supsidacdisaac.pm.pm.MsgDeleteKpiFeatures", MsgDeleteKpiFeatures],
  ["/supsidacdisaac.pm.pm.MsgUpdateLem", MsgUpdateLem],
  ["/supsidacdisaac.pm.pm.MsgDeleteForecast", MsgDeleteForecast],
  ["/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", MsgDeleteKpiMeasure],
  ["/supsidacdisaac.pm.pm.MsgUpdateLemDataset", MsgUpdateLemDataset],
  
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
    msgCreateGridState: (data: MsgCreateGridState): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateGridState", value: data }),
    msgCreateDefaultLemPars: (data: MsgCreateDefaultLemPars): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateDefaultLemPars", value: data }),
    msgUpdateSla: (data: MsgUpdateSla): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateSla", value: data }),
    msgUpdateForecast: (data: MsgUpdateForecast): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateForecast", value: data }),
    msgCreatePlayer: (data: MsgCreatePlayer): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreatePlayer", value: data }),
    msgUpdateLemMeasure: (data: MsgUpdateLemMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", value: data }),
    msgCreateKpiFeatures: (data: MsgCreateKpiFeatures): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpiFeatures", value: data }),
    msgDeleteAggregator: (data: MsgDeleteAggregator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteAggregator", value: data }),
    msgDeleteMarketOperator: (data: MsgDeleteMarketOperator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteMarketOperator", value: data }),
    msgDeleteLemMeasure: (data: MsgDeleteLemMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", value: data }),
    msgDeletePlayer: (data: MsgDeletePlayer): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeletePlayer", value: data }),
    msgUpdateMarketOperator: (data: MsgUpdateMarketOperator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateMarketOperator", value: data }),
    msgDeleteSla: (data: MsgDeleteSla): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteSla", value: data }),
    msgCreateLemMeasure: (data: MsgCreateLemMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemMeasure", value: data }),
    msgCreateDso: (data: MsgCreateDso): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateDso", value: data }),
    msgCreateMarketOperator: (data: MsgCreateMarketOperator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateMarketOperator", value: data }),
    msgDeleteDefaultLemPars: (data: MsgDeleteDefaultLemPars): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteDefaultLemPars", value: data }),
    msgCreateLem: (data: MsgCreateLem): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLem", value: data }),
    msgUpdateGridState: (data: MsgUpdateGridState): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateGridState", value: data }),
    msgCreateForecast: (data: MsgCreateForecast): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateForecast", value: data }),
    msgDeleteLem: (data: MsgDeleteLem): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLem", value: data }),
    msgCreateSla: (data: MsgCreateSla): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateSla", value: data }),
    msgCreateKpi: (data: MsgCreateKpi): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpi", value: data }),
    msgCreateKpiMeasure: (data: MsgCreateKpiMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", value: data }),
    msgUpdateDefaultLemPars: (data: MsgUpdateDefaultLemPars): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateDefaultLemPars", value: data }),
    msgUpdateDso: (data: MsgUpdateDso): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateDso", value: data }),
    msgDeleteDso: (data: MsgDeleteDso): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteDso", value: data }),
    msgUpdateKpiFeatures: (data: MsgUpdateKpiFeatures): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpiFeatures", value: data }),
    msgUpdateKpiMeasure: (data: MsgUpdateKpiMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", value: data }),
    msgDeleteGridState: (data: MsgDeleteGridState): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteGridState", value: data }),
    msgUpdateKpi: (data: MsgUpdateKpi): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpi", value: data }),
    msgCreateLemDataset: (data: MsgCreateLemDataset): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemDataset", value: data }),
    msgCreateAggregator: (data: MsgCreateAggregator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateAggregator", value: data }),
    msgUpdateAggregator: (data: MsgUpdateAggregator): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateAggregator", value: data }),
    msgDeleteLemDataset: (data: MsgDeleteLemDataset): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemDataset", value: data }),
    msgUpdatePlayer: (data: MsgUpdatePlayer): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdatePlayer", value: data }),
    msgDeleteKpi: (data: MsgDeleteKpi): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpi", value: data }),
    msgDeleteKpiFeatures: (data: MsgDeleteKpiFeatures): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpiFeatures", value: data }),
    msgUpdateLem: (data: MsgUpdateLem): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLem", value: data }),
    msgDeleteForecast: (data: MsgDeleteForecast): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteForecast", value: data }),
    msgDeleteKpiMeasure: (data: MsgDeleteKpiMeasure): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", value: data }),
    msgUpdateLemDataset: (data: MsgUpdateLemDataset): EncodeObject => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemDataset", value: data }),
    
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
