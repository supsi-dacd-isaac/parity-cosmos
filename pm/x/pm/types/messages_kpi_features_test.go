package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/testutil/sample"
)

func TestMsgCreateKpiFeatures_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateKpiFeatures
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateKpiFeatures{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateKpiFeatures{
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

func TestMsgUpdateKpiFeatures_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateKpiFeatures
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateKpiFeatures{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateKpiFeatures{
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

func TestMsgDeleteKpiFeatures_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteKpiFeatures
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteKpiFeatures{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteKpiFeatures{
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
