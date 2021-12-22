package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func createTestMarketOperator(keeper *keeper.Keeper, ctx sdk.Context) types.MarketOperator {
	item := types.MarketOperator{}
	keeper.SetMarketOperator(ctx, item)
	return item
}

func TestMarketOperatorGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	item := createTestMarketOperator(keeper, ctx)
	rst, found := keeper.GetMarketOperator(ctx)
	require.True(t, found)
	require.Equal(t, item, rst)
}
func TestMarketOperatorRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	createTestMarketOperator(keeper, ctx)
	keeper.RemoveMarketOperator(ctx)
	_, found := keeper.GetMarketOperator(ctx)
	require.False(t, found)
}
