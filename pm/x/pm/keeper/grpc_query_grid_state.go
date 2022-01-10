package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GridStateAll(c context.Context, req *types.QueryAllGridStateRequest) (*types.QueryAllGridStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var gridStates []types.GridState
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	gridStateStore := prefix.NewStore(store, types.KeyPrefix(types.GridStateKeyPrefix))

	pageRes, err := query.Paginate(gridStateStore, req.Pagination, func(key []byte, value []byte) error {
		var gridState types.GridState
		if err := k.cdc.Unmarshal(value, &gridState); err != nil {
			return err
		}

		gridStates = append(gridStates, gridState)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllGridStateResponse{GridState: gridStates, Pagination: pageRes}, nil
}

func (k Keeper) GridState(c context.Context, req *types.QueryGetGridStateRequest) (*types.QueryGetGridStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetGridState(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetGridStateResponse{GridState: val}, nil
}
