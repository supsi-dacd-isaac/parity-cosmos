package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// SetMarketOperator set marketOperator in the store
func (k Keeper) SetMarketOperator(ctx sdk.Context, marketOperator types.MarketOperator) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketOperatorKey))
	b := k.cdc.MustMarshal(&marketOperator)
	store.Set([]byte{0}, b)
}

// GetMarketOperator returns marketOperator
func (k Keeper) GetMarketOperator(ctx sdk.Context) (val types.MarketOperator, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketOperatorKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMarketOperator removes marketOperator from the store
func (k Keeper) RemoveMarketOperator(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketOperatorKey))
	store.Delete([]byte{0})
}
