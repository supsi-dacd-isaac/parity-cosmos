package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// SetForecast set a specific forecast in the store from its index
func (k Keeper) SetForecast(ctx sdk.Context, forecast types.Forecast) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForecastKeyPrefix))
	b := k.cdc.MustMarshal(&forecast)
	store.Set(types.ForecastKey(
		forecast.Index,
	), b)
}

// GetForecast returns a forecast from its index
func (k Keeper) GetForecast(
	ctx sdk.Context,
	index string,

) (val types.Forecast, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForecastKeyPrefix))

	b := store.Get(types.ForecastKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveForecast removes a forecast from the store
func (k Keeper) RemoveForecast(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForecastKeyPrefix))
	store.Delete(types.ForecastKey(
		index,
	))
}

// GetAllForecast returns all forecast
func (k Keeper) GetAllForecast(ctx sdk.Context) (list []types.Forecast) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ForecastKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Forecast
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
