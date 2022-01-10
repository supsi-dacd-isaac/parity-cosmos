package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/supsi-dacd-isaac/parity-cosmos/pm/x/pm/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				Dso: &types.Dso{
					Idx:     "idx",
					Address: "address",
				},
				Aggregator: &types.Aggregator{
					Idx:     "idx",
					Address: "address",
				},
				PlayerList: []types.Player{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				LemList: []types.Lem{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				LemMeasureList: []types.LemMeasure{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				SlaList: []types.Sla{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				KpiList: []types.Kpi{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				KpiMeasureList: []types.KpiMeasure{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				LemDatasetList: []types.LemDataset{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				DefaultLemParsList: []types.DefaultLemPars{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				MarketOperator: &types.MarketOperator{
					Idx:     "idx",
					Address: "address",
				},
				GridStateList: []types.GridState{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated player",
			genState: &types.GenesisState{
				PlayerList: []types.Player{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated lem",
			genState: &types.GenesisState{
				LemList: []types.Lem{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated lemMeasure",
			genState: &types.GenesisState{
				LemMeasureList: []types.LemMeasure{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated sla",
			genState: &types.GenesisState{
				SlaList: []types.Sla{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated kpi",
			genState: &types.GenesisState{
				KpiList: []types.Kpi{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated kpiMeasure",
			genState: &types.GenesisState{
				KpiMeasureList: []types.KpiMeasure{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated lemDataset",
			genState: &types.GenesisState{
				LemDatasetList: []types.LemDataset{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated defaultLemPars",
			genState: &types.GenesisState{
				DefaultLemParsList: []types.DefaultLemPars{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated gridState",
			genState: &types.GenesisState{
				GridStateList: []types.GridState{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
