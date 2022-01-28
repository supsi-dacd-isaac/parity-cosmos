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

func CmdCreateKpiFeatures() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-kpi-features [index] [sla] [rule] [limit] [mu] [penalty] [players]",
		Short: "Create a new kpiFeatures",
		Args:  cobra.MinimumNArgs(7),
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
			argPlayers := args[6:len(args)]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the aggregator
			if isAggregator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to create a KPI")
				return nil
			}

			msg := types.NewMsgCreateKpiFeatures(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argSla,
				argRule,
				argLimit,
				argMu,
				argPenalty,
				argPlayers,
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

func CmdUpdateKpiFeatures() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-kpi-features [index] [sla] [rule] [limit] [mu] [penalty] [players]",
		Short: "Update a kpiFeatures",
		Args:  cobra.MinimumNArgs(7),
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
			argPlayers := args[6:len(args)]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateKpiFeatures(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argSla,
				argRule,
				argLimit,
				argMu,
				argPenalty,
				argPlayers,
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

func CmdDeleteKpiFeatures() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-kpi-features [index]",
		Short: "Delete a kpiFeatures",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteKpiFeatures(
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
