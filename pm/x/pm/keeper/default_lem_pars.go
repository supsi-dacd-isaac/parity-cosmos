package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// SetDefaultLemPars set a specific defaultLemPars in the store from its index
func (k Keeper) SetDefaultLemPars(ctx sdk.Context, defaultLemPars types.DefaultLemPars) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefaultLemParsKeyPrefix))
	b := k.cdc.MustMarshal(&defaultLemPars)
	store.Set(types.DefaultLemParsKey(
		defaultLemPars.Index,
	), b)
}

// GetDefaultLemPars returns a defaultLemPars from its index
func (k Keeper) GetDefaultLemPars(
	ctx sdk.Context,
	index string,

) (val types.DefaultLemPars, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefaultLemParsKeyPrefix))

	b := store.Get(types.DefaultLemParsKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDefaultLemPars removes a defaultLemPars from the store
func (k Keeper) RemoveDefaultLemPars(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefaultLemParsKeyPrefix))
	store.Delete(types.DefaultLemParsKey(
		index,
	))
}

// GetAllDefaultLemPars returns all defaultLemPars
func (k Keeper) GetAllDefaultLemPars(ctx sdk.Context) (list []types.DefaultLemPars) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DefaultLemParsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DefaultLemPars
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
