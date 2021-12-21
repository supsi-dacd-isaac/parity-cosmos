package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/sample"
)

func TestMsgCreateDefaultLemPars_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateDefaultLemPars
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateDefaultLemPars{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateDefaultLemPars{
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

func TestMsgUpdateDefaultLemPars_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateDefaultLemPars
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateDefaultLemPars{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateDefaultLemPars{
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

func TestMsgDeleteDefaultLemPars_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteDefaultLemPars
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteDefaultLemPars{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteDefaultLemPars{
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
