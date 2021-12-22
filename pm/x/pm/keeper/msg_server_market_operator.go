package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func (k msgServer) CreateMarketOperator(goCtx context.Context, msg *types.MsgCreateMarketOperator) (*types.MsgCreateMarketOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetMarketOperator(ctx)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "already set")
	}

	var marketOperator = types.MarketOperator{
		Creator: msg.Creator,
		Idx:     msg.Idx,
		Address: msg.Address,
	}

	k.SetMarketOperator(
		ctx,
		marketOperator,
	)
	return &types.MsgCreateMarketOperatorResponse{}, nil
}

func (k msgServer) UpdateMarketOperator(goCtx context.Context, msg *types.MsgUpdateMarketOperator) (*types.MsgUpdateMarketOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMarketOperator(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var marketOperator = types.MarketOperator{
		Creator: msg.Creator,
		Idx:     msg.Idx,
		Address: msg.Address,
	}

	k.SetMarketOperator(ctx, marketOperator)

	return &types.MsgUpdateMarketOperatorResponse{}, nil
}

func (k msgServer) DeleteMarketOperator(goCtx context.Context, msg *types.MsgDeleteMarketOperator) (*types.MsgDeleteMarketOperatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetMarketOperator(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMarketOperator(ctx)

	return &types.MsgDeleteMarketOperatorResponse{}, nil
}
