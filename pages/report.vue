<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="2">Healing Timeline</v-col>
      <v-col cols="12" sm="2">Report Name - Boss Name</v-col>
      <v-col cols="12" sm="2">Report Date</v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col v-for="n in 4" :key="n" cols="12" sm="3">
        <v-row no-gutters>Player Name</v-row>
        <v-row no-gutters>
          <v-data-table
            :headers="headers"
            :items="abilities"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
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
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="end" no-gutters>
      <v-col md="2" align="right">
        <v-icon color="green">mdi-file-chart</v-icon>
        Report Links
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    loading: false,
    singleExpand: true,
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
      { name: 'Revival', time: 100 },
      { name: "Invoke Yu'lon", time: 200 },
      { name: 'Essence Font', time: 300 },
    ],
  }),
})
</script>
