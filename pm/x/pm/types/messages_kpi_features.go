package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateKpiFeatures{}

func NewMsgCreateKpiFeatures(
	creator string,
	index string,
	sla string,
	rule string,
	limit string,
	mu string,
	penalty int32,
	players []string,

) *MsgCreateKpiFeatures {
	return &MsgCreateKpiFeatures{
		Creator: creator,
		Index:   index,
		Sla:     sla,
		Rule:    rule,
		Limit:   limit,
		Mu:      mu,
		Penalty: penalty,
		Players: players,
	}
}

func (msg *MsgCreateKpiFeatures) Route() string {
	return RouterKey
}

func (msg *MsgCreateKpiFeatures) Type() string {
	return "CreateKpiFeatures"
}

func (msg *MsgCreateKpiFeatures) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateKpiFeatures) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateKpiFeatures) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateKpiFeatures{}

func NewMsgUpdateKpiFeatures(
	creator string,
	index string,
	sla string,
	rule string,
	limit string,
	mu string,
	penalty int32,
	players []string,

) *MsgUpdateKpiFeatures {
	return &MsgUpdateKpiFeatures{
		Creator: creator,
		Index:   index,
		Sla:     sla,
		Rule:    rule,
		Limit:   limit,
		Mu:      mu,
		Penalty: penalty,
		Players: players,
	}
}

func (msg *MsgUpdateKpiFeatures) Route() string {
	return RouterKey
}

func (msg *MsgUpdateKpiFeatures) Type() string {
	return "UpdateKpiFeatures"
}

func (msg *MsgUpdateKpiFeatures) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateKpiFeatures) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateKpiFeatures) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteKpiFeatures{}

func NewMsgDeleteKpiFeatures(
	creator string,
	index string,

) *MsgDeleteKpiFeatures {
	return &MsgDeleteKpiFeatures{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteKpiFeatures) Route() string {
	return RouterKey
}

func (msg *MsgDeleteKpiFeatures) Type() string {
	return "DeleteKpiFeatures"
}

func (msg *MsgDeleteKpiFeatures) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteKpiFeatures) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteKpiFeatures) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
