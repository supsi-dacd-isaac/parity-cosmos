VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')

ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=PM \
		  -X github.com/cosmos/cosmos-sdk/version.ServerName=pmd \
		  -X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
		  -X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT)

BUILD_FLAGS := -ldflags '$(ldflags)'

all: install

build: go.sum
		@echo "--> Building pmd"
		@go build $(BUILD_FLAGS) ./cmd/pmd

install: go.sum
		@echo "--> Building pmd"
		@go build $(BUILD_FLAGS) ./cmd/pmd
		@echo "--> Moving pmd to "$(GOPATH)/bin" folder"
		@mv pmd $(GOPATH)/bin
