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

func createNForecast(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Forecast {
	items := make([]types.Forecast, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetForecast(ctx, items[i])
	}
	return items
}

func TestForecastGet(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNForecast(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetForecast(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestForecastRemove(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNForecast(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveForecast(ctx,
			item.Index,
		)
		_, found := keeper.GetForecast(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestForecastGetAll(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	items := createNForecast(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllForecast(ctx))
}
