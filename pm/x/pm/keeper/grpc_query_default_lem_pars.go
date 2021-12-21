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

func (k Keeper) DefaultLemParsAll(c context.Context, req *types.QueryAllDefaultLemParsRequest) (*types.QueryAllDefaultLemParsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var defaultLemParss []types.DefaultLemPars
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	defaultLemParsStore := prefix.NewStore(store, types.KeyPrefix(types.DefaultLemParsKeyPrefix))

	pageRes, err := query.Paginate(defaultLemParsStore, req.Pagination, func(key []byte, value []byte) error {
		var defaultLemPars types.DefaultLemPars
		if err := k.cdc.Unmarshal(value, &defaultLemPars); err != nil {
			return err
		}

		defaultLemParss = append(defaultLemParss, defaultLemPars)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDefaultLemParsResponse{DefaultLemPars: defaultLemParss, Pagination: pageRes}, nil
}

func (k Keeper) DefaultLemPars(c context.Context, req *types.QueryGetDefaultLemParsRequest) (*types.QueryGetDefaultLemParsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetDefaultLemPars(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetDefaultLemParsResponse{DefaultLemPars: val}, nil
}
