package cli

import (
	"fmt"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func CmdCreateDefaultLemPars() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-default-lem-pars [index] [pb-bau] [ps-bau] [pb-p-2-p] [ps-p-2-p] [beta]",
		Short: "Create a new defaultLemPars",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argPbBAU := args[1]
			argPsBAU := args[2]
			argPbP2P := args[3]
			argPsP2P := args[4]
			argBeta := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the market operator
			if isMarketOperator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to create a set of default LEM parameters")
				return nil
			}

			msg := types.NewMsgCreateDefaultLemPars(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPbBAU,
				argPsBAU,
				argPbP2P,
				argPsP2P,
				argBeta,
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

func CmdUpdateDefaultLemPars() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-default-lem-pars [index] [pb-bau] [ps-bau] [pb-p-2-p] [ps-p-2-p] [beta]",
		Short: "Update a defaultLemPars",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argPbBAU := args[1]
			argPsBAU := args[2]
			argPbP2P := args[3]
			argPsP2P := args[4]
			argBeta := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the market operator
			if isMarketOperator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to update a set of default LEM parameters")
				return nil
			}

			msg := types.NewMsgUpdateDefaultLemPars(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPbBAU,
				argPsBAU,
				argPbP2P,
				argPsP2P,
				argBeta,
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

func CmdDeleteDefaultLemPars() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-default-lem-pars [index]",
		Short: "Delete a defaultLemPars",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Check if the node performing the transaction is the market operator
			if isMarketOperator(clientCtx) == false {
				fmt.Println("Node ", clientCtx.GetFromAddress().String(), " not allowed to delete a set of default LEM parameters")
				return nil
			}

			msg := types.NewMsgDeleteDefaultLemPars(
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
