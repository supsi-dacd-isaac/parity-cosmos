package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateForecast{}

func NewMsgCreateForecast(
	creator string,
	index string,
	ts int32,
	values []string,

) *MsgCreateForecast {
	return &MsgCreateForecast{
		Creator: creator,
		Index:   index,
		Ts:      ts,
		Values:  values,
	}
}

func (msg *MsgCreateForecast) Route() string {
	return RouterKey
}

func (msg *MsgCreateForecast) Type() string {
	return "CreateForecast"
}

func (msg *MsgCreateForecast) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateForecast) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateForecast) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateForecast{}

func NewMsgUpdateForecast(
	creator string,
	index string,
	ts int32,
	values []string,

) *MsgUpdateForecast {
	return &MsgUpdateForecast{
		Creator: creator,
		Index:   index,
		Ts:      ts,
		Values:  values,
	}
}

func (msg *MsgUpdateForecast) Route() string {
	return RouterKey
}

func (msg *MsgUpdateForecast) Type() string {
	return "UpdateForecast"
}

func (msg *MsgUpdateForecast) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateForecast) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateForecast) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteForecast{}

func NewMsgDeleteForecast(
	creator string,
	index string,

) *MsgDeleteForecast {
	return &MsgDeleteForecast{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteForecast) Route() string {
	return RouterKey
}

func (msg *MsgDeleteForecast) Type() string {
	return "DeleteForecast"
}

func (msg *MsgDeleteForecast) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteForecast) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteForecast) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
