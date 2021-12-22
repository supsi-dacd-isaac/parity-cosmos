package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/keeper"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func TestMarketOperatorQuery(t *testing.T) {
	keeper, ctx := keepertest.PmKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestMarketOperator(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetMarketOperatorRequest
		response *types.QueryGetMarketOperatorResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetMarketOperatorRequest{},
			response: &types.QueryGetMarketOperatorResponse{MarketOperator: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.MarketOperator(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}
