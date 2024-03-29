package pm

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.Dso != nil {
		k.SetDso(ctx, *genState.Dso)
	}
	// Set if defined
	if genState.Aggregator != nil {
		k.SetAggregator(ctx, *genState.Aggregator)
	}
	// Set all the player
	for _, elem := range genState.PlayerList {
		k.SetPlayer(ctx, elem)
	}
	// Set all the lem
	for _, elem := range genState.LemList {
		k.SetLem(ctx, elem)
	}
	// Set all the lemMeasure
	for _, elem := range genState.LemMeasureList {
		k.SetLemMeasure(ctx, elem)
	}
	// Set all the sla
	for _, elem := range genState.SlaList {
		k.SetSla(ctx, elem)
	}
	// Set all the kpi
	for _, elem := range genState.KpiList {
		k.SetKpi(ctx, elem)
	}
	// Set all the kpiMeasure
	for _, elem := range genState.KpiMeasureList {
		k.SetKpiMeasure(ctx, elem)
	}
	// Set all the lemDataset
	for _, elem := range genState.LemDatasetList {
		k.SetLemDataset(ctx, elem)
	}
	// Set all the defaultLemPars
	for _, elem := range genState.DefaultLemParsList {
		k.SetDefaultLemPars(ctx, elem)
	}
	// Set if defined
	if genState.MarketOperator != nil {
		k.SetMarketOperator(ctx, *genState.MarketOperator)
	}
	// Set all the gridState
	for _, elem := range genState.GridStateList {
		k.SetGridState(ctx, elem)
	}
	// Set all the kpiFeatures
	for _, elem := range genState.KpiFeaturesList {
		k.SetKpiFeatures(ctx, elem)
	}
	// Set all the forecast
	for _, elem := range genState.ForecastList {
		k.SetForecast(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// Get all dso
	dso, found := k.GetDso(ctx)
	if found {
		genesis.Dso = &dso
	}
	// Get all aggregator
	aggregator, found := k.GetAggregator(ctx)
	if found {
		genesis.Aggregator = &aggregator
	}
	genesis.PlayerList = k.GetAllPlayer(ctx)
	genesis.LemList = k.GetAllLem(ctx)
	genesis.LemMeasureList = k.GetAllLemMeasure(ctx)
	genesis.SlaList = k.GetAllSla(ctx)
	genesis.KpiList = k.GetAllKpi(ctx)
	genesis.KpiMeasureList = k.GetAllKpiMeasure(ctx)
	genesis.LemDatasetList = k.GetAllLemDataset(ctx)
	genesis.DefaultLemParsList = k.GetAllDefaultLemPars(ctx)
	// Get all marketOperator
	marketOperator, found := k.GetMarketOperator(ctx)
	if found {
		genesis.MarketOperator = &marketOperator
	}
	genesis.GridStateList = k.GetAllGridState(ctx)
	genesis.KpiFeaturesList = k.GetAllKpiFeatures(ctx)
	genesis.ForecastList = k.GetAllForecast(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
