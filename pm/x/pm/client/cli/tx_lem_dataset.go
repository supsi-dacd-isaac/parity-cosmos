package cli

import (
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func CmdCreateLemDataset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-lem-dataset [index] [player] [timestamp] [pcons-measure] [pprod-measure] [pcons-forecast] [pprod-forecast]",
		Short: "Create a new lemDataset",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argPlayer := args[1]
			argTimestamp, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argPconsMeasure := args[3]
			argPprodMeasure := args[4]
			argPconsForecast := args[5]
			argPprodForecast := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateLemDataset(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPlayer,
				argTimestamp,
				argPconsMeasure,
				argPprodMeasure,
				argPconsForecast,
				argPprodForecast,
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

func CmdUpdateLemDataset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-lem-dataset [index] [player] [timestamp] [pcons-measure] [pprod-measure] [pcons-forecast] [pprod-forecast]",
		Short: "Update a lemDataset",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argPlayer := args[1]
			argTimestamp, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argPconsMeasure := args[3]
			argPprodMeasure := args[4]
			argPconsForecast := args[5]
			argPprodForecast := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateLemDataset(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPlayer,
				argTimestamp,
				argPconsMeasure,
				argPprodMeasure,
				argPconsForecast,
				argPprodForecast,
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

func CmdDeleteLemDataset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-lem-dataset [index]",
		Short: "Delete a lemDataset",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteLemDataset(
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
