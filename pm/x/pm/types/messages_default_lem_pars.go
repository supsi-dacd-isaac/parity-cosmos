package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateDefaultLemPars{}

func NewMsgCreateDefaultLemPars(
	creator string,
	index string,
	pbBAU string,
	psBAU string,
	pbP2P string,
	psP2P string,
	beta string,

) *MsgCreateDefaultLemPars {
	return &MsgCreateDefaultLemPars{
		Creator: creator,
		Index:   index,
		PbBAU:   pbBAU,
		PsBAU:   psBAU,
		PbP2P:   pbP2P,
		PsP2P:   psP2P,
		Beta:    beta,
	}
}

func (msg *MsgCreateDefaultLemPars) Route() string {
	return RouterKey
}

func (msg *MsgCreateDefaultLemPars) Type() string {
	return "CreateDefaultLemPars"
}

func (msg *MsgCreateDefaultLemPars) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDefaultLemPars) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDefaultLemPars) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDefaultLemPars{}

func NewMsgUpdateDefaultLemPars(
	creator string,
	index string,
	pbBAU string,
	psBAU string,
	pbP2P string,
	psP2P string,
	beta string,

) *MsgUpdateDefaultLemPars {
	return &MsgUpdateDefaultLemPars{
		Creator: creator,
		Index:   index,
		PbBAU:   pbBAU,
		PsBAU:   psBAU,
		PbP2P:   pbP2P,
		PsP2P:   psP2P,
		Beta:    beta,
	}
}

func (msg *MsgUpdateDefaultLemPars) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDefaultLemPars) Type() string {
	return "UpdateDefaultLemPars"
}

func (msg *MsgUpdateDefaultLemPars) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDefaultLemPars) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDefaultLemPars) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDefaultLemPars{}

func NewMsgDeleteDefaultLemPars(
	creator string,
	index string,

) *MsgDeleteDefaultLemPars {
	return &MsgDeleteDefaultLemPars{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteDefaultLemPars) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDefaultLemPars) Type() string {
	return "DeleteDefaultLemPars"
}

func (msg *MsgDeleteDefaultLemPars) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDefaultLemPars) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDefaultLemPars) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
