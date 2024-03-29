// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: pm/genesis.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the pm module's genesis state.
type GenesisState struct {
	Dso                *Dso             `protobuf:"bytes,1,opt,name=dso,proto3" json:"dso,omitempty"`
	Aggregator         *Aggregator      `protobuf:"bytes,2,opt,name=aggregator,proto3" json:"aggregator,omitempty"`
	PlayerList         []Player         `protobuf:"bytes,3,rep,name=playerList,proto3" json:"playerList"`
	LemList            []Lem            `protobuf:"bytes,4,rep,name=lemList,proto3" json:"lemList"`
	LemMeasureList     []LemMeasure     `protobuf:"bytes,5,rep,name=lemMeasureList,proto3" json:"lemMeasureList"`
	SlaList            []Sla            `protobuf:"bytes,6,rep,name=slaList,proto3" json:"slaList"`
	KpiList            []Kpi            `protobuf:"bytes,7,rep,name=kpiList,proto3" json:"kpiList"`
	KpiMeasureList     []KpiMeasure     `protobuf:"bytes,8,rep,name=kpiMeasureList,proto3" json:"kpiMeasureList"`
	LemDatasetList     []LemDataset     `protobuf:"bytes,9,rep,name=lemDatasetList,proto3" json:"lemDatasetList"`
	DefaultLemParsList []DefaultLemPars `protobuf:"bytes,10,rep,name=defaultLemParsList,proto3" json:"defaultLemParsList"`
	MarketOperator     *MarketOperator  `protobuf:"bytes,11,opt,name=marketOperator,proto3" json:"marketOperator,omitempty"`
	GridStateList      []GridState      `protobuf:"bytes,12,rep,name=gridStateList,proto3" json:"gridStateList"`
	KpiFeaturesList    []KpiFeatures    `protobuf:"bytes,13,rep,name=kpiFeaturesList,proto3" json:"kpiFeaturesList"`
	ForecastList       []Forecast       `protobuf:"bytes,14,rep,name=forecastList,proto3" json:"forecastList"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_fec31e9358cfa321, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetDso() *Dso {
	if m != nil {
		return m.Dso
	}
	return nil
}

func (m *GenesisState) GetAggregator() *Aggregator {
	if m != nil {
		return m.Aggregator
	}
	return nil
}

func (m *GenesisState) GetPlayerList() []Player {
	if m != nil {
		return m.PlayerList
	}
	return nil
}

func (m *GenesisState) GetLemList() []Lem {
	if m != nil {
		return m.LemList
	}
	return nil
}

func (m *GenesisState) GetLemMeasureList() []LemMeasure {
	if m != nil {
		return m.LemMeasureList
	}
	return nil
}

func (m *GenesisState) GetSlaList() []Sla {
	if m != nil {
		return m.SlaList
	}
	return nil
}

func (m *GenesisState) GetKpiList() []Kpi {
	if m != nil {
		return m.KpiList
	}
	return nil
}

func (m *GenesisState) GetKpiMeasureList() []KpiMeasure {
	if m != nil {
		return m.KpiMeasureList
	}
	return nil
}

func (m *GenesisState) GetLemDatasetList() []LemDataset {
	if m != nil {
		return m.LemDatasetList
	}
	return nil
}

func (m *GenesisState) GetDefaultLemParsList() []DefaultLemPars {
	if m != nil {
		return m.DefaultLemParsList
	}
	return nil
}

func (m *GenesisState) GetMarketOperator() *MarketOperator {
	if m != nil {
		return m.MarketOperator
	}
	return nil
}

func (m *GenesisState) GetGridStateList() []GridState {
	if m != nil {
		return m.GridStateList
	}
	return nil
}

func (m *GenesisState) GetKpiFeaturesList() []KpiFeatures {
	if m != nil {
		return m.KpiFeaturesList
	}
	return nil
}

func (m *GenesisState) GetForecastList() []Forecast {
	if m != nil {
		return m.ForecastList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "supsidacdisaac.pm.pm.GenesisState")
}

func init() { proto.RegisterFile("pm/genesis.proto", fileDescriptor_fec31e9358cfa321) }

var fileDescriptor_fec31e9358cfa321 = []byte{
	// 591 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x94, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0xc7, 0x5b, 0x36, 0x36, 0x70, 0xbb, 0x0e, 0x4c, 0x91, 0xba, 0x0a, 0x65, 0x05, 0x71, 0x98,
	0x84, 0x9a, 0x48, 0xe3, 0x80, 0xb8, 0x41, 0x35, 0x6d, 0x48, 0xed, 0x60, 0xeb, 0x6e, 0xbb, 0x54,
	0x5e, 0xe3, 0x06, 0x2b, 0x31, 0xb6, 0x6c, 0x57, 0xa2, 0xdf, 0x82, 0x8f, 0xb5, 0xe3, 0x8e, 0x9c,
	0x10, 0x6a, 0xbf, 0x03, 0x67, 0xe4, 0x17, 0x7b, 0xa4, 0x55, 0x5a, 0x2e, 0x55, 0xec, 0xfe, 0xff,
	0xbf, 0xfc, 0xdf, 0xb3, 0x5f, 0xd0, 0x13, 0xc9, 0xa3, 0x84, 0x7e, 0xa3, 0x9a, 0xe9, 0x50, 0x2a,
	0x61, 0x04, 0x6e, 0xea, 0xa9, 0xd4, 0x2c, 0x26, 0xe3, 0x98, 0x69, 0x42, 0xc6, 0xa1, 0xe4, 0xa1,
	0xe4, 0xed, 0xba, 0xe4, 0x51, 0xac, 0x45, 0xae, 0x69, 0x3f, 0x93, 0x3c, 0x22, 0x49, 0xa2, 0x68,
	0x42, 0x8c, 0x50, 0x6e, 0x73, 0x5f, 0xf2, 0x48, 0x66, 0x64, 0x46, 0xfd, 0x86, 0xf5, 0x64, 0x94,
	0xbb, 0x55, 0x33, 0x5f, 0x8d, 0x38, 0x25, 0x7a, 0xaa, 0x68, 0x41, 0xa3, 0x33, 0x52, 0x58, 0xa5,
	0x92, 0x15, 0x1c, 0xa9, 0x64, 0x2b, 0x0e, 0xcf, 0x89, 0x89, 0x21, 0x9a, 0x1a, 0xb7, 0x7b, 0x60,
	0xf3, 0xd1, 0x09, 0x99, 0x66, 0x66, 0x64, 0xff, 0x95, 0x44, 0xb9, 0x82, 0xda, 0x2d, 0xc9, 0x23,
	0x4e, 0x54, 0x4a, 0xcd, 0x48, 0x48, 0xaa, 0x0a, 0x89, 0x6d, 0x19, 0x89, 0x62, 0xf1, 0x48, 0x1b,
	0x62, 0x3c, 0xff, 0xb9, 0x7b, 0xeb, 0x84, 0x12, 0x33, 0x55, 0xd4, 0x53, 0x9e, 0x4a, 0x1e, 0x4d,
	0x84, 0xa2, 0x63, 0xa2, 0xfd, 0x3b, 0x9b, 0x89, 0x48, 0x04, 0x3c, 0x46, 0xf6, 0x29, 0xdf, 0x7d,
	0xf5, 0x67, 0x17, 0xd5, 0xcf, 0xf2, 0x8e, 0x5e, 0x59, 0x2c, 0x7e, 0x83, 0xb6, 0x62, 0x2d, 0x5a,
	0xd5, 0x4e, 0xf5, 0xa8, 0x76, 0x7c, 0x10, 0x96, 0xb5, 0x37, 0x3c, 0xd1, 0x62, 0x68, 0x55, 0xf8,
	0x03, 0x42, 0xff, 0x1a, 0xdb, 0x7a, 0x00, 0x9e, 0x4e, 0xb9, 0xe7, 0xe3, 0xbd, 0x6e, 0x58, 0xf0,
	0xe0, 0x1e, 0x42, 0xf9, 0x29, 0x0c, 0x98, 0x36, 0xad, 0xad, 0xce, 0xd6, 0x51, 0xed, 0xf8, 0x45,
	0x39, 0xe1, 0x02, 0x74, 0xbd, 0xed, 0xdb, 0x5f, 0x87, 0x95, 0x61, 0xc1, 0x85, 0xdf, 0xa3, 0xdd,
	0x8c, 0x72, 0x00, 0x6c, 0x03, 0x60, 0x4d, 0xec, 0x01, 0xe5, 0xce, 0xed, 0xf5, 0xf8, 0x33, 0x6a,
	0x64, 0x94, 0x9f, 0xe7, 0x47, 0x06, 0x84, 0x87, 0x40, 0xe8, 0xac, 0x25, 0x38, 0xad, 0x03, 0xad,
	0xb8, 0x6d, 0x14, 0x9d, 0x11, 0x00, 0xed, 0x6c, 0x8a, 0x72, 0x95, 0x11, 0x1f, 0xc5, 0xe9, 0xad,
	0x35, 0x95, 0x0c, 0xac, 0xbb, 0x9b, 0xac, 0x7d, 0xc9, 0xbc, 0xd5, 0xe9, 0x6d, 0x15, 0xa9, 0x64,
	0xc5, 0x2a, 0x1e, 0x6d, 0xaa, 0xa2, 0x7f, 0xaf, 0xf5, 0x55, 0x2c, 0xbb, 0x5d, 0x57, 0x4e, 0xf2,
	0x2b, 0x0b, 0xbc, 0xc7, 0xff, 0xe9, 0x8a, 0xd3, 0x16, 0xba, 0x52, 0x70, 0xe3, 0x6b, 0x84, 0xdd,
	0x6d, 0x1f, 0x50, 0x7e, 0x41, 0x94, 0x06, 0x26, 0x02, 0xe6, 0xeb, 0x35, 0x57, 0x6c, 0x49, 0xef,
	0xb8, 0x25, 0x14, 0x3c, 0x40, 0x8d, 0x7c, 0x5c, 0xbe, 0xb8, 0x69, 0x69, 0xd5, 0xe0, 0x1a, 0xae,
	0xe1, 0x9e, 0x2f, 0x69, 0x87, 0x2b, 0x5e, 0xdc, 0x47, 0x7b, 0x76, 0xc4, 0x60, 0x14, 0x20, 0x64,
	0x1d, 0x42, 0x1e, 0x96, 0xc3, 0xce, 0xbc, 0xd4, 0xe5, 0x5b, 0xf6, 0xe2, 0x4b, 0xb4, 0x9f, 0x4a,
	0x76, 0xea, 0x26, 0x13, 0x70, 0x7b, 0x80, 0x7b, 0xb9, 0xf6, 0x5c, 0xbc, 0xd8, 0x01, 0x57, 0xfd,
	0xf8, 0x13, 0xaa, 0xfb, 0xb1, 0x06, 0x5e, 0x03, 0x78, 0x41, 0x39, 0xef, 0xd4, 0x29, 0x1d, 0x6c,
	0xc9, 0xd9, 0xbb, 0xbc, 0x9d, 0x07, 0xd5, 0xbb, 0x79, 0x50, 0xfd, 0x3d, 0x0f, 0xaa, 0x3f, 0x16,
	0x41, 0xe5, 0x6e, 0x11, 0x54, 0x7e, 0x2e, 0x82, 0xca, 0xf5, 0xbb, 0x84, 0x99, 0xaf, 0xd3, 0x9b,
	0x70, 0x2c, 0x78, 0x04, 0xdc, 0xae, 0x05, 0x77, 0x81, 0x1c, 0x49, 0xa2, 0x98, 0x99, 0x75, 0xc7,
	0x42, 0x73, 0xa1, 0x23, 0xc9, 0xa3, 0xef, 0xf6, 0xc7, 0xcc, 0x24, 0xd5, 0x37, 0x3b, 0xf0, 0x49,
	0x79, 0xfb, 0x37, 0x00, 0x00, 0xff, 0xff, 0x46, 0x5f, 0x45, 0x44, 0xa6, 0x05, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ForecastList) > 0 {
		for iNdEx := len(m.ForecastList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.ForecastList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x72
		}
	}
	if len(m.KpiFeaturesList) > 0 {
		for iNdEx := len(m.KpiFeaturesList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.KpiFeaturesList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x6a
		}
	}
	if len(m.GridStateList) > 0 {
		for iNdEx := len(m.GridStateList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.GridStateList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x62
		}
	}
	if m.MarketOperator != nil {
		{
			size, err := m.MarketOperator.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x5a
	}
	if len(m.DefaultLemParsList) > 0 {
		for iNdEx := len(m.DefaultLemParsList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.DefaultLemParsList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x52
		}
	}
	if len(m.LemDatasetList) > 0 {
		for iNdEx := len(m.LemDatasetList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.LemDatasetList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x4a
		}
	}
	if len(m.KpiMeasureList) > 0 {
		for iNdEx := len(m.KpiMeasureList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.KpiMeasureList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if len(m.KpiList) > 0 {
		for iNdEx := len(m.KpiList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.KpiList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if len(m.SlaList) > 0 {
		for iNdEx := len(m.SlaList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.SlaList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.LemMeasureList) > 0 {
		for iNdEx := len(m.LemMeasureList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.LemMeasureList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.LemList) > 0 {
		for iNdEx := len(m.LemList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.LemList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.PlayerList) > 0 {
		for iNdEx := len(m.PlayerList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.PlayerList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if m.Aggregator != nil {
		{
			size, err := m.Aggregator.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Dso != nil {
		{
			size, err := m.Dso.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintGenesis(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Dso != nil {
		l = m.Dso.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if m.Aggregator != nil {
		l = m.Aggregator.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.PlayerList) > 0 {
		for _, e := range m.PlayerList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.LemList) > 0 {
		for _, e := range m.LemList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.LemMeasureList) > 0 {
		for _, e := range m.LemMeasureList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.SlaList) > 0 {
		for _, e := range m.SlaList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.KpiList) > 0 {
		for _, e := range m.KpiList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.KpiMeasureList) > 0 {
		for _, e := range m.KpiMeasureList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.LemDatasetList) > 0 {
		for _, e := range m.LemDatasetList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.DefaultLemParsList) > 0 {
		for _, e := range m.DefaultLemParsList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if m.MarketOperator != nil {
		l = m.MarketOperator.Size()
		n += 1 + l + sovGenesis(uint64(l))
	}
	if len(m.GridStateList) > 0 {
		for _, e := range m.GridStateList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.KpiFeaturesList) > 0 {
		for _, e := range m.KpiFeaturesList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.ForecastList) > 0 {
		for _, e := range m.ForecastList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Dso", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Dso == nil {
				m.Dso = &Dso{}
			}
			if err := m.Dso.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Aggregator", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Aggregator == nil {
				m.Aggregator = &Aggregator{}
			}
			if err := m.Aggregator.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PlayerList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PlayerList = append(m.PlayerList, Player{})
			if err := m.PlayerList[len(m.PlayerList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LemList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LemList = append(m.LemList, Lem{})
			if err := m.LemList[len(m.LemList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LemMeasureList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LemMeasureList = append(m.LemMeasureList, LemMeasure{})
			if err := m.LemMeasureList[len(m.LemMeasureList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SlaList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SlaList = append(m.SlaList, Sla{})
			if err := m.SlaList[len(m.SlaList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field KpiList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.KpiList = append(m.KpiList, Kpi{})
			if err := m.KpiList[len(m.KpiList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field KpiMeasureList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.KpiMeasureList = append(m.KpiMeasureList, KpiMeasure{})
			if err := m.KpiMeasureList[len(m.KpiMeasureList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LemDatasetList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.LemDatasetList = append(m.LemDatasetList, LemDataset{})
			if err := m.LemDatasetList[len(m.LemDatasetList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DefaultLemParsList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DefaultLemParsList = append(m.DefaultLemParsList, DefaultLemPars{})
			if err := m.DefaultLemParsList[len(m.DefaultLemParsList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MarketOperator", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.MarketOperator == nil {
				m.MarketOperator = &MarketOperator{}
			}
			if err := m.MarketOperator.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field GridStateList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.GridStateList = append(m.GridStateList, GridState{})
			if err := m.GridStateList[len(m.GridStateList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 13:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field KpiFeaturesList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.KpiFeaturesList = append(m.KpiFeaturesList, KpiFeatures{})
			if err := m.KpiFeaturesList[len(m.KpiFeaturesList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 14:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ForecastList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ForecastList = append(m.ForecastList, Forecast{})
			if err := m.ForecastList[len(m.ForecastList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
