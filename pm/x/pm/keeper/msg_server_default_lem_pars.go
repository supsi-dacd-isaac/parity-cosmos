package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func (k msgServer) CreateDefaultLemPars(goCtx context.Context, msg *types.MsgCreateDefaultLemPars) (*types.MsgCreateDefaultLemParsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetDefaultLemPars(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var defaultLemPars = types.DefaultLemPars{
		Creator: msg.Creator,
		Index:   msg.Index,
		PbBAU:   msg.PbBAU,
		PsBAU:   msg.PsBAU,
		PbP2P:   msg.PbP2P,
		PsP2P:   msg.PsP2P,
		Beta:    msg.Beta,
	}

	k.SetDefaultLemPars(
		ctx,
		defaultLemPars,
	)
	return &types.MsgCreateDefaultLemParsResponse{}, nil
}

func (k msgServer) UpdateDefaultLemPars(goCtx context.Context, msg *types.MsgUpdateDefaultLemPars) (*types.MsgUpdateDefaultLemParsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDefaultLemPars(
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

	var defaultLemPars = types.DefaultLemPars{
		Creator: msg.Creator,
		Index:   msg.Index,
		PbBAU:   msg.PbBAU,
		PsBAU:   msg.PsBAU,
		PbP2P:   msg.PbP2P,
		PsP2P:   msg.PsP2P,
		Beta:    msg.Beta,
	}

	k.SetDefaultLemPars(ctx, defaultLemPars)

	return &types.MsgUpdateDefaultLemParsResponse{}, nil
}

func (k msgServer) DeleteDefaultLemPars(goCtx context.Context, msg *types.MsgDeleteDefaultLemPars) (*types.MsgDeleteDefaultLemParsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDefaultLemPars(
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

	k.RemoveDefaultLemPars(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteDefaultLemParsResponse{}, nil
}
