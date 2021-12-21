package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// DefaultLemParsKeyPrefix is the prefix to retrieve all DefaultLemPars
	DefaultLemParsKeyPrefix = "DefaultLemPars/value/"
)

// DefaultLemParsKey returns the store key to retrieve a DefaultLemPars from the index fields
func DefaultLemParsKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
