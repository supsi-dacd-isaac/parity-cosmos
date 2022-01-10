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

func CmdCreateGridState() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-grid-state [index] [grid] [timestamp] [state]",
		Short: "Create a new gridState",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argGrid := args[1]
			argTimestamp, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argState := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the DSO
			if isDSO(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to save a grid state")
				return nil
			}

			msg := types.NewMsgCreateGridState(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argGrid,
				argTimestamp,
				argState,
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

func CmdUpdateGridState() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-grid-state [index] [grid] [timestamp] [state]",
		Short: "Update a gridState",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argGrid := args[1]
			argTimestamp, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argState := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the DSO
			if isDSO(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to update a grid state")
				return nil
			}

			msg := types.NewMsgUpdateGridState(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argGrid,
				argTimestamp,
				argState,
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

func CmdDeleteGridState() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-grid-state [index]",
		Short: "Delete a gridState",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the DSO
			if isDSO(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to save a grid state")
				return nil
			}

			msg := types.NewMsgDeleteGridState(
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
