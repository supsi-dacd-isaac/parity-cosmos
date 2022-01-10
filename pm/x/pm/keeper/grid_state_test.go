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

func createNGridState(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.GridState {
	items := make([]types.GridState, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetGridState(ctx, items[i])
	}
	return items
}

func TestGridStateGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNGridState(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetGridState(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestGridStateRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNGridState(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveGridState(ctx,
			item.Index,
		)
		_, found := keeper.GetGridState(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestGridStateGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNGridState(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllGridState(ctx))
}
