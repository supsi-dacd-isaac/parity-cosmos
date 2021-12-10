package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// SetLemDataset set a specific lemDataset in the store from its index
func (k Keeper) SetLemDataset(ctx sdk.Context, lemDataset types.LemDataset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemDatasetKeyPrefix))
	b := k.cdc.MustMarshal(&lemDataset)
	store.Set(types.LemDatasetKey(
		lemDataset.Index,
	), b)
}

// GetLemDataset returns a lemDataset from its index
func (k Keeper) GetLemDataset(
	ctx sdk.Context,
	index string,

) (val types.LemDataset, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemDatasetKeyPrefix))

	b := store.Get(types.LemDatasetKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLemDataset removes a lemDataset from the store
func (k Keeper) RemoveLemDataset(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemDatasetKeyPrefix))
	store.Delete(types.LemDatasetKey(
		index,
	))
}

// GetAllLemDataset returns all lemDataset
func (k Keeper) GetAllLemDataset(ctx sdk.Context) (list []types.LemDataset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LemDatasetKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.LemDataset
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
