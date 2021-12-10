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

func (k Keeper) LemDatasetAll(c context.Context, req *types.QueryAllLemDatasetRequest) (*types.QueryAllLemDatasetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var lemDatasets []types.LemDataset
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	lemDatasetStore := prefix.NewStore(store, types.KeyPrefix(types.LemDatasetKeyPrefix))

	pageRes, err := query.Paginate(lemDatasetStore, req.Pagination, func(key []byte, value []byte) error {
		var lemDataset types.LemDataset
		if err := k.cdc.Unmarshal(value, &lemDataset); err != nil {
			return err
		}

		lemDatasets = append(lemDatasets, lemDataset)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLemDatasetResponse{LemDataset: lemDatasets, Pagination: pageRes}, nil
}

func (k Keeper) LemDataset(c context.Context, req *types.QueryGetLemDatasetRequest) (*types.QueryGetLemDatasetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLemDataset(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetLemDatasetResponse{LemDataset: val}, nil
}
