package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func TestMarketOperatorMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.PmKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreateMarketOperator{Creator: creator}
	_, err := srv.CreateMarketOperator(wctx, expected)
	require.NoError(t, err)
	rst, found := k.GetMarketOperator(ctx)
	require.True(t, found)
	require.Equal(t, expected.Creator, rst.Creator)
}

func TestMarketOperatorMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMarketOperator
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateMarketOperator{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateMarketOperator{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PmKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateMarketOperator{Creator: creator}
			_, err := srv.CreateMarketOperator(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateMarketOperator(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetMarketOperator(ctx)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestMarketOperatorMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMarketOperator
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteMarketOperator{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteMarketOperator{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PmKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateMarketOperator(wctx, &types.MsgCreateMarketOperator{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteMarketOperator(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetMarketOperator(ctx)
				require.False(t, found)
			}
		})
	}
}
