package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func (k msgServer) CreateLemDataset(goCtx context.Context, msg *types.MsgCreateLemDataset) (*types.MsgCreateLemDatasetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetLemDataset(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var lemDataset = types.LemDataset{
		Creator:       msg.Creator,
		Index:         msg.Index,
		Player:        msg.Player,
		Timestamp:     msg.Timestamp,
		PconsMeasure:  msg.PconsMeasure,
		PprodMeasure:  msg.PprodMeasure,
		PconsForecast: msg.PconsForecast,
		PprodForecast: msg.PprodForecast,
	}

	k.SetLemDataset(
		ctx,
		lemDataset,
	)
	return &types.MsgCreateLemDatasetResponse{}, nil
}

func (k msgServer) UpdateLemDataset(goCtx context.Context, msg *types.MsgUpdateLemDataset) (*types.MsgUpdateLemDatasetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLemDataset(
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

	var lemDataset = types.LemDataset{
		Creator:       msg.Creator,
		Index:         msg.Index,
		Player:        msg.Player,
		Timestamp:     msg.Timestamp,
		PconsMeasure:  msg.PconsMeasure,
		PprodMeasure:  msg.PprodMeasure,
		PconsForecast: msg.PconsForecast,
		PprodForecast: msg.PprodForecast,
	}

	k.SetLemDataset(ctx, lemDataset)

	return &types.MsgUpdateLemDatasetResponse{}, nil
}

func (k msgServer) DeleteLemDataset(goCtx context.Context, msg *types.MsgDeleteLemDataset) (*types.MsgDeleteLemDatasetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetLemDataset(
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

	k.RemoveLemDataset(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteLemDatasetResponse{}, nil
}
