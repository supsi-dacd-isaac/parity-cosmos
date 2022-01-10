package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// GridStateKeyPrefix is the prefix to retrieve all GridState
	GridStateKeyPrefix = "GridState/value/"
)

// GridStateKey returns the store key to retrieve a GridState from the index fields
func GridStateKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
