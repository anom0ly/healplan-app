<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo-bold />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to Heal Plan </v-card-title>
        <v-card-text>
          <p>
            We are just getting started, so check back often for our awful
            progress! We may get this done in Shadowlands.
          </p>
          <div class="text-xs-right">
            <v-icon color="#01d355">mdi-coffee</v-icon>
          </div>
          <hr class="my-3" />
          <small>Like in Blizzard Soon Time</small>
        </v-card-text>
      </v-card>
      <hr class="my-3" />
      <v-form ref="form">
        <v-text-field
          v-model="reportCode"
          lable="Report Code"
          :rules="reportRules"
          append-outer-icon="mdi-send"
          @click:append-outer="submitReport"
        ></v-text-field>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import LogoBold from '~/components/LogoBold'

export default {
  components: {
    LogoBold,
  },
  data() {
    return {
      reportCode: '',
      reportRules: [(v) => !!v || 'Report Code is Required'],
    }
  },
  methods: {
    submitReport() {
      if (this.$refs.form.validate()) {
        console.log(this.reportCode)
        this.$router.push({ path: `/reports/${this.reportCode}` })
      }
    },
  },
}
</script>
