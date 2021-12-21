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

func TestDefaultLemParsMsgServerCreate(t *testing.T) {
	k, ctx := keepertest.PmKeeper(t)
	srv := keeper.NewMsgServerImpl(*k)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	for i := 0; i < 5; i++ {
		expected := &types.MsgCreateDefaultLemPars{Creator: creator,
			Index: strconv.Itoa(i),
		}
		_, err := srv.CreateDefaultLemPars(wctx, expected)
		require.NoError(t, err)
		rst, found := k.GetDefaultLemPars(ctx,
			expected.Index,
		)
		require.True(t, found)
		require.Equal(t, expected.Creator, rst.Creator)
	}
}

func TestDefaultLemParsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDefaultLemPars
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgUpdateDefaultLemPars{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgUpdateDefaultLemPars{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgUpdateDefaultLemPars{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PmKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreateDefaultLemPars{Creator: creator,
				Index: strconv.Itoa(0),
			}
			_, err := srv.CreateDefaultLemPars(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdateDefaultLemPars(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := k.GetDefaultLemPars(ctx,
					expected.Index,
				)
				require.True(t, found)
				require.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestDefaultLemParsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDefaultLemPars
		err     error
	}{
		{
			desc: "Completed",
			request: &types.MsgDeleteDefaultLemPars{Creator: creator,
				Index: strconv.Itoa(0),
			},
		},
		{
			desc: "Unauthorized",
			request: &types.MsgDeleteDefaultLemPars{Creator: "B",
				Index: strconv.Itoa(0),
			},
			err: sdkerrors.ErrUnauthorized,
		},
		{
			desc: "KeyNotFound",
			request: &types.MsgDeleteDefaultLemPars{Creator: creator,
				Index: strconv.Itoa(100000),
			},
			err: sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			k, ctx := keepertest.PmKeeper(t)
			srv := keeper.NewMsgServerImpl(*k)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreateDefaultLemPars(wctx, &types.MsgCreateDefaultLemPars{Creator: creator,
				Index: strconv.Itoa(0),
			})
			require.NoError(t, err)
			_, err = srv.DeleteDefaultLemPars(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := k.GetDefaultLemPars(ctx,
					tc.request.Index,
				)
				require.False(t, found)
			}
		})
	}
}
