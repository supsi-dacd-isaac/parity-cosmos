package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ForecastKeyPrefix is the prefix to retrieve all Forecast
	ForecastKeyPrefix = "Forecast/value/"
)

// ForecastKey returns the store key to retrieve a Forecast from the index fields
func ForecastKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
