package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func (k msgServer) CreateGridState(goCtx context.Context, msg *types.MsgCreateGridState) (*types.MsgCreateGridStateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetGridState(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var gridState = types.GridState{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Grid:      msg.Grid,
		Timestamp: msg.Timestamp,
		State:     msg.State,
	}

	k.SetGridState(
		ctx,
		gridState,
	)
	return &types.MsgCreateGridStateResponse{}, nil
}

func (k msgServer) UpdateGridState(goCtx context.Context, msg *types.MsgUpdateGridState) (*types.MsgUpdateGridStateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetGridState(
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

	var gridState = types.GridState{
		Creator:   msg.Creator,
		Index:     msg.Index,
		Grid:      msg.Grid,
		Timestamp: msg.Timestamp,
		State:     msg.State,
	}

	k.SetGridState(ctx, gridState)

	return &types.MsgUpdateGridStateResponse{}, nil
}

func (k msgServer) DeleteGridState(goCtx context.Context, msg *types.MsgDeleteGridState) (*types.MsgDeleteGridStateResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetGridState(
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

	k.RemoveGridState(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteGridStateResponse{}, nil
}
