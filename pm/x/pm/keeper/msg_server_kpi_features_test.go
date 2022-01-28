package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestKpiFeaturesMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.PmKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateKpiFeatures{Creator: creator,
			Index: strconv.Itoa(i),
		}
		_, err := srv.CreateKpiFeatures(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetKpiFeatures(ctx,
			expected.Index,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestKpiFeaturesMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateKpiFeatures
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateKpiFeatures{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateKpiFeatures{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateKpiFeatures{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PmKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateKpiFeatures{Creator: creator,
				Index: strconv.Itoa(0),
			}
			_, err := srv.CreateKpiFeatures(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateKpiFeatures(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetKpiFeatures(ctx,
					expected.Index,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestKpiFeaturesMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteKpiFeatures
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteKpiFeatures{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteKpiFeatures{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteKpiFeatures{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PmKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateKpiFeatures(wctx, &types.MsgCreateKpiFeatures{Creator: creator,
				Index: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteKpiFeatures(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetKpiFeatures(ctx,
					tc.request.Index,
				)
				require.False(t, found)
			}
		})
	}
}
