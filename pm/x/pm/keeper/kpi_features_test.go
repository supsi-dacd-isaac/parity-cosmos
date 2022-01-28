package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNKpiFeatures(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.KpiFeatures {
	items := make([]types.KpiFeatures, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetKpiFeatures(ctx, items[i])
	}
	return items
}

func TestKpiFeaturesGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpiFeatures(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetKpiFeatures(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestKpiFeaturesRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpiFeatures(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveKpiFeatures(ctx,
			item.Index,
		)
		_, found := keeper.GetKpiFeatures(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestKpiFeaturesGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNKpiFeatures(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllKpiFeatures(ctx))
}
