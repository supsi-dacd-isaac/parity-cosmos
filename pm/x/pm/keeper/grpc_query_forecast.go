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

func (k Keeper) ForecastAll(c context.Context, req *types.QueryAllForecastRequest) (*types.QueryAllForecastResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var forecasts []types.Forecast
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	forecastStore := prefix.NewStore(store, types.KeyPrefix(types.ForecastKeyPrefix))

	pageRes, err := query.Paginate(forecastStore, req.Pagination, func(key []byte, value []byte) error {
		var forecast types.Forecast
		if err := k.cdc.Unmarshal(value, &forecast); err != nil {
			return err
		}

		forecasts = append(forecasts, forecast)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllForecastResponse{Forecast: forecasts, Pagination: pageRes}, nil
}

func (k Keeper) Forecast(c context.Context, req *types.QueryGetForecastRequest) (*types.QueryGetForecastResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetForecast(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetForecastResponse{Forecast: val}, nil
}
