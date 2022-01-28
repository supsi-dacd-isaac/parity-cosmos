package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func (k msgServer) CreateKpiFeatures(goCtx context.Context, msg *types.MsgCreateKpiFeatures) (*types.MsgCreateKpiFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetKpiFeatures(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var kpiFeatures = types.KpiFeatures{
		Creator: msg.Creator,
		Index:   msg.Index,
		Sla:     msg.Sla,
		Rule:    msg.Rule,
		Limit:   msg.Limit,
		Mu:      msg.Mu,
		Penalty: msg.Penalty,
		Players: msg.Players,
	}

	k.SetKpiFeatures(
		ctx,
		kpiFeatures,
	)
	return &types.MsgCreateKpiFeaturesResponse{}, nil
}

func (k msgServer) UpdateKpiFeatures(goCtx context.Context, msg *types.MsgUpdateKpiFeatures) (*types.MsgUpdateKpiFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetKpiFeatures(
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

	var kpiFeatures = types.KpiFeatures{
		Creator: msg.Creator,
		Index:   msg.Index,
		Sla:     msg.Sla,
		Rule:    msg.Rule,
		Limit:   msg.Limit,
		Mu:      msg.Mu,
		Penalty: msg.Penalty,
		Players: msg.Players,
	}

	k.SetKpiFeatures(ctx, kpiFeatures)

	return &types.MsgUpdateKpiFeaturesResponse{}, nil
}

func (k msgServer) DeleteKpiFeatures(goCtx context.Context, msg *types.MsgDeleteKpiFeatures) (*types.MsgDeleteKpiFeaturesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetKpiFeatures(
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

	k.RemoveKpiFeatures(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteKpiFeaturesResponse{}, nil
}
