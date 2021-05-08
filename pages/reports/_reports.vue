<template>
  <v-container>
    <div v-if="$apollo.loading">Loading</div>
    <div v-else>
      <v-row justify="center" align="center">
        <v-col cols="2"><h1>List of Active Kills</h1></v-col>
        <v-col cols="8">
          <strong>Report Title:</strong>
          {{ reportData.report.title }}
        </v-col>
        <v-col cols="2">
          Timestamp:
          {{ $moment(reportData.report.startTime).format('MMM DD, YYYY') }}
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col
          v-for="item in reportData.report.fights"
          :key="item.id"
          cols="12"
          sm="2"
        >
          <v-card x-small rounded :href="item.id.toString()">
            <v-card-subtitle>
              {{ item.encounterID }} - Encounter ID
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <hr class="my-3" />
    <NuxtChild />
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
    reportData() {
      return {
        query: reportDataQuery,
        variables: {
          // reportCode: '68vHraFT4Kqwn3VC',
          reportCode: this.userReportCode,
        },
      }
    },
  },

  data() {
    return {
      userReportCode: this.$route.params.reports,
    }
  },
  created() {
    console.log(this.$route.params)
    console.log(this.userReportCode)

  },
}
</script>
