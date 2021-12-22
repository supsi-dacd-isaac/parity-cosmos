// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: pm/market_operator.proto

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

type MarketOperator struct {
	Idx     string `protobuf:"bytes,1,opt,name=idx,proto3" json:"idx,omitempty"`
	Address string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	Creator string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *MarketOperator) Reset()         { *m = MarketOperator{} }
func (m *MarketOperator) String() string { return proto.CompactTextString(m) }
func (*MarketOperator) ProtoMessage()    {}
func (*MarketOperator) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4f3310bc7cd8f79, []int{0}
}
func (m *MarketOperator) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *MarketOperator) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_MarketOperator.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *MarketOperator) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MarketOperator.Merge(m, src)
}
func (m *MarketOperator) XXX_Size() int {
	return m.Size()
}
func (m *MarketOperator) XXX_DiscardUnknown() {
	xxx_messageInfo_MarketOperator.DiscardUnknown(m)
}

var xxx_messageInfo_MarketOperator proto.InternalMessageInfo

func (m *MarketOperator) GetIdx() string {
	if m != nil {
		return m.Idx
	}
	return ""
}

func (m *MarketOperator) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *MarketOperator) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*MarketOperator)(nil), "supsidacdisaac.pm.pm.MarketOperator")
}

func init() { proto.RegisterFile("pm/market_operator.proto", fileDescriptor_f4f3310bc7cd8f79) }

var fileDescriptor_f4f3310bc7cd8f79 = []byte{
	// 219 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x34, 0x8e, 0x31, 0x4b, 0xc5, 0x30,
	0x14, 0x85, 0x1b, 0x1f, 0x28, 0x66, 0x10, 0x29, 0x6f, 0x08, 0x0e, 0x41, 0x9c, 0x5c, 0x9a, 0x0c,
	0x0e, 0xee, 0xee, 0x22, 0x3a, 0x38, 0xb8, 0x48, 0x5e, 0x12, 0x6a, 0x90, 0x70, 0x2f, 0xb9, 0x79,
	0xd0, 0xfe, 0x0b, 0x7f, 0x96, 0x63, 0x47, 0x47, 0x69, 0xff, 0x88, 0x24, 0xad, 0x4b, 0x38, 0x27,
	0xe7, 0xdc, 0xc3, 0xc7, 0x05, 0x46, 0x1d, 0x4d, 0xfa, 0xf4, 0xf9, 0x1d, 0xd0, 0x27, 0x93, 0x21,
	0x29, 0x4c, 0x90, 0xa1, 0xdd, 0xd3, 0x11, 0x29, 0x38, 0x63, 0x5d, 0x20, 0x63, 0xac, 0xc2, 0xa8,
	0x30, 0x5e, 0xed, 0x7b, 0xe8, 0xa1, 0x16, 0x74, 0x51, 0x6b, 0xf7, 0xe6, 0x95, 0x5f, 0x3c, 0xd6,
	0x91, 0xa7, 0x6d, 0xa3, 0xbd, 0xe4, 0xbb, 0xe0, 0x06, 0xc1, 0xae, 0xd9, 0xed, 0xf9, 0x4b, 0x91,
	0xad, 0xe0, 0x67, 0xc6, 0xb9, 0xe4, 0x89, 0xc4, 0x49, 0xfd, 0xfd, 0xb7, 0x25, 0xb1, 0xc9, 0x97,
	0x33, 0xb1, 0x5b, 0x93, 0xcd, 0x3e, 0x3c, 0x7f, 0xcf, 0x92, 0x4d, 0xb3, 0x64, 0xbf, 0xb3, 0x64,
	0x5f, 0x8b, 0x6c, 0xa6, 0x45, 0x36, 0x3f, 0x8b, 0x6c, 0xde, 0xee, 0xfb, 0x90, 0x3f, 0x8e, 0x07,
	0x65, 0x21, 0xea, 0x0a, 0xda, 0x15, 0xd2, 0xae, 0xa2, 0x6a, 0x34, 0x29, 0xe4, 0xb1, 0xb3, 0x40,
	0x11, 0x48, 0x63, 0xd4, 0x43, 0x79, 0xf2, 0x88, 0x9e, 0x0e, 0xa7, 0x95, 0xf8, 0xee, 0x2f, 0x00,
	0x00, 0xff, 0xff, 0x96, 0xe5, 0xbe, 0x18, 0xf9, 0x00, 0x00, 0x00,
}

func (m *MarketOperator) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *MarketOperator) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *MarketOperator) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintMarketOperator(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintMarketOperator(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Idx) > 0 {
		i -= len(m.Idx)
		copy(dAtA[i:], m.Idx)
		i = encodeVarintMarketOperator(dAtA, i, uint64(len(m.Idx)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintMarketOperator(dAtA []byte, offset int, v uint64) int {
	offset -= sovMarketOperator(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *MarketOperator) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Idx)
	if l > 0 {
		n += 1 + l + sovMarketOperator(uint64(l))
	}
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovMarketOperator(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovMarketOperator(uint64(l))
	}
	return n
}

func sovMarketOperator(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMarketOperator(x uint64) (n int) {
	return sovMarketOperator(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *MarketOperator) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMarketOperator
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
			return fmt.Errorf("proto: MarketOperator: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: MarketOperator: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Idx", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarketOperator
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMarketOperator
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarketOperator
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Idx = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarketOperator
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMarketOperator
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarketOperator
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMarketOperator
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMarketOperator
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMarketOperator
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMarketOperator(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthMarketOperator
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
func skipMarketOperator(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMarketOperator
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
					return 0, ErrIntOverflowMarketOperator
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
					return 0, ErrIntOverflowMarketOperator
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
				return 0, ErrInvalidLengthMarketOperator
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupMarketOperator
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthMarketOperator
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthMarketOperator        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMarketOperator          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupMarketOperator = fmt.Errorf("proto: unexpected end of group")
)
