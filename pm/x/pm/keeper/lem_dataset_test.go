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

func createNLemDataset(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.LemDataset {
	items := make([]types.LemDataset, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetLemDataset(ctx, items[i])
	}
	return items
}

func TestLemDatasetGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLemDataset(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLemDataset(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestLemDatasetRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLemDataset(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLemDataset(ctx,
			item.Index,
		)
		_, found := keeper.GetLemDataset(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestLemDatasetGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNLemDataset(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllLemDataset(ctx))
}
