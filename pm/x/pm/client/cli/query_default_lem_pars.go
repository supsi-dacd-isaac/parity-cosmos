package cli

import (
	"context"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func CmdListDefaultLemPars() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-default-lem-pars",
		Short: "list all defaultLemPars",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllDefaultLemParsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.DefaultLemParsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowDefaultLemPars() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-default-lem-pars [index]",
		Short: "shows a defaultLemPars",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetDefaultLemParsRequest{
				Index: argIndex,
			}

			res, err := queryClient.DefaultLemPars(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
