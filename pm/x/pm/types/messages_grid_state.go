package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateGridState{}

func NewMsgCreateGridState(
	creator string,
	index string,
	grid string,
	timestamp int32,
	state string,

) *MsgCreateGridState {
	return &MsgCreateGridState{
		Creator:   creator,
		Index:     index,
		Grid:      grid,
		Timestamp: timestamp,
		State:     state,
	}
}

func (msg *MsgCreateGridState) Route() string {
	return RouterKey
}

func (msg *MsgCreateGridState) Type() string {
	return "CreateGridState"
}

func (msg *MsgCreateGridState) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateGridState) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateGridState) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateGridState{}

func NewMsgUpdateGridState(
	creator string,
	index string,
	grid string,
	timestamp int32,
	state string,

) *MsgUpdateGridState {
	return &MsgUpdateGridState{
		Creator:   creator,
		Index:     index,
		Grid:      grid,
		Timestamp: timestamp,
		State:     state,
	}
}

func (msg *MsgUpdateGridState) Route() string {
	return RouterKey
}

func (msg *MsgUpdateGridState) Type() string {
	return "UpdateGridState"
}

func (msg *MsgUpdateGridState) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateGridState) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateGridState) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteGridState{}

func NewMsgDeleteGridState(
	creator string,
	index string,

) *MsgDeleteGridState {
	return &MsgDeleteGridState{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteGridState) Route() string {
	return RouterKey
}

func (msg *MsgDeleteGridState) Type() string {
	return "DeleteGridState"
}

func (msg *MsgDeleteGridState) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteGridState) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteGridState) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
