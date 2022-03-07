package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func (k msgServer) CreateForecast(goCtx context.Context, msg *types.MsgCreateForecast) (*types.MsgCreateForecastResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetForecast(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var forecast = types.Forecast{
		Creator: msg.Creator,
		Index:   msg.Index,
		Ts:      msg.Ts,
		Values:  msg.Values,
	}

	k.SetForecast(
		ctx,
		forecast,
	)
	return &types.MsgCreateForecastResponse{}, nil
}

func (k msgServer) UpdateForecast(goCtx context.Context, msg *types.MsgUpdateForecast) (*types.MsgUpdateForecastResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetForecast(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var forecast = types.Forecast{
		Creator: msg.Creator,
		Index:   msg.Index,
		Ts:      msg.Ts,
		Values:  msg.Values,
	}

	k.SetForecast(ctx, forecast)

	return &types.MsgUpdateForecastResponse{}, nil
}

func (k msgServer) DeleteForecast(goCtx context.Context, msg *types.MsgDeleteForecast) (*types.MsgDeleteForecastResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetForecast(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveForecast(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteForecastResponse{}, nil
}
