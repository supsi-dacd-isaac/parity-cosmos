package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LemDatasetKeyPrefix is the prefix to retrieve all LemDataset
	LemDatasetKeyPrefix = "LemDataset/value/"
)

// LemDatasetKey returns the store key to retrieve a LemDataset from the index fields
func LemDatasetKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
