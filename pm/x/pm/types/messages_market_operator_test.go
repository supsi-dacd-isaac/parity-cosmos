package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/sample"
)

func TestMsgCreateMarketOperator_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateMarketOperator
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateMarketOperator{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateMarketOperator{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateMarketOperator_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateMarketOperator
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateMarketOperator{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateMarketOperator{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteMarketOperator_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteMarketOperator
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteMarketOperator{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteMarketOperator{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
