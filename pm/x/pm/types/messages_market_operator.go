package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMarketOperator{}

func NewMsgCreateMarketOperator(creator string, idx string, address string) *MsgCreateMarketOperator {
	return &MsgCreateMarketOperator{
		Creator: creator,
		Idx:     idx,
		Address: address,
	}
}

func (msg *MsgCreateMarketOperator) Route() string {
	return RouterKey
}

func (msg *MsgCreateMarketOperator) Type() string {
	return "CreateMarketOperator"
}

func (msg *MsgCreateMarketOperator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMarketOperator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMarketOperator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMarketOperator{}

func NewMsgUpdateMarketOperator(creator string, idx string, address string) *MsgUpdateMarketOperator {
	return &MsgUpdateMarketOperator{
		Creator: creator,
		Idx:     idx,
		Address: address,
	}
}

func (msg *MsgUpdateMarketOperator) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMarketOperator) Type() string {
	return "UpdateMarketOperator"
}

func (msg *MsgUpdateMarketOperator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMarketOperator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMarketOperator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMarketOperator{}

func NewMsgDeleteMarketOperator(creator string) *MsgDeleteMarketOperator {
	return &MsgDeleteMarketOperator{
		Creator: creator,
	}
}
func (msg *MsgDeleteMarketOperator) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMarketOperator) Type() string {
	return "DeleteMarketOperator"
}

func (msg *MsgDeleteMarketOperator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteMarketOperator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMarketOperator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
