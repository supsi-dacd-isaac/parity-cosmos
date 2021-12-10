package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateLemDataset{}

func NewMsgCreateLemDataset(
	creator string,
	index string,
	player string,
	timestamp int32,
	pconsMeasure string,
	pprodMeasure string,
	pconsForecast string,
	pprodForecast string,

) *MsgCreateLemDataset {
	return &MsgCreateLemDataset{
		Creator:       creator,
		Index:         index,
		Player:        player,
		Timestamp:     timestamp,
		PconsMeasure:  pconsMeasure,
		PprodMeasure:  pprodMeasure,
		PconsForecast: pconsForecast,
		PprodForecast: pprodForecast,
	}
}

func (msg *MsgCreateLemDataset) Route() string {
	return RouterKey
}

func (msg *MsgCreateLemDataset) Type() string {
	return "CreateLemDataset"
}

func (msg *MsgCreateLemDataset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLemDataset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLemDataset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLemDataset{}

func NewMsgUpdateLemDataset(
	creator string,
	index string,
	player string,
	timestamp int32,
	pconsMeasure string,
	pprodMeasure string,
	pconsForecast string,
	pprodForecast string,

) *MsgUpdateLemDataset {
	return &MsgUpdateLemDataset{
		Creator:       creator,
		Index:         index,
		Player:        player,
		Timestamp:     timestamp,
		PconsMeasure:  pconsMeasure,
		PprodMeasure:  pprodMeasure,
		PconsForecast: pconsForecast,
		PprodForecast: pprodForecast,
	}
}

func (msg *MsgUpdateLemDataset) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLemDataset) Type() string {
	return "UpdateLemDataset"
}

func (msg *MsgUpdateLemDataset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLemDataset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLemDataset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLemDataset{}

func NewMsgDeleteLemDataset(
	creator string,
	index string,

) *MsgDeleteLemDataset {
	return &MsgDeleteLemDataset{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteLemDataset) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLemDataset) Type() string {
	return "DeleteLemDataset"
}

func (msg *MsgDeleteLemDataset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLemDataset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLemDataset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
