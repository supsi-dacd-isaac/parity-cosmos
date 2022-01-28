package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// KpiFeaturesKeyPrefix is the prefix to retrieve all KpiFeatures
	KpiFeaturesKeyPrefix = "KpiFeatures/value/"
)

// KpiFeaturesKey returns the store key to retrieve a KpiFeatures from the index fields
func KpiFeaturesKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
