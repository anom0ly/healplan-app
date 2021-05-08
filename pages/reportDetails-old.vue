<template>
  <v-container>
    <div v-if="$apollo.loading">Loading</div>
    <div v-else>
      <v-row justify="center" align="center">
        <v-col cols="2"><h1>Healing Timeline</h1></v-col>
        <v-col cols="8">
          <strong>Report Title:</strong>
          {{ reportData.report.title }} - <strong>Boss Name:</strong>
          {{ reportData.report.fights[1].encounterID }}
        </v-col>
        <v-col cols="2">
          Timestamp:
          {{ $moment(reportData.report.startTime).format('MMM DD, YYYY') }}
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col v-for="n in 4" :key="n" cols="12" sm="3">
          <v-card shaped>
            <v-card-title>Player Name #{{ n }}</v-card-title>
            <v-card-subtitle>{{ n }} Player Class</v-card-subtitle>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="abilities"
                :single-expand="true"
                item-key="name"
                hide-default-footer
                show-expand
              >
                <template v-slot:expanded-item="{ headers, item }">
                  <td :colspan="headers.length">
                    More info about {{ item.name }} including potential WCL /
                    Wowhead link to this area.
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row justify="end">
      <v-col md="2" align="right">
        <v-icon color="green">mdi-file-chart</v-icon>
        Report Links
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import reportDataQuery from '~/queries/reportData.gql'

export default {
  apollo: {
    reportData: {
      query: reportDataQuery,
    },
  },

  data() {
    return {
      reportData: [],
      expanded: [],
      headers: [
        {
          text: 'Abilities Used',
          align: 'start',
          value: 'name',
        },
        { text: 'Time', value: 'time' },
        { text: '', value: 'data-table-expand' },
      ],
      abilities: [
        { name: 'Revival', time: '1:00' },
        { name: "Invoke Yu'lon", time: '2:20' },
        { name: 'Essence Font', time: '3:30' },
      ],
    }
  },
}
</script>
