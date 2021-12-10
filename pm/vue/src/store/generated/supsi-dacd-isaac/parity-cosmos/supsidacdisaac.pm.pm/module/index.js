// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/supsidacdisaac.pm.pm.MsgDeleteLem", MsgDeleteLem],
    ["/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", MsgDeleteLemMeasure],
    ["/supsidacdisaac.pm.pm.MsgUpdateDso", MsgUpdateDso],
    ["/supsidacdisaac.pm.pm.MsgCreatePlayer", MsgCreatePlayer],
    ["/supsidacdisaac.pm.pm.MsgCreateSla", MsgCreateSla],
    ["/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", MsgCreateKpiMeasure],
    ["/supsidacdisaac.pm.pm.MsgUpdateLem", MsgUpdateLem],
    ["/supsidacdisaac.pm.pm.MsgDeleteKpi", MsgDeleteKpi],
    ["/supsidacdisaac.pm.pm.MsgUpdateAggregator", MsgUpdateAggregator],
    ["/supsidacdisaac.pm.pm.MsgUpdatePlayer", MsgUpdatePlayer],
    ["/supsidacdisaac.pm.pm.MsgCreateKpi", MsgCreateKpi],
    ["/supsidacdisaac.pm.pm.MsgUpdateKpi", MsgUpdateKpi],
    ["/supsidacdisaac.pm.pm.MsgDeleteSla", MsgDeleteSla],
    ["/supsidacdisaac.pm.pm.MsgDeleteLemDataset", MsgDeleteLemDataset],
    ["/supsidacdisaac.pm.pm.MsgCreateAggregator", MsgCreateAggregator],
    ["/supsidacdisaac.pm.pm.MsgCreateLemMeasure", MsgCreateLemMeasure],
    ["/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", MsgUpdateKpiMeasure],
    ["/supsidacdisaac.pm.pm.MsgUpdateLemDataset", MsgUpdateLemDataset],
    ["/supsidacdisaac.pm.pm.MsgCreateDso", MsgCreateDso],
    ["/supsidacdisaac.pm.pm.MsgDeleteDso", MsgDeleteDso],
    ["/supsidacdisaac.pm.pm.MsgDeletePlayer", MsgDeletePlayer],
    ["/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", MsgUpdateLemMeasure],
    ["/supsidacdisaac.pm.pm.MsgCreateLemDataset", MsgCreateLemDataset],
    ["/supsidacdisaac.pm.pm.MsgUpdateSla", MsgUpdateSla],
    ["/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", MsgDeleteKpiMeasure],
    ["/supsidacdisaac.pm.pm.MsgCreateLem", MsgCreateLem],
    ["/supsidacdisaac.pm.pm.MsgDeleteAggregator", MsgDeleteAggregator],
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
        msgDeleteLem: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLem", value: data }),
        msgDeleteLemMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemMeasure", value: data }),
        msgUpdateDso: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateDso", value: data }),
        msgCreatePlayer: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreatePlayer", value: data }),
        msgCreateSla: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateSla", value: data }),
        msgCreateKpiMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpiMeasure", value: data }),
        msgUpdateLem: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLem", value: data }),
        msgDeleteKpi: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpi", value: data }),
        msgUpdateAggregator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateAggregator", value: data }),
        msgUpdatePlayer: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdatePlayer", value: data }),
        msgCreateKpi: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateKpi", value: data }),
        msgUpdateKpi: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpi", value: data }),
        msgDeleteSla: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteSla", value: data }),
        msgDeleteLemDataset: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteLemDataset", value: data }),
        msgCreateAggregator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateAggregator", value: data }),
        msgCreateLemMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemMeasure", value: data }),
        msgUpdateKpiMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateKpiMeasure", value: data }),
        msgUpdateLemDataset: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemDataset", value: data }),
        msgCreateDso: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateDso", value: data }),
        msgDeleteDso: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteDso", value: data }),
        msgDeletePlayer: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeletePlayer", value: data }),
        msgUpdateLemMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateLemMeasure", value: data }),
        msgCreateLemDataset: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLemDataset", value: data }),
        msgUpdateSla: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgUpdateSla", value: data }),
        msgDeleteKpiMeasure: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteKpiMeasure", value: data }),
        msgCreateLem: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgCreateLem", value: data }),
        msgDeleteAggregator: (data) => ({ typeUrl: "/supsidacdisaac.pm.pm.MsgDeleteAggregator", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
