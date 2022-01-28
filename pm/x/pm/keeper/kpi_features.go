package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// SetKpiFeatures set a specific kpiFeatures in the store from its index
func (k Keeper) SetKpiFeatures(ctx sdk.Context, kpiFeatures types.KpiFeatures) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiFeaturesKeyPrefix))
	b := k.cdc.MustMarshal(&kpiFeatures)
	store.Set(types.KpiFeaturesKey(
		kpiFeatures.Index,
	), b)
}

// GetKpiFeatures returns a kpiFeatures from its index
func (k Keeper) GetKpiFeatures(
	ctx sdk.Context,
	index string,

) (val types.KpiFeatures, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiFeaturesKeyPrefix))

	b := store.Get(types.KpiFeaturesKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveKpiFeatures removes a kpiFeatures from the store
func (k Keeper) RemoveKpiFeatures(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiFeaturesKeyPrefix))
	store.Delete(types.KpiFeaturesKey(
		index,
	))
}

// GetAllKpiFeatures returns all kpiFeatures
func (k Keeper) GetAllKpiFeatures(ctx sdk.Context) (list []types.KpiFeatures) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.KpiFeaturesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.KpiFeatures
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
