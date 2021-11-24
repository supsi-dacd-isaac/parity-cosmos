package keeper

import (
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

var _ types.QueryServer = Keeper{}
