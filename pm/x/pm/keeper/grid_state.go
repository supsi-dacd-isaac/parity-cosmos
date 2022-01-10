package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// SetGridState set a specific gridState in the store from its index
func (k Keeper) SetGridState(ctx sdk.Context, gridState types.GridState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GridStateKeyPrefix))
	b := k.cdc.MustMarshal(&gridState)
	store.Set(types.GridStateKey(
		gridState.Index,
	), b)
}

// GetGridState returns a gridState from its index
func (k Keeper) GetGridState(
	ctx sdk.Context,
	index string,

) (val types.GridState, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GridStateKeyPrefix))

	b := store.Get(types.GridStateKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGridState removes a gridState from the store
func (k Keeper) RemoveGridState(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GridStateKeyPrefix))
	store.Delete(types.GridStateKey(
		index,
	))
}

// GetAllGridState returns all gridState
func (k Keeper) GetAllGridState(ctx sdk.Context) (list []types.GridState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GridStateKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.GridState
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
