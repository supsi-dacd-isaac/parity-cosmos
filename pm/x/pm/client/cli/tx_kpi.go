package cli

import (
	"fmt"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func CmdCreateKpi() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-kpi [index] [sla] [rule] [limit] [mu] [penalty]",
		Short: "Create a new kpi",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argSla := args[1]
			argRule := args[2]
			argLimit := args[3]
			argMu := args[4]
			argPenalty, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the aggregator
			if isAggregator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to create a KPI")
				return nil
			}

			msg := types.NewMsgCreateKpi(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argSla,
				argRule,
				argLimit,
				argMu,
				argPenalty,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateKpi() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-kpi [index] [sla] [rule] [limit] [mu] [penalty]",
		Short: "Update a kpi",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argSla := args[1]
			argRule := args[2]
			argLimit := args[3]
			argMu := args[4]
			argPenalty, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the aggregator
			if isAggregator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to update a KPI")
				return nil
			}

			msg := types.NewMsgUpdateKpi(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argSla,
				argRule,
				argLimit,
				argMu,
				argPenalty,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteKpi() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-kpi [index]",
		Short: "Delete a kpi",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the aggregator
			if isAggregator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to delete a KPI")
				return nil
			}

			msg := types.NewMsgDeleteKpi(
				clientCtx.GetFromAddress().String(),
				indexIndex,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
