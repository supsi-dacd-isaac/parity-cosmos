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

func (k Keeper) KpiFeaturesAll(c context.Context, req *types.QueryAllKpiFeaturesRequest) (*types.QueryAllKpiFeaturesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var kpiFeaturess []types.KpiFeatures
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	kpiFeaturesStore := prefix.NewStore(store, types.KeyPrefix(types.KpiFeaturesKeyPrefix))

	pageRes, err := query.Paginate(kpiFeaturesStore, req.Pagination, func(key []byte, value []byte) error {
		var kpiFeatures types.KpiFeatures
		if err := k.cdc.Unmarshal(value, &kpiFeatures); err != nil {
			return err
		}

		kpiFeaturess = append(kpiFeaturess, kpiFeatures)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllKpiFeaturesResponse{KpiFeatures: kpiFeaturess, Pagination: pageRes}, nil
}

func (k Keeper) KpiFeatures(c context.Context, req *types.QueryGetKpiFeaturesRequest) (*types.QueryGetKpiFeaturesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetKpiFeatures(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetKpiFeaturesResponse{KpiFeatures: val}, nil
}
