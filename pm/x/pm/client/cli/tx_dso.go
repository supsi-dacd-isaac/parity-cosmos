package cli

import (
	"fmt"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func CmdCreateDso() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-dso [idx] [address]",
		Short: "Create dso",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIdx := args[0]
			argAddress := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			//Check if the DSO has not been already set
			if isDSONone(clientCtx) == false {
				// Check if the node performing the transaction is the DSO
				if isDSO(clientCtx) == false {
					fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to create a DSO")
					return nil
				}
			}

			msg := types.NewMsgCreateDso(clientCtx.GetFromAddress().String(), argIdx, argAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDso() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-dso [idx] [address]",
		Short: "Update dso",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argIdx := args[0]
			argAddress := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the DSO
			if isDSO(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to update a DSO")
				return nil
			}

			msg := types.NewMsgUpdateDso(clientCtx.GetFromAddress().String(), argIdx, argAddress)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteDso() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-dso",
		Short: "Delete dso",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the DSO
			if isDSO(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to delete a DSO")
				return nil
			}

			msg := types.NewMsgDeleteDso(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
