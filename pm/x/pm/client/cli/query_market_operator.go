package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func CmdShowMarketOperator() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-market-operator",
		Short: "shows marketOperator",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetMarketOperatorRequest{}

			res, err := queryClient.MarketOperator(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
