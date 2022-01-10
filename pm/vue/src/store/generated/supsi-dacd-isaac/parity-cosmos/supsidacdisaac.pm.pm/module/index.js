// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteKpi } from "./types/pm/tx";
import { MsgCreateAggregator } from "./types/pm/tx";
import { MsgCreateMarketOperator } from "./types/pm/tx";
import { MsgCreateKpi } from "./types/pm/tx";
import { MsgDeleteGridState } from "./types/pm/tx";
import { MsgCreatePlayer } from "./types/pm/tx";
import { MsgCreateGridState } from "./types/pm/tx";
import { MsgUpdateKpi } from "./types/pm/tx";
import { MsgUpdateDso } from "./types/pm/tx";
import { MsgDeleteAggregator } from "./types/pm/tx";
import { MsgUpdateLemMeasure } from "./types/pm/tx";
import { MsgDeleteLem } from "./types/pm/tx";
import { MsgUpdateMarketOperator } from "./types/pm/tx";
import { MsgUpdateSla } from "./types/pm/tx";
import { MsgCreateKpiMeasure } from "./types/pm/tx";
import { MsgUpdatePlayer } from "./types/pm/tx";
import { MsgUpdateAggregator } from "./types/pm/tx";
import { MsgCreateDefaultLemPars } from "./types/pm/tx";
import { MsgDeleteLemDataset } from "./types/pm/tx";
import { MsgDeleteSla } from "./types/pm/tx";
import { MsgDeleteDefaultLemPars } from "./types/pm/tx";
import { MsgCreateLem } from "./types/pm/tx";
import { MsgCreateSla } from "./types/pm/tx";
import { MsgDeleteKpiMeasure } from "./types/pm/tx";
import { MsgUpdateDefaultLemPars } from "./types/pm/tx";
import { MsgUpdateGridState } from "./types/pm/tx";
import { MsgUpdateLemDataset } from "./types/pm/tx";
import { MsgUpdateKpiMeasure } from "./types/pm/tx";
import { MsgCreateLemDataset } from "./types/pm/tx";
import { MsgUpdateLem } from "./types/pm/tx";
import { MsgCreateLemMeasure } from "./types/pm/tx";
import { MsgCreateDso } from "./types/pm/tx";
import { MsgDeletePlayer } from "./types/pm/tx";
import { MsgDeleteLemMeasure } from "./types/pm/tx";
import { MsgDeleteMarketOperator } from "./types/pm/tx";
import { MsgDeleteDso } from "./types/pm/tx";
const types = [
    ["/supsidacdisaac.pm.pm.MsgDeleteKpi", MsgDeleteKpi],
    ["/supsidacdisaac.pm.pm.MsgCreateAggregator", MsgCreateAggregator],
    ["/supsidacdisaac.pm.pm.MsgCreateMarketOperator", MsgCreateMarketOperator],
    ["/supsidacdisaac.pm.pm.MsgCreateKpi", MsgCreateKpi],
    ["/supsidacdisaac.pm.pm.MsgDeleteGridState", MsgDeleteGridState],
    ["/supsidacdisaac.pm.pm.MsgCreatePlayer", MsgCreatePlayer],
    ["/supsidacdisaac.pm.pm.MsgCreateGridState", MsgCreateGridState],
    ["/supsidacdisaac.pm.pm.MsgUpdateKpi", MsgUpdateKpi],
    ["/supsidacdisaac.pm.pm.MsgUpdateDso", MsgUpdateDso],
    ["/supsidacdisaac.pm.pm.MsgDeleteAggregator", MsgDeleteAggregator],
    ["/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", MsgUpdateLemMeasure],
    ["/supsidacdisaac.pm.pm.MsgDeleteLem", MsgDeleteLem],
    ["/supsidacdisaac.pm.pm.MsgUpdateMarketOperator", MsgUpdateMarketOperator],
    ["/supsidacdisaac.pm.pm.MsgUpdateSla", MsgUpdateSla],
    ["/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", MsgCreateKpiMeasure],
    ["/supsidacdisaac.pm.pm.MsgUpdatePlayer", MsgUpdatePlayer],
    ["/supsidacdisaac.pm.pm.MsgUpdateAggregator", MsgUpdateAggregator],
    ["/supsidacdisaac.pm.pm.MsgCreateDefaultLemPars", MsgCreateDefaultLemPars],
    ["/supsidacdisaac.pm.pm.MsgDeleteLemDataset", MsgDeleteLemDataset],
    ["/supsidacdisaac.pm.pm.MsgDeleteSla", MsgDeleteSla],
    ["/supsidacdisaac.pm.pm.MsgDeleteDefaultLemPars", MsgDeleteDefaultLemPars],
    ["/supsidacdisaac.pm.pm.MsgCreateLem", MsgCreateLem],
    ["/supsidacdisaac.pm.pm.MsgCreateSla", MsgCreateSla],
    ["/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", MsgDeleteKpiMeasure],
    ["/supsidacdisaac.pm.pm.MsgUpdateDefaultLemPars", MsgUpdateDefaultLemPars],
    ["/supsidacdisaac.pm.pm.MsgUpdateGridState", MsgUpdateGridState],
    ["/supsidacdisaac.pm.pm.MsgUpdateLemDataset", MsgUpdateLemDataset],
    ["/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", MsgUpdateKpiMeasure],
    ["/supsidacdisaac.pm.pm.MsgCreateLemDataset", MsgCreateLemDataset],
    ["/supsidacdisaac.pm.pm.MsgUpdateLem", MsgUpdateLem],
    ["/supsidacdisaac.pm.pm.MsgCreateLemMeasure", MsgCreateLemMeasure],
    ["/supsidacdisaac.pm.pm.MsgCreateDso", MsgCreateDso],
    ["/supsidacdisaac.pm.pm.MsgDeletePlayer", MsgDeletePlayer],
    ["/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", MsgDeleteLemMeasure],
    ["/supsidacdisaac.pm.pm.MsgDeleteMarketOperator", MsgDeleteMarketOperator],
    ["/supsidacdisaac.pm.pm.MsgDeleteDso", MsgDeleteDso],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteKpi: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpi", value: data }),
        msgCreateAggregator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateAggregator", value: data }),
        msgCreateMarketOperator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateMarketOperator", value: data }),
        msgCreateKpi: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpi", value: data }),
        msgDeleteGridState: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteGridState", value: data }),
        msgCreatePlayer: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreatePlayer", value: data }),
        msgCreateGridState: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateGridState", value: data }),
        msgUpdateKpi: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpi", value: data }),
        msgUpdateDso: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateDso", value: data }),
        msgDeleteAggregator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteAggregator", value: data }),
        msgUpdateLemMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", value: data }),
        msgDeleteLem: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLem", value: data }),
        msgUpdateMarketOperator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateMarketOperator", value: data }),
        msgUpdateSla: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateSla", value: data }),
        msgCreateKpiMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", value: data }),
        msgUpdatePlayer: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdatePlayer", value: data }),
        msgUpdateAggregator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateAggregator", value: data }),
        msgCreateDefaultLemPars: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateDefaultLemPars", value: data }),
        msgDeleteLemDataset: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemDataset", value: data }),
        msgDeleteSla: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteSla", value: data }),
        msgDeleteDefaultLemPars: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteDefaultLemPars", value: data }),
        msgCreateLem: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLem", value: data }),
        msgCreateSla: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateSla", value: data }),
        msgDeleteKpiMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", value: data }),
        msgUpdateDefaultLemPars: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateDefaultLemPars", value: data }),
        msgUpdateGridState: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateGridState", value: data }),
        msgUpdateLemDataset: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemDataset", value: data }),
        msgUpdateKpiMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", value: data }),
        msgCreateLemDataset: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemDataset", value: data }),
        msgUpdateLem: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLem", value: data }),
        msgCreateLemMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemMeasure", value: data }),
        msgCreateDso: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateDso", value: data }),
        msgDeletePlayer: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeletePlayer", value: data }),
        msgDeleteLemMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", value: data }),
        msgDeleteMarketOperator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteMarketOperator", value: data }),
        msgDeleteDso: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteDso", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
