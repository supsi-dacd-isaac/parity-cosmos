// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: pm/default_lem_pars.proto

package types

import (
	fmt "fmt"
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

type DefaultLemPars struct {
	Index   string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	PbBAU   string `protobuf:"bytes,2,opt,name=pbBAU,proto3" json:"pbBAU,omitempty"`
	PsBAU   string `protobuf:"bytes,3,opt,name=psBAU,proto3" json:"psBAU,omitempty"`
	PbP2P   string `protobuf:"bytes,4,opt,name=pbP2P,proto3" json:"pbP2P,omitempty"`
	PsP2P   string `protobuf:"bytes,5,opt,name=psP2P,proto3" json:"psP2P,omitempty"`
	Beta    string `protobuf:"bytes,6,opt,name=beta,proto3" json:"beta,omitempty"`
	Creator string `protobuf:"bytes,7,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *DefaultLemPars) Reset()         { *m = DefaultLemPars{} }
func (m *DefaultLemPars) String() string { return proto.CompactTextString(m) }
func (*DefaultLemPars) ProtoMessage()    {}
func (*DefaultLemPars) Descriptor() ([]byte, []int) {
	return fileDescriptor_abe7123b1c87e394, []int{0}
}
func (m *DefaultLemPars) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *DefaultLemPars) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_DefaultLemPars.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *DefaultLemPars) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DefaultLemPars.Merge(m, src)
}
func (m *DefaultLemPars) XXX_Size() int {
	return m.Size()
}
func (m *DefaultLemPars) XXX_DiscardUnknown() {
	xxx_messageInfo_DefaultLemPars.DiscardUnknown(m)
}

var xxx_messageInfo_DefaultLemPars proto.InternalMessageInfo

func (m *DefaultLemPars) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *DefaultLemPars) GetPbBAU() string {
	if m != nil {
		return m.PbBAU
	}
	return ""
}

func (m *DefaultLemPars) GetPsBAU() string {
	if m != nil {
		return m.PsBAU
	}
	return ""
}

func (m *DefaultLemPars) GetPbP2P() string {
	if m != nil {
		return m.PbP2P
	}
	return ""
}

func (m *DefaultLemPars) GetPsP2P() string {
	if m != nil {
		return m.PsP2P
	}
	return ""
}

func (m *DefaultLemPars) GetBeta() string {
	if m != nil {
		return m.Beta
	}
	return ""
}

func (m *DefaultLemPars) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*DefaultLemPars)(nil), "supsidacdisaac.pm.pm.DefaultLemPars")
}

func init() { proto.RegisterFile("pm/default_lem_pars.proto", fileDescriptor_abe7123b1c87e394) }

var fileDescriptor_abe7123b1c87e394 = []byte{
	// 253 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x34, 0xd0, 0x3f, 0x4f, 0xc4, 0x20,
	0x18, 0x06, 0xf0, 0xa2, 0xf7, 0x27, 0x76, 0x70, 0x68, 0x6e, 0xc0, 0x85, 0x18, 0x27, 0x97, 0x96,
	0xe4, 0x1c, 0x9c, 0xbd, 0x38, 0x3a, 0xa0, 0x89, 0x8b, 0xcb, 0x05, 0x28, 0x2a, 0xc9, 0x21, 0x6f,
	0x78, 0x69, 0x72, 0xf7, 0x2d, 0xfc, 0x20, 0x7e, 0x10, 0xc7, 0x1b, 0x1d, 0x4d, 0xfb, 0x45, 0x0c,
	0xd4, 0x2e, 0x84, 0xe7, 0x97, 0x87, 0xe1, 0xa1, 0xbc, 0x00, 0xc7, 0x5b, 0xf3, 0x2a, 0xbb, 0x5d,
	0xdc, 0xee, 0x8c, 0xdb, 0x82, 0x0c, 0xd8, 0x40, 0xf0, 0xd1, 0x57, 0x2b, 0xec, 0x00, 0x6d, 0x2b,
	0x75, 0x6b, 0x51, 0x4a, 0xdd, 0x80, 0x6b, 0xc0, 0x5d, 0x7d, 0x91, 0xf2, 0xfc, 0x7e, 0x7c, 0xf0,
	0x60, 0x9c, 0x90, 0x01, 0xab, 0x55, 0x39, 0xb7, 0x1f, 0xad, 0xd9, 0x53, 0x72, 0x49, 0xae, 0xcf,
	0x9e, 0xc6, 0x90, 0x14, 0xd4, 0xe6, 0xee, 0x99, 0x9e, 0x8c, 0x9a, 0x43, 0x56, 0x4c, 0x7a, 0xfa,
	0xaf, 0x38, 0xa9, 0x12, 0x6b, 0x41, 0x67, 0x53, 0x57, 0xac, 0xc5, 0xd8, 0x4d, 0x3a, 0x9f, 0xba,
	0x49, 0xab, 0x72, 0xa6, 0x4c, 0x94, 0x74, 0x91, 0x31, 0xdf, 0x2b, 0x5a, 0x2e, 0x75, 0x30, 0x32,
	0xfa, 0x40, 0x97, 0x99, 0xa7, 0xb8, 0x79, 0xfc, 0xee, 0x19, 0x39, 0xf6, 0x8c, 0xfc, 0xf6, 0x8c,
	0x7c, 0x0e, 0xac, 0x38, 0x0e, 0xac, 0xf8, 0x19, 0x58, 0xf1, 0x72, 0xfb, 0x66, 0xe3, 0x7b, 0xa7,
	0x1a, 0xed, 0x1d, 0xcf, 0x4b, 0xeb, 0x34, 0xb5, 0xce, 0x5b, 0x39, 0xc8, 0x60, 0xe3, 0xa1, 0xd6,
	0x1e, 0x9d, 0x47, 0x0e, 0x8e, 0xef, 0xd3, 0x11, 0x0f, 0x60, 0x50, 0x2d, 0xf2, 0xf7, 0xdc, 0xfc,
	0x05, 0x00, 0x00, 0xff, 0xff, 0x0a, 0xb0, 0x7b, 0xee, 0x3b, 0x01, 0x00, 0x00,
}

func (m *DefaultLemPars) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *DefaultLemPars) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *DefaultLemPars) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintDefaultLemPars(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Beta) > 0 {
		i -= len(m.Beta)
		copy(dAtA[i:], m.Beta)
		i = encodeVarintDefaultLemPars(dAtA, i, uint64(len(m.Beta)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.PsP2P) > 0 {
		i -= len(m.PsP2P)
		copy(dAtA[i:], m.PsP2P)
		i = encodeVarintDefaultLemPars(dAtA, i, uint64(len(m.PsP2P)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.PbP2P) > 0 {
		i -= len(m.PbP2P)
		copy(dAtA[i:], m.PbP2P)
		i = encodeVarintDefaultLemPars(dAtA, i, uint64(len(m.PbP2P)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.PsBAU) > 0 {
		i -= len(m.PsBAU)
		copy(dAtA[i:], m.PsBAU)
		i = encodeVarintDefaultLemPars(dAtA, i, uint64(len(m.PsBAU)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.PbBAU) > 0 {
		i -= len(m.PbBAU)
		copy(dAtA[i:], m.PbBAU)
		i = encodeVarintDefaultLemPars(dAtA, i, uint64(len(m.PbBAU)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintDefaultLemPars(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintDefaultLemPars(dAtA []byte, offset int, v uint64) int {
	offset -= sovDefaultLemPars(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *DefaultLemPars) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovDefaultLemPars(uint64(l))
	}
	l = len(m.PbBAU)
	if l > 0 {
		n += 1 + l + sovDefaultLemPars(uint64(l))
	}
	l = len(m.PsBAU)
	if l > 0 {
		n += 1 + l + sovDefaultLemPars(uint64(l))
	}
	l = len(m.PbP2P)
	if l > 0 {
		n += 1 + l + sovDefaultLemPars(uint64(l))
	}
	l = len(m.PsP2P)
	if l > 0 {
		n += 1 + l + sovDefaultLemPars(uint64(l))
	}
	l = len(m.Beta)
	if l > 0 {
		n += 1 + l + sovDefaultLemPars(uint64(l))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovDefaultLemPars(uint64(l))
	}
	return n
}

func sovDefaultLemPars(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozDefaultLemPars(x uint64) (n int) {
	return sovDefaultLemPars(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *DefaultLemPars) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowDefaultLemPars
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
			return fmt.Errorf("proto: DefaultLemPars: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: DefaultLemPars: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDefaultLemPars
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
				return ErrInvalidLengthDefaultLemPars
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDefaultLemPars
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PbBAU", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDefaultLemPars
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
				return ErrInvalidLengthDefaultLemPars
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDefaultLemPars
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PbBAU = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PsBAU", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDefaultLemPars
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
				return ErrInvalidLengthDefaultLemPars
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDefaultLemPars
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PsBAU = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PbP2P", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDefaultLemPars
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
				return ErrInvalidLengthDefaultLemPars
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDefaultLemPars
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PbP2P = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PsP2P", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDefaultLemPars
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
				return ErrInvalidLengthDefaultLemPars
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDefaultLemPars
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PsP2P = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Beta", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDefaultLemPars
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
				return ErrInvalidLengthDefaultLemPars
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDefaultLemPars
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Beta = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowDefaultLemPars
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
				return ErrInvalidLengthDefaultLemPars
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthDefaultLemPars
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipDefaultLemPars(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthDefaultLemPars
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
func skipDefaultLemPars(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowDefaultLemPars
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
					return 0, ErrIntOverflowDefaultLemPars
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
					return 0, ErrIntOverflowDefaultLemPars
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
				return 0, ErrInvalidLengthDefaultLemPars
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupDefaultLemPars
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthDefaultLemPars
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthDefaultLemPars        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowDefaultLemPars          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupDefaultLemPars = fmt.Errorf("proto: unexpected end of group")
)
